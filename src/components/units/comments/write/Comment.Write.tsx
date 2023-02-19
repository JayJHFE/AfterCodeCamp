import { useForm } from "react-hook-form";
import { useCreateUseditemQuestion } from "../../../commons/hooks/mutations/useCreateUseditemQuestion";
import { useUpdateUseditemQuestion } from "../../../commons/hooks/mutations/useUpdateUseditemQuestion";
import { ICommentProps, ICommentWriteProps } from "./Comment.Write.types";
import * as S from "./Commetn.Write.styles";

export default function CommnetComponent(props: ICommentWriteProps) {
  const { register, handleSubmit, setValue } = useForm();
  const { createUseditemQuestionSubmit } = useCreateUseditemQuestion();
  const onClickCommentSubmit = (data: ICommentProps) => {
    void createUseditemQuestionSubmit(data, props.useditemId);
    setValue("contents", "");
  };
  return (
    <S.CommnetWriteWrap>
      <S.TextareaWrap onSubmit={handleSubmit(onClickCommentSubmit)}>
        <textarea
          placeholder="내용을 입력해주세요"
          {...register("contents")}
          defaultValue={props.defaultValue}
        ></textarea>
        <S.CommentBtnBox>
          <S.SubmitBtn>작성하기</S.SubmitBtn>
        </S.CommentBtnBox>
      </S.TextareaWrap>
    </S.CommnetWriteWrap>
  );
}
