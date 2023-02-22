import { gql, useMutation } from "@apollo/client";
import { Modal } from "antd";
import {
  IMutation,
  IMutationDeleteUseditemQuestionAnswerArgs,
} from "../../../../commons/types/generated/types";
import { FETCH_USED_ITEM_QUESTION_ANSWERS } from "../queries/useFetchUseditemQuestionAnswers";

interface IRef {
  __ref: string;
}

const DELETE_USED_ITEM_ANSWER = gql`
  mutation deleteUseditemQuestionAnswer($useditemQuestionAnswerId: ID!) {
    deleteUseditemQuestionAnswer(
      useditemQuestionAnswerId: $useditemQuestionAnswerId
    )
  }
`;

export const useDeleteUseditemQuestionAnswer = () => {
  const [deleteUseditemQuestionAnswer] = useMutation<
    Pick<IMutation, "deleteUseditemQuestionAnswer">,
    IMutationDeleteUseditemQuestionAnswerArgs
  >(DELETE_USED_ITEM_ANSWER);

  const onDeleteItemQuestionAnswer =
    (useditemQuestionAnswerId: any, useditemQuestionId: any) =>
    async (event) => {
      try {
        await deleteUseditemQuestionAnswer({
          variables: {
            useditemQuestionAnswerId,
          },
          refetchQueries: [
            {
              query: FETCH_USED_ITEM_QUESTION_ANSWERS,
              variables: {
                useditemQuestionId,
                page: 1,
              },
            },
          ],
        });
        Modal.success({ content: "답변이 삭제되었습니다" });
      } catch (error) {
        if (error instanceof Error) alert(error.message);
      }
    };

  return {
    onDeleteItemQuestionAnswer,
  };
};
