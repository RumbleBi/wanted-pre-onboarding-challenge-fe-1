import { ChangeEvent } from "react";

export interface ISignupInput {
  email: string;
  password: string;
}
export interface ISignupPresenter {
  handleSignupChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleSignupSubmit: () => void;
  handleLoginPage: () => void;
  canSignin: boolean;
}

export interface ICanSigninProps {
  canSignin: boolean;
}
