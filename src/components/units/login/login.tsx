import * as S from "./loginstyles";

export default function LoginPageComponent() {
  return (
    <>
      <S.Header>LOGIN</S.Header>
      <S.Body>
        <S.LoginInfo>
          <S.IdBox>
            <S.Letter>아이디</S.Letter>
            <S.IdInput placeholder="이메일 아이디를 @까지 정확하게 입력하세요" />
          </S.IdBox>
          <S.PwBox>
            <S.Letter>비밀번호</S.Letter>
            <S.PwInput placeholder="영문+숫자 조합 8~16자리를 입력해주세요." />
          </S.PwBox>
        </S.LoginInfo>
        <S.LoginButton>로그인</S.LoginButton>
      </S.Body>
    </>
  );
}
