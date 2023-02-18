import BrandCard2 from "../../../commons/brandcard2/brandcard2.index";
import { useFetchUseditems } from "../../../commons/hooks/queries/useFetchUseditems";
import Link from "next/link";
import * as S from "./Brandmain.styles";

export default function BrandMain() {
  const { data, fetchMore } = useFetchUseditems();
  const onLoadMore = () => {
    if (data === undefined) return;

    void fetchMore({
      variables: {
        page: Number(Math.ceil(data.fetchUseditems.length / 10) + 1),
      },
      updateQuery(prev, { fetchMoreResult }) {
        if (fetchMoreResult.fetchUseditems === undefined) {
          return {
            fetchUseditems: [...prev.fetchUseditems],
          };
        }
        return {
          fetchUseditems: [
            ...prev.fetchUseditems,
            ...fetchMoreResult.fetchUseditems,
          ],
        };
      },
    });
  };
  return (
    <>
      <S.MainWrapper>
        <S.UpperWrapper>
          <S.Best>BEST</S.Best>
          <S.CardWrapper>
            {data?.fetchUseditems.slice(0, 4).map((el) => (
              <BrandCard2 key={el._id} data={el} />
            ))}
          </S.CardWrapper>
        </S.UpperWrapper>
        <S.LowerWrapper>
          <S.BodyBar>
            <Link href={`/brand/create`}>
              <S.SubmitBtn>상품등록</S.SubmitBtn>
            </Link>
            <S.SearchBar>
              <S.SearchIcon src="/images/Detail/Frame.png" />
            </S.SearchBar>
          </S.BodyBar>
          <S.LowerCardWrapper>
            <S.InfiniteProduct
              pageStart={0}
              loadMore={onLoadMore}
              hasMore={true}
              useWindow={true}
              loader={<div className="loader" key={0}></div>}
            >
              <S.InifiCardWrapper>
                {data?.fetchUseditems.map((el) => (
                  <BrandCard2 key={el._id} data={el} />
                ))}
              </S.InifiCardWrapper>
            </S.InfiniteProduct>
          </S.LowerCardWrapper>
        </S.LowerWrapper>
      </S.MainWrapper>
    </>
  );
}
