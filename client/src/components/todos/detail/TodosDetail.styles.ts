import styled from "@emotion/styled";

export const Container = styled.div`
  div:first-of-type {
    width: 100%;
    background-color: red;
    border: 2px solid #f2ab39;
    font-size: 14px;
    border-radius: 10px;
    background-color: #ffffff;
    overflow-wrap: break-word;
    cursor: default;
    padding: 5px;
  }
  div:nth-of-type(2) {
    margin-left: 80%;
    margin-top: 5px;
    button {
      width: 50%;
      font-weight: bold;
      padding: 5px 5px;
      border-radius: 10px;
      border: 1px solid #f2ab39;
      background-color: #ffffff;
      color: #69491a;
      font-size: 12px;
      cursor: pointer;
      :hover {
        background-color: #ffd954;
      }
    }
  }
`;
