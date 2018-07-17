import {User} from "../model/user";
import * as firebase from "firebase";
import {IUserRepository} from "../repository/user_repository";

interface IAuthUsecase {
  signUp(username: string, email: string, password: string): Promise<User>;
  signIn(email: string, password: string): Promise<User>;
  getToken(): Promise<string>;
  getLoginUser(): Promise<User | null>;
  signOut(): Promise<void>;
}

class AuthUsecase implements IAuthUsecase {

  constructor(readonly userRepository: IUserRepository) {

  }

  public signUp(username: string, email: string, password: string): Promise<User> {
    return new Promise<User>((resolve, reject) => {
      firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)
        .then((): Promise<firebase.auth.UserCredential> => {
          return firebase.auth().createUserWithEmailAndPassword(email, password);
        })
        .then((cred: firebase.auth.UserCredential): Promise<string> => {
          return this.getToken();
        })
        .then((token: string): Promise<User> => {
          return this.userRepository.create(token, username);
        })
        .then((user: User): void => {
          resolve(user);
        })
        .catch((error: Error): void => {
          reject(error);
        });
    });
  }

  public signIn(email: string, password: string): Promise<User> {
    return new Promise<User>((resolve, reject) => {
      firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)
        .then((): Promise<firebase.auth.UserCredential> => {
          return firebase.auth().signInWithEmailAndPassword(email, password);
        })
        .then((cred: firebase.auth.UserCredential): Promise<string> => {
          return this.getToken();
        })
        .then((token: string): Promise<User> => {
          return this.userRepository.getMe(token);
        })
        .then((user: User): void => {
          resolve(user);
        })
        .catch((error: Error): void => {
          reject(error);
        });
    });
  }

  public getToken(): Promise<string> {
    return new Promise<string>((resolve, reject) => {
      const authUser: firebase.User | null = firebase.auth().currentUser;
      if (authUser) {
        authUser.getIdToken(true).then((token: string) => {
          resolve(token);
        })
        .catch((error: Error) => {
          reject(error);
        });
      } else {
        reject(new Error(""));
      }
    });
  }

  public getLoginUser(): Promise<User | null> {
    return new Promise<User | null>((resolve, reject) => {
      firebase.auth().onAuthStateChanged(() => {
        const authUser: firebase.User | null = firebase.auth().currentUser;
        if (authUser) {
          authUser.getIdToken(true)
            .then((token: string): Promise<User> => {
              return this.userRepository.getMe(token);
            })
            .then((user: User): void => {
              resolve(user);
            })
            .catch((error: Error): void => {
              reject(error);
            });
        } else {
          resolve(null);
        }
      });
    });
  }

  public signOut(): Promise<void> {
    return firebase.auth().signOut();
  }
}

const createAuthUsecase = (userRepository: IUserRepository): IAuthUsecase => {
  return new AuthUsecase(userRepository);
};

export { IAuthUsecase, createAuthUsecase };