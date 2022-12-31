import styled from "@emotion/styled";
import { IValidationProps } from "./SignupTypes";
// font 색상 #69491A
// container 색상 #E4B660
// button 색상 #FFD954
// 선색 #F2AB39
export const Background = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const Container = styled.div`
  width: 500px;
  height: 500px;
  background-color: #e4b660;
  border: 2px solid #f2ab39;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  .button__wrapper {
    align-items: center;
  }
  h1 {
    color: #69491a;
  }
  div {
    display: flex;
    flex-direction: column;
    width: 80%;
    p {
      color: #69491a;
      font-weight: bold;
      font-size: 20px;
    }
    input {
      height: 30px;
      margin-top: 5px;
      border: 1px solid #f2ab39;
      padding-left: 5px;
      color: #69491a;
      background-color: #ffd954;
      ::placeholder {
        color: #69491a;
        font-weight: bold;
      }
    }
    button {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 200px;
      height: 30px;
      margin: 10px 0px;
      border-radius: 20px;
      border: none;
      background-color: #ffffff;
      color: #69491a;
      font-size: 20px;
      font-weight: bold;
      cursor: pointer;
    }
    button:first-of-type {
      background-color: ${(props: IValidationProps) => (props.validation ? "#ffd954" : "#ffffff")};
    }
  }
`;
