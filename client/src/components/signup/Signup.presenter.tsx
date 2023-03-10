import * as S from "./Signup.styles";
import { ISignupPresenter } from "./Signup.types";
export default function SignupPresenter(props: ISignupPresenter) {
  return (
    <S.Background>
      <S.Container canSignin={props.canSignin}>
        <h1>회원가입</h1>
        <div>
          <p>이메일</p>
          <input
            name='email'
            type='email'
            placeholder='"@" 와 "." 을 포함한 형식의 이메일을 입력해야 합니다.'
            onChange={props.handleSignupChange}
          />
        </div>
        <div>
          <p>비밀번호</p>
          <input
            name='password'
            type='password'
            placeholder='8글자 이상 입력해야 합니다.'
            onChange={props.handleSignupChange}
          />
        </div>
        <div className='button__wrapper'>
          <button onClick={props.handleSignupSubmit}>회원등록</button>
          <button onClick={props.handleLoginPage}>돌아가기</button>
        </div>
      </S.Container>
    </S.Background>
  );
}
