import { useRouter } from "next/router";
import LayoutHeader from "./header";
import LayoutFooter from "./footer";
import LayoutMenu from "./menu";
import * as S from "./layout.styles";

interface ILayoutProps {
  children: JSX.Element;
}
// const HIDDEN_FOR_LOGIN = ["/","/product","/payment","new"];
const HIDDEN_ALL = ["/login", "/SignUp"];
// const SHOW_SIDE_BAR = ["/mypage"];

export default function Layout(props: ILayoutProps) {
  const router = useRouter();
  // const isHiddenForLogin = HIDDEN_FOR_LOGIN.includes(router.asPath);
  const isHiddenAll = HIDDEN_ALL.includes(router.asPath);
  // const isShownSideBar = SHOW_SIDE_BAR.includes(router.asPath);

  return (
    <>
      {/* {!isHiddenAll && <LayoutHeader />} */}
      {/* {!isHiddenAll && <LayoutNav />} */}
      {/* {!isHiddenAll && <LayoutSideBar />} */}
      <LayoutHeader />
      <LayoutMenu />
      <LayoutFooter />
      <div>
        <S.Body>
          <div>{props.children}</div>
        </S.Body>
      </div>
    </>
  );
}
