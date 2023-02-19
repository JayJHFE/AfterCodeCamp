import { useForm } from "react-hook-form";
import { useUpdateUseditemQuestion } from "../../../commons/hooks/mutations/useUpdateUseditemQuestion";
import { ICommentProps } from "../write/Comment.Write.types";
import * as S from "./Comment.edit.styles";
export default function EditCommentComponent(props: any) {
  const { register, handleSubmit, setValue } = useForm();
  const { updateUseditemQuestionSubmit } = useUpdateUseditemQuestion();
  const onUpdateComment = (data: ICommentProps) => {
    void updateUseditemQuestionSubmit(data, props?.useditemQuestionId);
    props.setIsUpdateId();
    setValue("contents", "");
  };
  return (
    <S.EditComment>
      <form onSubmit={handleSubmit(onUpdateComment)}>
        <S.CommentInput
          {...register("contents")}
          defaultValue={props.defaultValue}
        />
        <S.BtnBox>
          <S.CancelBtn type="button" onClick={props.onClickUpdateComment("")}>
            취소하기
          </S.CancelBtn>
          <S.SubmitBtn>수정하기</S.SubmitBtn>
        </S.BtnBox>
      </form>
    </S.EditComment>
  );
}
