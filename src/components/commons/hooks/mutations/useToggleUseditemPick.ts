import { gql, useMutation, useQuery } from "@apollo/client";
import { Modal } from "antd";
import {
  IMutation,
  IMutationToggleUseditemPickArgs,
} from "../../../../commons/types/generated/types";
import { FETCH_USED_ITEM } from "../queries/useFetchUseditem";

const TOGGLE_USED_ITEM_PICK = gql`
  mutation toggleUseditemPick($useditemId: ID!) {
    toggleUseditemPick(useditemId: $useditemId)
  }
`;

export const useToggleUseditemPick = () => {
  const [toggleUseditemPick] = useMutation<
    Pick<IMutation, "toggleUseditemPick">,
    IMutationToggleUseditemPickArgs
  >(TOGGLE_USED_ITEM_PICK);

  const onClickTogglePick = (useditemId) => async (event) => {
    try {
      const result = await toggleUseditemPick({
        variables: {
          useditemId,
        },
        refetchQueries: [
          {
            query: FETCH_USED_ITEM,
            variables: {
              useditemId,
            },
          },
        ],
      });
      Modal.success({ content: "상품이 찜 되었습니다." });
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

  return {
    onClickTogglePick,
  };
};
