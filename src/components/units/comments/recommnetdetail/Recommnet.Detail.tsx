import { useFetchUseditemQuestionAnswers } from "../../../commons/hooks/queries/useFetchUseditemQuestionAnswers";
import * as S from "../../comments/detail/Comment.detail.styles";

export default function RecommnetDetail(props: any) {
  const { data } = useFetchUseditemQuestionAnswers(props.QuestionId);
  console.log(data?.fetchUseditemQuestionAnswers);
  console.log(props.QuestionId);
  return (
    <>
      {data?.fetchUseditemQuestionAnswers[0].contents ? (
        data.fetchUseditemQuestionAnswers.map((el, idx) => (
          <S.Recomment>
            <S.RecommentTitle>답변</S.RecommentTitle>
            <S.RecommentDate>
              {data.fetchUseditemQuestionAnswers[idx].createdAt.slice(0, 10)}
            </S.RecommentDate>
            <S.RecommentContent>
              {data.fetchUseditemQuestionAnswers[idx].contents}
              {/* 안녕하세요, 고객님! 저희 제품에 관심 가져주셔서 감사드립니다. 28일
            재입고 예정입니다. 궁금하신 사항은 언제든지 문의 부탁드립니다.
            감사합니다. */}
            </S.RecommentContent>
          </S.Recomment>
        ))
      ) : (
        <></>
      )}
    </>
  );
}
