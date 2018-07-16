import {User} from "../model/user";
import * as firebase from "firebase";
import {IUserRepository} from "../repository/user_repository";

interface IAuthUsecase {
  signUp(username: string, email: string, password: string): Promise<User>;
  signIn(email: string, password: string): Promise<User>;
  getToken(): Promise<string>;
  isLogin(): boolean;
}

class AuthUsecase implements IAuthUsecase {

  constructor(readonly userRepository: IUserRepository) {

  }

  public signUp(username: string, email: string, password: string): Promise<User> {
    console.log(this);
    return new Promise<User>((resolve, reject) => {
      firebase.auth().createUserWithEmailAndPassword(email, password)
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
      firebase.auth().signInWithEmailAndPassword(email, password)
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
      const user: firebase.User | null = firebase.auth().currentUser;
      if (user) {
        user.getIdToken(true).then((token: string) => {
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

  public isLogin(): boolean {
    return firebase.auth().currentUser != null;
  }
}

const createAuthUsecase = (userRepository: IUserRepository): IAuthUsecase => {
  return new AuthUsecase(userRepository);
};

export { IAuthUsecase, createAuthUsecase };