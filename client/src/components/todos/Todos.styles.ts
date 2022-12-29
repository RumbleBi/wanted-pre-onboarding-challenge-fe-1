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
export const BodyWrapper = styled.div`
  margin-bottom: 20px;
  color: #69491a;
  width: 100%;
  height: 350px;
  border: 2px solid #f2ab39;
  border-radius: 20px;
  padding: 10px;
  background-color: #ffd954;
  overflow-y: auto;
`;
export const TodoItem = styled.div`
  width: 100%;
  margin: 10px 0px;
  padding: 5px;
  border: 2px solid #f2ab39;
  border-radius: 10px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;

  span:first-of-type {
    width: 72%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  span:nth-of-type(2) {
    padding-top: 4px;
    text-align: end;
    font-size: 12px;
    width: 28%;
  }
  div:first-of-type {
    font-weight: bold;
    display: flex;
    justify-content: space-between;
    margin-bottom: 5px;
  }
  div:nth-of-type(2) {
    font-size: 14px;
    overflow-wrap: break-word;
  }
`;
