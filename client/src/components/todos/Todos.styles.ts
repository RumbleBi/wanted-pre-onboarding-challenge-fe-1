import styled from "@emotion/styled";
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
  position: relative;
  padding: 0px 20px;
  width: 500px;
  height: 500px;
  background-color: #e4b660;
  border: 2px solid #f2ab39;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const TopWrapper = styled.div`
  width: 100%;
  height: 50px;
  text-align: center;
  h1 {
    padding-top: 5px;
    color: #69491a;
  }
  button {
    top: 5px;
    right: 20px;
    width: 80px;
    height: 35px;
    font-size: 16px;
    border: 2px solid #f2ab39;
    color: #69491a;
    font-weight: bold;
    background-color: #ffffff;
    position: absolute;
    cursor: pointer;
    :hover {
      background-color: #ffd954;
    }
  }
`;
