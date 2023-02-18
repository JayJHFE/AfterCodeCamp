import { gql, useMutation } from "@apollo/client";
import {
  IMutation,
  IMutationCreateUseditemQuestionArgs,
} from "../../../../commons/types/generated/types";

export const CREATE_USER_ITEM_QUESTION = gql`
  mutation createUseditemQuestion(
    $useditemId: ID!
    $createUseditemQuestionInput: CreateUseditemQuestionInput!
  ) {
    createUseditemQuestion(
      useditemId: $useditemId
      createUseditemQuestionInput: $createUseditemQuestionInput
    ) {
      _id
    }
  }
`;

export const useCreateUseditemQuestion = () => {
  const [createUseditemQuestion] = useMutation<
    Pick<IMutation, "createUseditemQuestion">,
    IMutationCreateUseditemQuestionArgs
  >(CREATE_USER_ITEM_QUESTION);

  const createUseditemQuestionSubmit = async (data, useditemId: string) => {
    try {
      await createUseditemQuestion({
        variables: {
          useditemId,
          createUseditemQuestionInput: {
            ...data,
          },
        },
        update(cache, { data }) {
          // cache를 수정하는 메소드
          cache.modify({
            fields: {
              fetchUseditemQuestions: (prev) => {
                return [data.createUseditemQuestion, ...prev];
              },
            },
          });
        },
      });
      // console.log(result);
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

  return {
    createUseditemQuestionSubmit,
  };
};
