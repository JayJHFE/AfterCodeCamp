import * as S from "./signupstyles";

export default function SignUpPageComponent() {
  return (
    <>
      <S.Header>JOIN MEMBER</S.Header>
      <S.Body>
        <S.SignUpWrapper>
          <S.SignUpBox>
            <S.Letter>아이디</S.Letter>
            <S.SignUpInput1 placeholder="이메일 아이디를 @까지 정확하게 입력하세요" />
          </S.SignUpBox>
          <S.SignUpBox>
            <S.Letter>비밀번호</S.Letter>
            <S.SignUpInput2 placeholder="영문+숫자 조합 8~16자리를 입력해주세요." />
          </S.SignUpBox>
          <S.SignUpBox>
            <S.Letter>비밀번호 확인</S.Letter>
            <S.SignUpInput3 placeholder="영문+숫자 조합 8~16자리를 입력해주세요." />
          </S.SignUpBox>
          <S.SignUpBox>
            <S.Letter>이름</S.Letter>
            <S.SignUpInput4 placeholder="ex) 홍길동" />
          </S.SignUpBox>
        </S.SignUpWrapper>
      </S.Body>
      <S.BtnBox>
        <S.Cancel>취소</S.Cancel>
        <S.Confirm>확인</S.Confirm>
      </S.BtnBox>
    </>
  );
}
