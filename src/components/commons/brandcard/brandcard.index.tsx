import { useRouter } from "next/router";
import * as S from "./brandcard.styles";

export default function BrandCard(props: any) {
  const router = useRouter();
  const onClickMoveToDetail = (event: MouseEvent<HTMLDivElement>) => {
    void router.push(`/brand/${event.currentTarget.id}`);
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
        <S.PickImage src="/images/Detail/Pick.png" />
        <S.CardBody>
          <S.CardTitle>
            {props.data.tags && (
              <S.TagSale>
                {props.data?.tags[0] !== undefined ? (
                  "#" +
                  props.data?.tags[0]
                    ?.split("#")
                    .filter((text: string) => text !== "")[0]
                ) : (
                  <></>
                )}
              </S.TagSale>
            )}
            {props.data.tags === "" ||
              (props.data.tags === undefined && (
                <S.TagSale>대표태그</S.TagSale>
              ))}
            <S.Price>
              {props.data?.price
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            </S.Price>
          </S.CardTitle>
          <S.BrandName>{props.data?.name}</S.BrandName>
          <S.SubTitle>{props.data?.remarks}</S.SubTitle>
        </S.CardBody>
      </S.CardWrapper>
    </>
  );
}
