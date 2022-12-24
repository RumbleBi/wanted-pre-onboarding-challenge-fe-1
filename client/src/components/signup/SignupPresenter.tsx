import * as S from "./SignupStyles";

export default function SignupPresenter(props: any) {
  return (
    <S.Background>
      <S.Container>
        <h1>회원가입</h1>
        <div>
          <p>아이디</p>
          <input type='text' placeholder='올바른 형식의 이메일을 입력해야 합니다.' />
        </div>
        <div>
          <p>비밀번호</p>
          <input type='password' placeholder='8글자 이상 입력해야 합니다.' />
        </div>
        <div className='button__wrapper'>
          <button>회원등록</button>
          <button onClick={props.onClickLoginPage}>돌아가기</button>
        </div>
      </S.Container>
    </S.Background>
  );
}
