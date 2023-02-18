import { useRouter } from "next/router";
import * as S from "./brandcard2.styles";

export default function BrandCard2(props: any) {
  const router = useRouter();
  const onClickMoveToDetail = (event: MouseEvent<HTMLDivElement>) => {
    void router.push(`/brand/${event.currentTarget.id}`);
    console.log(event.currentTarget.id);
    console.log(router.query.useditemID);
  };
  return (
    <>
      <S.CardWrapper id={props.data._id} onClick={onClickMoveToDetail}>
        <S.CardImage
          src={
            props.data?.images[0]
              ? `https://storage.googleapis.com/${props.data?.images[0]}`
              : "/Delete.png"
          }
        />
        {/* <S.CardTest></S.CardTest> */}
        <S.PickImage src="/images/Detail/Pick.png" />
        <S.CardBody>
          <S.CardTitle>
            <S.TagSale>7 %</S.TagSale>
            <S.Price>{props.data?.price}</S.Price>
          </S.CardTitle>
          <S.BrandName>{props.data?.name}</S.BrandName>
          <S.SubTitle>{props.data?.remarks}</S.SubTitle>
        </S.CardBody>
      </S.CardWrapper>
    </>
  );
}
