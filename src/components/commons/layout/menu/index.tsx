import * as S from "../layout.styles";

export default function LayoutMenu() {
  return (
    <S.MenuWrapper>
      <S.Menu>
        <S.MenuLetter>Brand</S.MenuLetter>
        <S.MenuLetter>CATEGORY</S.MenuLetter>
        <S.MenuLetter>LIFE</S.MenuLetter>
        <S.MenuLetter>BEUATY</S.MenuLetter>
        <S.MenuLetter>|</S.MenuLetter>
        <S.MenuLetter>#STYLE</S.MenuLetter>
        <S.MenuLetter>EVENT</S.MenuLetter>
      </S.Menu>
    </S.MenuWrapper>
  );
}
