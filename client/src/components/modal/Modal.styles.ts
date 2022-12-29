import styled from "@emotion/styled";

export const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.2);
`;

export const Container = styled.div`
  padding: 5px;
  border-radius: 20px;
  padding: 10px;
  background-color: #e4b660;
  color: #69491a;
  border: 2px solid #f2ab39;
  position: absolute;
  display: flex;
  flex-direction: column;
  top: 100px;
  left: 0;
  z-index: 3;
  width: 100%;
  div {
    margin-bottom: 5px;
    font-size: 16px;
    font-weight: bold;
  }
  input {
    width: 100%;
    padding: 5px;
    border-radius: 10px;
    border: 2px solid #f2ab39;
    color: #69491a;
  }
  button {
    font-size: 14px;
    margin: 0px 5px;
    width: 50px;
    padding: 5px;
    border-radius: 10px;
    border: 2px solid #f2ab39;
    color: #69491a;
    font-weight: bold;
    background-color: #ffffff;
    cursor: pointer;
    :hover {
      background-color: #ffd954;
    }
  }
  div:nth-of-type(3) {
    display: flex;
    justify-content: flex-end;
  }
`;
