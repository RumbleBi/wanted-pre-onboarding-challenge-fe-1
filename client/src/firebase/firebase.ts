import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../config";
import {
  getAuth, // authentication 설정
  signInWithPopup, //google 로그인을 팝업창에 띄우기 위해
  GoogleAuthProvider, //google login 기능
  signInWithEmailAndPassword, // email 로그인
  createUserWithEmailAndPassword, //email 회원가입
} from "firebase/auth";

const app = initializeApp(firebaseConfig);
const auth = getAuth();

export const signupEmail = (data) => {
  return createUserWithEmailAndPassword(auth, data.email, data.password);
};

export const loginEmail = (data) => {
  return signInWithEmailAndPassword(auth, data.email, data.password);
};

const provider = new GoogleAuthProvider();

export const loginGoogle = () => {
  return signInWithPopup(auth, provider);
};
