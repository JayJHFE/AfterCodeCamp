import * as S from "../layout.styles";
import Link from "next/link";

export default function LayoutMenu() {
  return (
    <S.MenuWrapper>
      <S.Menu>
        <Link href={`/brand`}>
          <S.MenuLetter>Brand</S.MenuLetter>
        </Link>
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
