import * as S from "../layout.styles";

export default function LayoutHeader() {
  return (
    <S.HeaderWrapper>
      <S.HeaderLogo src="/images/header/header-logo.png" />
      <S.HeaderMenu>
        <S.HeaderLogin>로그인</S.HeaderLogin>
        <S.HeaderSignUp>회원가입</S.HeaderSignUp>
        <S.HeaderBasket>
          <S.Letter>장바구니</S.Letter>
          <S.BasketImage>
            <S.Test>0</S.Test>
          </S.BasketImage>
        </S.HeaderBasket>
      </S.HeaderMenu>
    </S.HeaderWrapper>
  );
}
