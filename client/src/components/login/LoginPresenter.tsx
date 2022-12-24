import * as S from "./LoginStyles";

export default function LoginPresenter(props: any) {
  return (
    <S.Background>
      <S.Container>
        <h1>Todo List</h1>
        <div>
          <p>이메일</p>
          <input type='text' />
        </div>
        <div>
          <p>비밀번호</p>
          <input type='password' placeholder='8글자 이상 입력해야 합니다.' />
        </div>
        <div className='button__wrapper'>
          <button onClick={props.onClickLogin}>로그인</button>
          <button onClick={props.onClickSignupPage}>회원가입</button>
        </div>
      </S.Container>
    </S.Background>
  );
}
