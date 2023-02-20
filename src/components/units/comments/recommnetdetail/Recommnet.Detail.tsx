import { Modal } from "antd";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { infoUserState } from "../../../../commons/stores";
import { useDeleteUseditemQuestionAnswer } from "../../../commons/hooks/mutations/useDeleteUseditemQuestionAnswer";
import { useFetchUseditemQuestionAnswers } from "../../../commons/hooks/queries/useFetchUseditemQuestionAnswers";
import * as S from "../../comments/detail/Comment.detail.styles";
import ReCommentComponent from "../recomment/Recomment";

export default function RecommnetDetail(props: any) {
  const { data } = useFetchUseditemQuestionAnswers(props.QuestionId);
  const { onDeleteItemQuestionAnswer } = useDeleteUseditemQuestionAnswer();
  const [isEditRecomment, setIsEditRecomment] = useState(false);
  const [infoUser] = useRecoilState(infoUserState);
  const onClickEditRecomment = () => {
    setIsEditRecomment((prev) => !prev);
  };
  return (
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
                        <S.EditBtn onClick={onClickEditRecomment}></S.EditBtn>
                        <S.DeleteBtn
                          onClick={onDeleteItemQuestionAnswer(
                            String(data.fetchUseditemQuestionAnswers[idx]._id)
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
                  defaultValue={data.fetchUseditemQuestionAnswers[idx].contents}
                  isEditRecomment={isEditRecomment}
                  setIsEditRecomment={setIsEditRecomment}
                  QuestionAnswerId={data.fetchUseditemQuestionAnswers[idx]._id}
                />
              </>
            )}
          </S.Recomment>
        ))
      ) : (
        <></>
      )}
    </>
  );
}
