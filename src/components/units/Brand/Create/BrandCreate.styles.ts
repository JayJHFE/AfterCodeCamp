import styled from "@emotion/styled";
import { Modal } from "antd";
// import DaumPostcodeEmbed from "react-daum-postcode";

export const Body = styled.div`
  width: 1738px;
  display: flex;
  flex-direction: column;
  margin-top: 104px;
  margin-left: 91px;
  //   background-color: red;
`;
export const Title = styled.div`
  width: 1738px;
  font-weight: "NotoSansKR-700";
  font-size: 40px;
  color: #000000;
  padding-left: 37px;
  padding-bottom: 31px;
  border-bottom: 3px solid #555555;
`;
export const BodyWrapper = styled.div`
  width: 1738px;
  display: flex;
  flex-direction: column;
  //   background-color: red;
`;
export const Box = styled.div`
  width: 1738px;
  display: flex;
  flex-direction: row;
  padding-top: 28px;
  padding-left: 43px;
  padding-bottom: 26px;
  border-bottom: 1px solid #999999;
`;
export const BrandName = styled.span`
  font-family: "NotoSansKR-500";
  font-size: 24px;
  color: #000000;
  padding-top: 15px;
  margin-right: 176px;
`;
export const BrandNameInput = styled.input`
  width: 1419px;
  height: 56px;
  background: #e9e9e9;
  border: none;
  padding-left: 19px;
`;
export const BrandRemarks = styled.span`
  font-family: "NotoSansKR-500";
  font-size: 24px;
  color: #000000;
  padding-top: 15px;
  margin-right: 148px;
`;
export const BrandRemarksInput = styled.input`
  width: 1419px;
  height: 56px;
  background: #e9e9e9;
  border: none;
  padding-left: 19px;
`;
export const BrandContents = styled.span`
  font-family: "NotoSansKR-500";
  font-size: 24px;
  display: flex;
  color: #000000;
  padding-top: 15px;
  margin-right: 148px;
`;
export const BrandPrice = styled.span`
  font-family: "NotoSansKR-500";
  font-size: 24px;
  display: flex;
  color: #000000;
  padding-top: 15px;
  margin-right: 148px;
`;
export const BrandPriceInput = styled.input`
  width: 1419px;
  height: 56px;
  background: #e9e9e9;
  border: none;
  padding-left: 19px;
`;
export const BrandTags = styled.span`
  font-family: "NotoSansKR-500";
  font-size: 24px;
  display: flex;
  color: #000000;
  padding-top: 15px;
  margin-right: 148px;
`;
export const BrandTagsInput = styled.input`
  width: 1419px;
  height: 56px;
  background: #e9e9e9;
  border: none;
  padding-left: 19px;
`;
export const AttachImage = styled.span`
  font-family: "NotoSansKR-500";
  font-size: 24px;
  display: flex;
  color: #000000;
`;
export const ImageBox = styled.div`
  width: 600px;
  height: 78px;
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 100%;
  display: flex;
  align-items: center;
  letter-spacing: -0.05em;
  color: #000000;
  // background: red;
`;
export const Cancel = styled.span`
  width: 120px;
  height: 20px;
  // font-family: 'Noto Sans KR';
  // font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 100%;
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: -0.05em;
  color: #000000;
`;
export const BtnBox = styled.div`
  padding-left: 700px;
  margin-top: 73px;
  margin-bottom: 113px;
`;
export const CancelBtn = styled.button`
  width: 195px;
  height: 77px;
  font-family: "NotoSansKR-700";
  font-size: 24px;
  background: #ffffff;
  border: 1px solid #000000;
  margin-right: 16px;
`;
export const SubmitBtn = styled.button`
  width: 195px;
  height: 77px;
  font-family: "NotoSansKR-700";
  font-size: 24px;
  background: #000000;
  color: #ffffff;
  border: none;
`;
// =====================주소 부분=====================
export const ZipModal = styled(Modal)``;
// export const SearchZipCodeInput = styled(DaumPostcodeEmbed)``;
export const LoctaionBox = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 28px;
  padding-bottom: 26px;
  padding-left: 43px;
  border-bottom: 1px solid #999999;
`;
export const LocationInnerBox = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: 28px;
  padding-bottom: 26px;
  //   border-bottom: 1px solid #999999;
`;
export const Location = styled.span`
  font-family: "NotoSansKR-500";
  font-size: 24px;
  display: flex;
  color: #000000;
`;
export const InnerBox = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 15px;
  padding-left: 26px;
  //   background-color: red;
`;
export const ZipCodeBox = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 27px;
`;
export const InfoBoxZipCode = styled.input`
  width: 77px;
  height: 52px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  padding-left: 15px;
`;
export const ZipButton = styled.button`
  width: 124px;
  height: 52px;
  background-color: black;
  color: white;
  font-sie: 16px;
  font-weight: 500;
  margin-left: 20px;
`;
export const AddressInput1 = styled.input`
  width: 1250px;
  height: 56px;
  background: #e9e9e9;
  padding-left: 20px;
  border: none;
  margin-bottom: 24px;
  // background: red;
`;
export const AddressInput2 = styled.input`
  width: 1250px;
  height: 56px;
  padding-left: 20px;
  background: #e9e9e9;
  // background: blue;
  border: none;
`;
