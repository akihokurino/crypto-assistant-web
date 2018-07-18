import * as firebase from "firebase";

const getToken = (): Promise<string> => {
  return new Promise<string>((resolve, reject) => {
    const authUser: firebase.User | null = firebase.auth().currentUser;
    if (authUser) {
      authUser.getIdToken(true)
        .then((token: string): void => {
          resolve(token);
        })
        .catch((error: Error): void => {
          reject(error);
        });
    } else {
      reject(new Error(""));
    }
  });
};

export default getToken;