import styled from "@emotion/styled";
import InfiniteScroll from "react-infinite-scroller";

export const MainWrapper = styled.div`
  width: 1920px;
  background-color: #e5e5e5;
  padding-top: 34px;
`;
export const UpperWrapper = styled.div`
  width: 1820px;
  height: 780px;
  margin-left: 50px;
  background-color: #ffffff;
`;
export const Best = styled.div`
  font-family: "NotoSansKR-500";
  font-size: 22px;
  text-align: center;
  padding-top: 39px;
  padding-bottom: 86px;
`;
export const CardWrapper = styled.div`
  width: 1820px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0px 40px;
`;
export const LowerWrapper = styled.div`
  width: 1738px;
  //   height: 1500px;
  margin-left: 82.5px;
  margin-top: 40px;
  padding-bottom: 120px;
`;
export const BodyBar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-left: 10px;
  padding-bottom: 17.5px;
  border-bottom: 1px solid #555555;
`;
export const SubmitBtn = styled.div`
  width: 195px;
  height: 77px;
  background-color: #ffffff;
  font-family: "NotoSansKR-500";
  font-size: 20px;
  border: 1px solid #000000;
  margin-left: 14px;
  text-align: center;
  padding-top: 23px;
  :hover {
    cursor: pointer;
  }
`;
export const SearchBar = styled.div`
  width: 534px;
  height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding-top: 20px;
  padding-right: 10px;
  margin-right: 23px;
  border-bottom: 3px solid #000000;
  transform: tranSlateY(15px);
`;
export const SearchIcon = styled.img`
  height: 17px;
`;
export const LowerCardWrapper = styled.div`
  width: 1738px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 55px;
  margin-bottom: 30px;
`;
export const InifiCardWrapper = styled.div`
  width: 1738px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
`;
export const InfiniteProduct = styled(InfiniteScroll)``;
