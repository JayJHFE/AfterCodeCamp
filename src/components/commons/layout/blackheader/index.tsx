import * as S from "../layout.styles";

export default function LayoutBlackHeader() {
  return (
    <S.BlackHeaderWrapper>
      <S.BlackHeaderLogo src="/images/header/header-logo-white.png" />
      <S.BlackHeaderMenu>
        <S.BlackHeaderMenuLetter>Brand</S.BlackHeaderMenuLetter>
        <S.BlackHeaderMenuLetter>CATEGORY</S.BlackHeaderMenuLetter>
        <S.BlackHeaderMenuLetter>LIFE</S.BlackHeaderMenuLetter>
        <S.BlackHeaderMenuLetter>BEUATY</S.BlackHeaderMenuLetter>
        <S.BlackHeaderMenuLetter>|</S.BlackHeaderMenuLetter>
        <S.BlackHeaderMenuLetter>#STYLE</S.BlackHeaderMenuLetter>
        <S.BlackHeaderMenuLetter>EVENT</S.BlackHeaderMenuLetter>
        <S.BlackHeaderMenuLetter>BEST</S.BlackHeaderMenuLetter>
      </S.BlackHeaderMenu>
      <S.BlackHeaderSignUp>회원가입</S.BlackHeaderSignUp>
      <S.BlackHeaderBasket>장바구니</S.BlackHeaderBasket>
      <S.BlackHeaderBasketImage>
        <S.BlackHeaderTest>0</S.BlackHeaderTest>
      </S.BlackHeaderBasketImage>
    </S.BlackHeaderWrapper>
  );
}
