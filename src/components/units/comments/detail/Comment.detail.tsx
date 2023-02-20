import { useState } from "react";
import InfiniteScroll from "react-infinite-scroller";
import { useRecoilState } from "recoil";
import { infoUserState } from "../../../../commons/stores";
import { useDeleteUseditemQuestion } from "../../../commons/hooks/mutations/useDeleteUseditemQuestion";
import { useFetchUseditemQuestions } from "../../../commons/hooks/queries/useFetchUseditemQuestions";
import EditCommentComponent from "../edit/Comment.edit";
import ReCommentComponent from "../recomment/Recomment";
import RecommnetDetail from "../recommnetdetail/Recommnet.Detail";
import * as S from "./Comment.detail.styles";
import { ICommentDetailProps } from "./Comment.detail.types";

export default function CommentDetailComponent(props: ICommentDetailProps) {
  const { data, fetchMore } = useFetchUseditemQuestions(props?.useditemId);
  const [isUpdateId, setIsUpdateId] = useState("");
  const { onClickDeleteItemQuestion } = useDeleteUseditemQuestion();
  const [infoUser] = useRecoilState(infoUserState);
  const [recommentOpen, setRecommentOpen] = useState("");
  const onLoadMore = () => {
    if (data === undefined) return;

    void fetchMore({
      variables: {
        page: Number(Math.ceil(data.fetchUseditemQuestions.length / 10) + 1),
      },
      updateQuery(prev, { fetchMoreResult }) {
        if (fetchMoreResult.fetchUseditemQuestions === undefined) {
          return {
            fetchUseditemQuestions: [...prev.fetchUseditemQuestions],
          };
        }
        return {
          fetchUseditemQuestions: [
            ...prev.fetchUseditemQuestions,
            ...fetchMoreResult.fetchUseditemQuestions,
          ],
        };
      },
    });
  };
  const onClickUpdateComment = (updateId: string) => (event: any) => {
    setIsUpdateId(updateId);
  };
  const onClickRecomment = (data: any) => () => {
    console.log(data);
    setRecommentOpen(data);
    console.log(recommentOpen);
  };

  return (
    <>
      <S.CommentWrapper>
        <InfiniteScroll
          pageStart={0}
          loadMore={onLoadMore}
          hasMore={true}
          useWindow={false}
        >
          {data?.fetchUseditemQuestions ? (
            data?.fetchUseditemQuestions?.map((el, idx) => (
              <S.Comment key={el._id}>
                {isUpdateId !== el._id ? (
                  <>
                    <S.UpperComment>
                      <S.CommentWriter>{el.user.name}</S.CommentWriter>
                      <S.CommentContent>
                        <S.Content>{el.contents}</S.Content>
                        <S.RightContent>
                          <S.Date>{el.createdAt.slice(0, 10)}</S.Date>
                          {infoUser._id ===
                            data?.fetchUseditemQuestions[idx].user._id && (
                            <>
                              <S.Edit
                                type="button"
                                onClick={onClickUpdateComment(el._id)}
                              />
                              <S.Delete
                                type="button"
                                onClick={onClickDeleteItemQuestion(el._id)}
                              />
                            </>
                          )}
                          {infoUser._id !==
                            data?.fetchUseditemQuestions[idx].user._id && (
                            <>
                              <S.RecommentBtn
                                onClick={onClickRecomment(el._id)}
                              ></S.RecommentBtn>
                            </>
                          )}
                        </S.RightContent>
                      </S.CommentContent>
                    </S.UpperComment>
                    <S.LowerComment>
                      <RecommnetDetail QuestionId={el._id} />
                      {recommentOpen ===
                      data?.fetchUseditemQuestions[idx]._id ? (
                        <S.RecommentWrapper>
                          <ReCommentComponent
                            QuestionId={el._id}
                            onClickRecomment={onClickRecomment}
                            setRecommentOpen={setRecommentOpen}
                          />
                        </S.RecommentWrapper>
                      ) : (
                        <></>
                      )}
                    </S.LowerComment>
                  </>
                ) : (
                  <EditCommentComponent
                    defaultValue={el.contents}
                    useditemQuestionId={isUpdateId}
                    onClickUpdateComment={onClickUpdateComment}
                    setIsUpdateId={setIsUpdateId}
                  />
                )}
              </S.Comment>
            ))
          ) : (
            <></>
          )}
        </InfiniteScroll>
      </S.CommentWrapper>
    </>
  );
}
