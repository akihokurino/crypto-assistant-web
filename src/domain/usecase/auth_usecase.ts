import {User} from "../model/user";
import * as firebase from "firebase";
import {IUserRepository} from "../repository/user_repository";

interface IAuthUsecase {
  signUp(username: string, email: string, password: string): Promise<User>;
  signIn(email: string, password: string): Promise<User>;
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
        .then((): Promise<User> => {
          return this.userRepository.create(username);
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
        .then((): Promise<User> => {
          return this.userRepository.getMe();
        })
        .then((user: User): void => {
          resolve(user);
        })
        .catch((error: Error): void => {
          reject(error);
        });
    });
  }

  public getLoginUser(): Promise<User | null> {
    return new Promise<User | null>((resolve, reject) => {
      firebase.auth().onAuthStateChanged(() => {
        const authUser: firebase.User | null = firebase.auth().currentUser;
        if (authUser) {
          this.userRepository.getMe()
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