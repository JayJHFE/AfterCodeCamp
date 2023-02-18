import * as S from "../layout.styles";
import Link from "next/link";
import { useFetchUserLoggedIn } from "../../hooks/queries/useFetchUserLoggedIn";
import { useLogoutUser } from "../../hooks/mutations/useLogoutUser";
import CreaditModal from "../../../units/Payment/Creadit.index";
import { infoUserState } from "../../../../commons/stores";
import { useRecoilState } from "recoil";
import { useState } from "react";

export default function LayoutHeader() {
  const { data } = useFetchUserLoggedIn();
  const { logoutUser } = useLogoutUser();
  const [isOpen, setIsOpen] = useState(false);
  const [infoUser] = useRecoilState(infoUserState);
  const handlePayment = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <>
      <S.HeaderWrapper>
        <Link href={"/"}>
          <S.HeaderLogo src="/images/header/header-logo.png" />
        </Link>
        <S.HeaderMenu>
          <>
            {data?.fetchUserLoggedIn.name ? (
              <S.LoggedInBox>
                <S.NameBox>{data?.fetchUserLoggedIn.name}</S.NameBox>
                <S.PointLetter> 님 포인트 </S.PointLetter>
                <S.PointNumber>
                  {data?.fetchUserLoggedIn.userPoint?.amount}
                </S.PointNumber>
                <S.PointBox2> P </S.PointBox2>
              </S.LoggedInBox>
            ) : (
              <Link href={"/login"}>
                <S.HeaderLogin>로그인</S.HeaderLogin>
              </Link>
            )}{" "}
          </>
          <>
            {data?.fetchUserLoggedIn.name ? (
              <S.ChargePoint onClick={handlePayment}>충전</S.ChargePoint>
            ) : (
              <></>
            )}{" "}
          </>
          <>
            {data?.fetchUserLoggedIn.name ? (
              <S.LogOut onClick={logoutUser}>로그아웃</S.LogOut>
            ) : (
              <Link href={"/signup"}>
                <S.HeaderSignUp>회원가입</S.HeaderSignUp>
              </Link>
            )}{" "}
          </>
          <S.HeaderBasket>
            <S.Letter>장바구니</S.Letter>
            <S.BasketImage>
              <S.Test>0</S.Test>
            </S.BasketImage>
          </S.HeaderBasket>
        </S.HeaderMenu>
      </S.HeaderWrapper>
      <CreaditModal
        isOpen={isOpen}
        infoUser={infoUser}
        setIsOpen={setIsOpen}
        handleCradit={handlePayment}
      />
    </>
  );
}
