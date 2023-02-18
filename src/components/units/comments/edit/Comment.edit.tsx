import * as S from "./Comment.edit.styles";
export default function EditCommentComponent() {
  return (
    <S.EditComment>
      <S.CommentInput />
      <S.BtnBox>
        <S.CancelBtn>취소하기</S.CancelBtn>
        <S.SubmitBtn>작성하기</S.SubmitBtn>
      </S.BtnBox>
    </S.EditComment>
  );
}
