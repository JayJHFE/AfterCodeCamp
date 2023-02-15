import { useRouter } from "next/router";
import LayoutHeader from "./header";
import LayoutFooter from "./footer";
import LayoutMenu from "./menu";
import * as S from "./layout.styles";
import LayoutBlackHeader from "./blackheader";

interface ILayoutProps {
  children: JSX.Element;
}
// const HIDDEN_FOR_LOGIN = ["/", "/product", "/payment", "new"];
const HIDDEN_ALL = ["/login", "/signup"];
const SHOW_BLACK_HEADER = ["/login", "/signup"];

export default function Layout(props: ILayoutProps) {
  const router = useRouter();
  // const isHiddenForLogin = HIDDEN_FOR_LOGIN.includes(router.asPath);
  const isHiddenAll = HIDDEN_ALL.includes(router.asPath);
  const isShownBlackHeader = SHOW_BLACK_HEADER.includes(router.asPath);

  return (
    <>
      {!isHiddenAll && <LayoutHeader />}
      {!isHiddenAll && <LayoutMenu />}
      {isShownBlackHeader && <LayoutBlackHeader />}
      {/* <LayoutHeader /> */}
      {/* <LayoutMenu /> */}
      {/* <LayoutBlackHeader /> */}
      <div>
        <S.Body>
          <div>{props.children}</div>
        </S.Body>
      </div>
      <LayoutFooter />
    </>
  );
}
