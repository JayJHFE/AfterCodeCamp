import BrandCard from "../src/components/commons/brandcard/brandcard.index";
import { useFetchUseditems } from "../src/components/commons/hooks/queries/useFetchUseditems";
import * as S from "../src/components/commons/main/main.styles";

export default function Home() {
  const { data } = useFetchUseditems();
  return (
    <>
      <S.CarouselWrapper></S.CarouselWrapper>
      <S.BodyWrapper>
        <S.NewArrival>New Arrival</S.NewArrival>
        <S.UpperBody>
          {data?.fetchUseditems.slice(0, 8).map((el) => (
            <BrandCard key={el._id} data={el} />
          ))}
        </S.UpperBody>
      </S.BodyWrapper>
    </>
  );
}
