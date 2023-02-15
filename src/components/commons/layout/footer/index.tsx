import * as S from "../layout.styles";

export default function LayoutFooter() {
  return (
    <S.FooterWrapper>
      <S.LetterWrapper>
        <S.FooterLogo src="/images/footer/footer-logo.png" />
        <S.LetterBox>
          <S.Dingco>(주)딩코</S.Dingco>
          <S.CEO>대표:안우엽</S.CEO>
        </S.LetterBox>
        <S.FooterLetter>사업자등록번호 717-87-02373</S.FooterLetter>
        <S.FooterLetter>
          주소: 서울특별시 구로구 디지털로 300, 패스트파이브
        </S.FooterLetter>
        <S.FooterLetter>학원 등록 번호: 제 5845호</S.FooterLetter>
        <S.LetterBox>
          <S.PersonalInfo>개인정보 처리방침</S.PersonalInfo>
          <S.Service>서비스 이용 약관</S.Service>
        </S.LetterBox>
        <S.FooterLetter>Copyright © 2022. Dingco Corp., Ltd.</S.FooterLetter>
      </S.LetterWrapper>
    </S.FooterWrapper>
  );
}
