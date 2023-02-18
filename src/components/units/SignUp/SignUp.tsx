import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useCreateUser } from "../../commons/hooks/mutations/useCreateUser";
import { IFormSignUpData } from "./SignUp.types";
import * as S from "./signupstyles";

export default function SignUpPageComponent() {
  const { register, handleSubmit, formState } = useForm<IFormSignUpData>({
    // resolver: yupResolver(loginSchema),
  });
  const { CreateUserSubmit } = useCreateUser();
  const onSubmitForm = (data: IFormSignUpData) => {
    const { passwordCheck, ...value } = data;
    void CreateUserSubmit(value);
  };
  return (
    <>
      <S.Header>JOIN MEMBER</S.Header>
      <form onSubmit={handleSubmit(onSubmitForm)}>
        <S.Body>
          <S.SignUpWrapper>
            <S.SignUpBox>
              <S.Letter>아이디</S.Letter>
              <S.SignUpInput1
                type="text"
                placeholder="이메일 아이디를 @까지 정확하게 입력하세요"
                {...register("email")}
              />
            </S.SignUpBox>
            <S.SignUpBox>
              <S.Letter>비밀번호</S.Letter>
              <S.SignUpInput2
                type="password"
                placeholder="영문+숫자 조합 8~16자리를 입력해주세요."
                {...register("password")}
              />
            </S.SignUpBox>
            <S.SignUpBox>
              <S.Letter>비밀번호 확인</S.Letter>
              <S.SignUpInput3
                type="password"
                placeholder="영문+숫자 조합 8~16자리를 입력해주세요."
                {...register("passwordCheck")}
              />
            </S.SignUpBox>
            <S.SignUpBox>
              <S.Letter>이름</S.Letter>
              <S.SignUpInput4
                type="text"
                placeholder="ex) 홍길동"
                {...register("name")}
              />
            </S.SignUpBox>
          </S.SignUpWrapper>
        </S.Body>
        <S.BtnBox>
          <S.Cancel type="button">취소</S.Cancel>
          <S.Confirm>확인</S.Confirm>
        </S.BtnBox>
      </form>
    </>
  );
}
