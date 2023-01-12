import { ChangeEvent } from "react";

export interface IUserSignupInput {
  email: string;
  password: string;
}

export interface ILoginPresenterProps {
  onChangeLoginUserInput: (e: ChangeEvent<HTMLInputElement>) => void;
  onClickLogin: () => void;
  onClickSignupPage: () => void;
}
