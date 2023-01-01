import { ChangeEvent } from "react";

export interface IUserSignupInput {
  email: string;
  password: string;
}
export interface ISignupPresenter {
  onChangeSignupUserInput: (e: ChangeEvent<HTMLInputElement>) => void;
  onClickSignup: () => void;
  onClickLoginPage: () => void;
  validation: boolean;
}

export interface IValidationProps {
  validation: boolean;
}
