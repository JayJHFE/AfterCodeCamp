import { useRouter } from "next/router";
import * as S from "../layout.styles";
import Link from "next/link";

const LOGIN_HEADER = ["/login"];
export default function LayoutBlackHeader() {
  const router = useRouter();
  const isLoginHeader = LOGIN_HEADER.includes(router.asPath);
  return (
    <S.BlackHeaderWrapper>
      <Link href={"/"}>
        <S.BlackHeaderLogo src="/images/header/header-logo-white.png" />
      </Link>
      <S.BlackHeaderMenu>
        <Link href={"/brand"}>
          <S.BlackHeaderMenuLetter>Brand</S.BlackHeaderMenuLetter>
        </Link>
        <S.BlackHeaderMenuLetter>CATEGORY</S.BlackHeaderMenuLetter>
        <S.BlackHeaderMenuLetter>LIFE</S.BlackHeaderMenuLetter>
        <S.BlackHeaderMenuLetter>BEUATY</S.BlackHeaderMenuLetter>
        <S.BlackHeaderMenuLetter>|</S.BlackHeaderMenuLetter>
        <S.BlackHeaderMenuLetter>#STYLE</S.BlackHeaderMenuLetter>
        <S.BlackHeaderMenuLetter>EVENT</S.BlackHeaderMenuLetter>
        <S.BlackHeaderMenuLetter>BEST</S.BlackHeaderMenuLetter>
      </S.BlackHeaderMenu>
      {isLoginHeader ? (
        <>
          <Link href={"/signup"}>
            <S.BlackHeaderSignUp>회원가입</S.BlackHeaderSignUp>
          </Link>
        </>
      ) : (
        <Link href={"/login"}>
          <S.BlackHeaderSignUp>로그인</S.BlackHeaderSignUp>
        </Link>
      )}
      <S.BlackHeaderBasket>장바구니</S.BlackHeaderBasket>
      <S.BlackHeaderBasketImage>
        <S.BlackHeaderTest>0</S.BlackHeaderTest>
      </S.BlackHeaderBasketImage>
    </S.BlackHeaderWrapper>
  );
}
