import EditCommentComponent from "../edit/Comment.edit";
import ReCommentComponent from "../recomment/Recomment";
import * as S from "./Comment.detail.styles";

export default function CommentDetailComponent() {
  return (
    <S.CommentWrapper>
      <S.Comment>
        <S.CommentWriter>노은정</S.CommentWriter>
        <S.CommentContent>
          <S.Content>아 이거 정말 귀찮다</S.Content>
          <S.RightContent>
            <S.Date>2023.03.01</S.Date>
            <S.Edit src="/images/Detail/Edit.png" />
            <S.Delete src="/images/Detail/Delete.png" />
          </S.RightContent>
        </S.CommentContent>
      </S.Comment>
      {/* 조건부로 보이고 안보이고 수정 할 예정 */}
      <S.Recomment>
        <S.RecommentTitle>답변</S.RecommentTitle>
        <S.RecommentDate>2023.03.01</S.RecommentDate>
        <S.RecommentContent>
          안녕하세요, 고객님! 저희 제품에 관심 가져주셔서 감사드립니다. 28일
          재입고 예정입니다. 궁금하신 사항은 언제든지 문의 부탁드립니다.
          감사합니다.
        </S.RecommentContent>
      </S.Recomment>
      {/* <EditCommentComponent /> 조건부로 수정 할 예정*/}
      <ReCommentComponent />
    </S.CommentWrapper>
  );
}
