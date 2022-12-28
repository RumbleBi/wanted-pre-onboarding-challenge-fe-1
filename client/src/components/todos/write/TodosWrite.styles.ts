import styled from "@emotion/styled";
// font 색상 #69491A
// container 색상 #E4B660
// button 색상 #FFD954
// 선색 #F2AB39

export const Container = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  input {
    width: 90%;
    height: 25px;
    font-size: 16px;
    padding-left: 10px;
    color: #69491a;
    background-color: #ffd954;
    font-weight: bold;
    border: 2px solid #f2ab39;
    ::placeholder {
      color: #69491a;
      font-weight: bold;
    }
  }
  button {
    font-size: 18px;
    font-weight: bold;
    color: #69491a;
    border: 2px solid #f2ab39;
    width: 15%;
    height: 50px;
    cursor: pointer;
    background-color: #ffffff;
    :hover {
      background-color: #ffd954;
    }
  }
`;
