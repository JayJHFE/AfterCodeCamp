import styled from "@emotion/styled";

// ====================== Layout 전체 css ===============================
export const Body = styled.div`
  width: 1920px;
`;

// ====================== Layout Header ================================
export const HeaderWrapper = styled.div`
  width: 1920px;
  height: 100px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
export const HeaderLogo = styled.img`
  padding: 26px 0px 25px 76px;
`;
export const HeaderMenu = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 37px 0px;
`;
export const HeaderLogin = styled.span`
  font-family: "NotoSansKR-400";
  font-size: 14px;
  margin-right: 66px;
`;
export const HeaderSignUp = styled.div`
  font-family: "NotoSansKR-400";
  font-size: 14px;
  margin-right: 56px;
`;
export const HeaderBasket = styled.div`
  display: flex;
  flex-direction: row;
  margin-right: 60px;
  align-items: center;
`;
export const Letter = styled.span`
  font-family: "NotoSansKR-400";
  font-size: 14px;
  margin-right: 5px;
`;
export const BasketImage = styled.div`
  width: 20px;
  height: 20px;
  background-image: url("/images/header/Basket.png");
  background-size: contain;
  padding: 0px 0px 1px 6px;
  // color: #ffffff;
`;
export const Test = styled.span`
  font-family: "NotoSansKR-400";
  font-size: 14px;
  color: #ffffff;
`;
// ====================== Layout Menu ==================================
export const MenuWrapper = styled.div`
  width: 1920px;
  height: 100px;
  display: flex;
  flex-direction: row;
  background-color: #000000;
  padding: 39px 349px;
`;
export const Menu = styled.div`
  width: 1222px;
  height: 22px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
export const MenuLetter = styled.span`
  font-family: "Roboto-700";
  font-size: 22px;
  color: #ffffff;
`;
// ====================== Layout Footer ================================
export const FooterWrapper = styled.div`
  width: 1920px;
  background-color: #f1f1f1;
  padding-top: 53px;
  padding-bottom: 54px;
  padding-left: 107px;
  border-top: 1px solid #555555;
`;
export const LetterWrapper = styled.div`
  width: 400px;
`;
export const FooterLogo = styled.img`
  transform: translateX(-18px);
  margin-bottom: 14px;
`;
export const Dingco = styled.div`
  font-family: "NotoSansKR-400";
  font-size: 16px;
  margin-right: 88px;
`;
export const CEO = styled.div`
  font-family: "NotoSansKR-400";
  font-size: 16px;
`;
export const PersonalInfo = styled.div`
  font-family: "NotoSansKR-400";
  font-size: 16px;
  margin-right: 36px;
`;
export const Service = styled.div`
  font-family: "NotoSansKR-400";
  font-size: 16px;
`;
export const LetterBox = styled.div`
  display: flex;
  flex-dircetion: row;
  margin-bottom: 12px;
`;
export const FooterLetter = styled.div`
  font-family: "NotoSansKR-400";
  font-size: 16px;
  margin-bottom: 12px;
`;
// ======================= Layout BlackHeader ============================
export const BlackHeaderWrapper = styled.div`
  width: 1920px;
  height: 100px;
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: #000000;
`;
export const BlackHeaderLogo = styled.img`
  // padding: 26px 0px 25px 76px;
  // padding-left: 39px;
  width: 144px;
  height: 44px;
  margin-left: 42px;
  margin-right: 113px;
`;
export const BlackHeaderMenu = styled.div`
  width: 1100px;
  height: 22px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  // background-color: yellow;
`;
export const BlackHeaderMenuLetter = styled.span`
  font-family: "Roboto-700";
  font-size: 22px;
  color: #ffffff;
`;
export const BlackHeaderSignUp = styled.span`
  font-family: "Roboto-400";
  font-size: 14px;
  color: #ffffff;
  margin-left: 225px;
  // background-color: red;
`;
export const BlackHeaderBasket = styled.span`
  font-family: "Roboto-400";
  font-size: 14px;
  color: #ffffff;
  margin-left: 78px;
`;
export const BlackHeaderBasketImage = styled.div`
  width: 20px;
  height: 20px;
  background-image: url("/images/header/Basket-white.png");
  background-size: contain;
  padding: 0px 0px 1px 6px;
  margin-left: 5px;
  // color: #ffffff;
`;
export const BlackHeaderTest = styled.span`
  font-family: "Roboto-400";
  font-size: 14px;
  color: #f65656;
`;
