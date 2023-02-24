import { ChangeEvent } from "react";

export interface ILoginInput {
  email: string;
  password: string;
}

export interface ILoginPresenterProps {
  handleLoginInput: (e: ChangeEvent<HTMLInputElement>) => void;
  handleLoginSubmit: () => void;
  handleLoginGoogleSubmit: () => void;
  handleSignupPage: () => void;
}
