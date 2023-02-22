import InfiniteScroll from "react-infinite-scroller";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { infoUserState } from "../../../../commons/stores";
import { useDeleteUseditemQuestionAnswer } from "../../../commons/hooks/mutations/useDeleteUseditemQuestionAnswer";
import { useFetchUseditemQuestionAnswers } from "../../../commons/hooks/queries/useFetchUseditemQuestionAnswers";
import * as S from "../../comments/detail/Comment.detail.styles";
import ReCommentComponent from "../recomment/Recomment";

export default function RecommnetDetail(props: any) {
  const { data, fetchMore } = useFetchUseditemQuestionAnswers(props.QuestionId);
  const { onDeleteItemQuestionAnswer } = useDeleteUseditemQuestionAnswer();
  const [isEditRecomment, setIsEditRecomment] = useState(false);
  const [infoUser] = useRecoilState(infoUserState);
  const onClickEditRecomment = () => {
    setIsEditRecomment((prev) => !prev);
  };

  const onLoadMore = () => {
    if (data === undefined) return;

    void fetchMore({
      variables: {
        page: Number(
          Math.ceil(data.fetchUseditemQuestionAnswers.length / 10) + 1
        ),
      },
      updateQuery(prev, { fetchMoreResult }) {
        if (fetchMoreResult.fetchUseditemQuestionAnswers === undefined) {
          return {
            fetchUseditemQuestionAnswers: [
              ...prev.fetchUseditemQuestionAnswers,
            ],
          };
        }
        return {
          fetchUseditemQuestionAnswers: [
            ...prev.fetchUseditemQuestionAnswers,
            ...fetchMoreResult.fetchUseditemQuestionAnswers,
          ],
        };
      },
    });
  };
  return (
    <S.RecommentContainer>
      <InfiniteScroll
        pageStart={0}
        loadMore={onLoadMore}
        hasMore={true}
        useWindow={false}
      >
        <>
          {data?.fetchUseditemQuestionAnswers ? (
            data.fetchUseditemQuestionAnswers.map((el, idx) => (
              <S.Recomment key={el._id}>
                {!isEditRecomment ? (
                  <>
                    <S.UpperRecomment>
                      <S.RecommentTitle>답변</S.RecommentTitle>
                      {infoUser._id ===
                        data?.fetchUseditemQuestionAnswers[idx].user._id && (
                        <>
                          <S.BtnWrapper>
                            <S.EditBtn
                              onClick={onClickEditRecomment}
                            ></S.EditBtn>
                            <S.DeleteBtn
                              onClick={onDeleteItemQuestionAnswer(
                                String(
                                  data.fetchUseditemQuestionAnswers[idx]._id
                                ),
                                String(props.QuestionId)
                              )}
                            ></S.DeleteBtn>
                          </S.BtnWrapper>
                        </>
                      )}
                    </S.UpperRecomment>
                    <S.RecommentDate>
                      {data.fetchUseditemQuestionAnswers[idx].createdAt.slice(
                        0,
                        10
                      )}
                    </S.RecommentDate>
                    <S.RecommentContent>
                      {data.fetchUseditemQuestionAnswers[idx].contents}
                    </S.RecommentContent>
                  </>
                ) : (
                  <>
                    <ReCommentComponent
                      defaultValue={
                        data.fetchUseditemQuestionAnswers[idx].contents
                      }
                      isEditRecomment={isEditRecomment}
                      setIsEditRecomment={setIsEditRecomment}
                      QuestionAnswerId={
                        data.fetchUseditemQuestionAnswers[idx]._id
                      }
                    />
                  </>
                )}
              </S.Recomment>
            ))
          ) : (
            <></>
          )}
        </>
      </InfiniteScroll>
    </S.RecommentContainer>
  );
}
