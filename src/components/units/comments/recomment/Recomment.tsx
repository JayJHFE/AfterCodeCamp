import { Modal } from "antd";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useRecoilState } from "recoil";
import { infoUserState } from "../../../../commons/stores";
import { useCreateUseditemQuestionAnswer } from "../../../commons/hooks/mutations/useCreateUseditemQuestionAnswer";
import { useUpdateUseditemQuestionAnswer } from "../../../commons/hooks/mutations/useUpdateUseditemQuestionAnswer";
import * as S from "./Recommnet.styles";
export default function ReCommentComponent(props: any) {
  const { createUseditemQuestionAnswerSubmit } =
    useCreateUseditemQuestionAnswer();
  const { updateUseditemQuestionAnswerSubmit } =
    useUpdateUseditemQuestionAnswer();
  const [infoUser] = useRecoilState(infoUserState);
  const { register, handleSubmit, reset } = useForm({
    mode: "onChange",
    defaultValues: {
      contents: "",
    },
  });
  const onClickQuestionAnswer = (data: any) => {
    if (props.isEditRecomment === true) {
      void updateUseditemQuestionAnswerSubmit(data, props.QuestionAnswerId);
      props.setIsEditRecomment((prev) => !prev);
      Modal.success({
        content: "답글이 수정되었습니다",
      });
    } else {
      void createUseditemQuestionAnswerSubmit(data, props.QuestionId);
      props.setRecommentOpen((prev) => !prev);
      Modal.success({
        content: "답글이 등록되었습니다",
      });
    }
  };
  const onClickCancelEdit = () => {
    props.setIsEditRecomment((prev) => !prev);
  };
  useEffect(() => {
    if (props.defaultValue) {
      const resetData = {
        contents: props.defaultValue,
      };
      reset({ ...resetData });
    }
  }, [props.defaultValue]);
  return (
    <S.ReComment>
      <form onSubmit={handleSubmit(onClickQuestionAnswer)}>
        <S.CommentInput
          defaultValue={props.defaultValue}
          {...register("contents")}
        />
        <S.BtnBox>
          <S.CancelBtn
            type="button"
            onClick={
              props.isEditRecomment
                ? onClickCancelEdit
                : props.onClickRecomment("")
            }
          >
            취소하기
          </S.CancelBtn>
          <S.SubmitBtn>
            {props.isEditRecomment === true ? "수정하기" : "작성하기"}
          </S.SubmitBtn>
        </S.BtnBox>
      </form>
    </S.ReComment>
  );
}
