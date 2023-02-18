import { useQuery, gql } from "@apollo/client";
import { useRouter } from "next/router";
import {
  IQuery,
  IQueryFetchUseditemArgs,
} from "../../../../src/commons/types/generated/types";
import BrandCreateComponent from "../../../../src/components/units/Brand/Create/BrandCreate.index";

const FETCH_USED_ITEM = gql`
  query fetchUseditem($useditemId: ID!) {
    fetchUseditem(useditemId: $useditemId) {
      _id
      name
      remarks
      contents
      price
      tags
      images
      pickedCount
      createdAt
      useditemAddress {
        zipcode
        address
        lng
        lat
      }
      seller {
        _id
        name
        picture
        email
      }
      soldAt
    }
  }
`;
export default function EditPage() {
  const router = useRouter();
  const { data } = useQuery<
    Pick<IQuery, "fetchUseditem">,
    IQueryFetchUseditemArgs
  >(FETCH_USED_ITEM, {
    variables: {
      useditemId: String(router.query.brandId),
    },
  });

  return (
    <>
      <BrandCreateComponent
        isEdit={true}
        data={data}
        useditemId={String(router.query.brandId)}
      />
    </>
  );
}
