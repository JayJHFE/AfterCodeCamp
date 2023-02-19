import { Modal } from "antd";
import { Content } from "antd/es/layout/layout";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../../commons/stores";

export const useLogoutUser = () => {
  const router = useRouter();
  const [, setAccessToken] = useRecoilState(accessTokenState);

  const logoutUser = async () => {
    localStorage.removeItem("accessToken");
    setAccessToken("");
    Modal.success({ content: "로그아웃 되었습니다." });
    location.reload();
  };

  return {
    logoutUser,
  };
};
