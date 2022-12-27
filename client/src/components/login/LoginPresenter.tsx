import * as S from "./LoginStyles";

export default function LoginPresenter(props: any) {
  return (
    <S.Background>
      <S.Container>
        <h1>Todo List</h1>
        <div>
          <p>이메일</p>
          <input
            name='email'
            type='email'
            placeholder='"@" 와 "." 을 포함한 형식의 이메일을 입력해야 합니다.'
            onChange={props.onChangeLoginUserInput}
          />
        </div>
        <div>
          <p>비밀번호</p>
          <input
            name='password'
            type='password'
            placeholder='8글자 이상 입력해야 합니다.'
            onChange={props.onChangeLoginUserInput}
          />
        </div>
        <div className='button__wrapper'>
          <button onClick={props.onClickLogin}>로그인</button>
          <button onClick={props.onClickSignupPage}>회원가입</button>
        </div>
      </S.Container>
    </S.Background>
  );
}
