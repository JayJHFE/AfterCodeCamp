import * as S from "../layout.styles";
import Link from "next/link";

export default function LayoutMenu() {
  return (
    <S.MenuWrapper>
      <S.Menu>
        <Link href={`/brand`}>
          <S.MenuLetter>Brand</S.MenuLetter>
        </Link>
        <Link href={`/brand`}>
          <S.MenuLetter>CATEGORY</S.MenuLetter>
        </Link>
        <Link href={`/brand`}>
          <S.MenuLetter>LIFE</S.MenuLetter>
        </Link>
        <Link href={`/brand`}>
          <S.MenuLetter>BEUATY</S.MenuLetter>
        </Link>
        <S.MenuLetter>|</S.MenuLetter>
        <Link href={`/brand`}>
          <S.MenuLetter>#STYLE</S.MenuLetter>
        </Link>
        <Link href={`/brand`}>
          <S.MenuLetter>EVENT</S.MenuLetter>
        </Link>
      </S.Menu>
    </S.MenuWrapper>
  );
}
