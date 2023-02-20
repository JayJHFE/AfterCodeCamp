import BrandCard from "../src/components/commons/brandcard/brandcard.index";
import { useFetchUseditems } from "../src/components/commons/hooks/queries/useFetchUseditems";
import * as S from "../src/components/commons/main/main.styles";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";

export default function Home() {
  const { data } = useFetchUseditems();
  const setting = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  return (
    <>
      <S.CarouselWrapper>
        <Slider {...setting}>
          <S.Box1>
            <img
              style={{ width: "1920px", height: "750px" }}
              src="/images/main/Chanel.jpeg"
            />
          </S.Box1>
          <S.Box2>
            <img
              style={{ width: "1920px", height: "750px" }}
              src="/images/main/LouisVuiton2.jpeg"
            />
          </S.Box2>
          <S.Box3>
            <img
              style={{ width: "1920px", height: "750px" }}
              src="/images/main/LouisVuiton.jpg"
            />
          </S.Box3>
        </Slider>
      </S.CarouselWrapper>
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
