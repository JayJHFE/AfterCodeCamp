import * as S from "./Recommnet.styles";
export default function ReCommentComponent() {
  return (
    <S.ReComment>
      <S.CommentInput />
      <S.BtnBox>
        <S.CancelBtn>취소하기</S.CancelBtn>
        <S.SubmitBtn>작성하기</S.SubmitBtn>
      </S.BtnBox>
    </S.ReComment>
  );
}
