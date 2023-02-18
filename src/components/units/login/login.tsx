import * as S from "./loginstyles";
import { useForm } from "react-hook-form";
import { IFormLogin, IFormLoginData } from "./login.types";
import { Modal } from "antd";
import { LoginUser } from "../../commons/hooks/mutations/useLoginUser";
// import { yupResolver } from "@hookform/resolvers/yup";

export default function LoginPageComponent() {
  const { UserLogin } = LoginUser();
  const { register, handleSubmit } = useForm<IFormLogin>({
    // resolver: yupResolver(ProductSchema),
    mode: "onChange",
  });
  const onClickLogin = async (data: IFormLoginData) => {
    void UserLogin(data);
  };

  return (
    <>
      <S.Header>LOGIN</S.Header>
      <form onSubmit={handleSubmit(onClickLogin)}>
        <S.Body>
          <S.LoginInfo>
            <S.IdBox>
              <S.Letter>아이디</S.Letter>
              <S.IdInput
                type="text"
                placeholder="이메일 아이디를 @까지 정확하게 입력하세요"
                {...register("email")}
              />
            </S.IdBox>
            <S.PwBox>
              <S.Letter>비밀번호</S.Letter>
              <S.PwInput
                type="password"
                placeholder="영문+숫자 조합 8~16자리를 입력해주세요."
                {...register("password")}
              />
            </S.PwBox>
          </S.LoginInfo>
          <S.LoginButton>로그인</S.LoginButton>
        </S.Body>
      </form>
    </>
  );
}
