import { Modal } from "antd";
import { useForm } from "react-hook-form";
import { useCreateUseditemQuestionAnswer } from "../../../commons/hooks/mutations/useCreateUseditemQuestionAnswer";
import * as S from "./Recommnet.styles";
export default function ReCommentComponent(props: any) {
  const { createUseditemQuestionAnswerSubmit } =
    useCreateUseditemQuestionAnswer();
  const { register, handleSubmit } = useForm({
    mode: "onChange",
    defaultValues: {
      contents: "",
    },
  });
  const onClickCreateQuestionAnswer = (data: any) => {
    console.log(data);
    try {
      void createUseditemQuestionAnswerSubmit(data, props.QuestionId);
      // props.setIsReply(false);
      Modal.success({
        content: "답글이 등록되었습니다",
      });
    } catch (error) {
      Modal.error({
        content: "답글 등록에 실패했습니다.",
      });
    }
  };
  return (
    <S.ReComment>
      <form onSubmit={handleSubmit(onClickCreateQuestionAnswer)}>
        <S.CommentInput {...register("contents")} />
        <S.BtnBox>
          <S.CancelBtn type="button" onClick={props.onClickRecomment}>
            취소하기
          </S.CancelBtn>
          <S.SubmitBtn>작성하기</S.SubmitBtn>
        </S.BtnBox>
      </form>
    </S.ReComment>
  );
}
