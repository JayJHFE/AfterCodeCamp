import KakaoMapPage2 from "../../../commons/map/02";
import * as S from "./BrandDetail.styles";

export default function BrandDetailComponent() {
  return (
    <>
      <S.DetailHeader>
        <S.DetailImage
        //   src={
        //     props.data?.fetchUseditem.images[0]
        //       ? `https://storage.googleapis.com/${props.data?.fetchUseditem.images[0]}`
        //       : "/CodecampLogo.png"
        //   }
        />
        <S.DetailShort>
          <S.HeaderBox>
            <S.BrandName>브랜드이름</S.BrandName>
            <S.HeaderBtnBox>
              <S.EditButton src="/images/Detail/Edit.png" />
              <S.DeleteButton src="/images/Detail/Delete.png" />
            </S.HeaderBtnBox>
          </S.HeaderBox>
          <S.DetailTitle>
            ABCDEFGHIJKLNMOPQRSTUVWXYZ
            {/* {props.data?.fetchUseditem.name} */}
            <S.EditButton
            //   onClick={props.onClickMoveToEdit}
            //   src="/EditIcon.png"
            />
            <S.DeleteButton
            //   onClick={props.onClickDelete(props?.data?.fetchUseditem?._id)}
            //   src="/DeleteIcon.png"
            />
          </S.DetailTitle>
          <S.DetailPrice>
            <S.PriceBox>
              <S.SellingPrice>판매가</S.SellingPrice>
              <S.Price>153,000</S.Price>
              <S.Unit>원</S.Unit>
              {/* {props.data?.fetchUseditem.price} */}
            </S.PriceBox>
            <S.PickBox>
              MY
              <S.PickImage src="/images/Detail/Pick.png" />
              Product
            </S.PickBox>
          </S.DetailPrice>
          <S.DetailRemarks>
            <S.RemarksContents>
              {/* {props.data?.fetchUseditem?.remarks} */}
              헬로헬로헬로헬로헬로헬로헬로헬로헬로헬로헬로헬로헬로헬로헬로헬로헬로헬로헬로헬로헬로헬로헬로헬로헬로헬로헬로헬로헬로헬로헬로헬로헬로헬로
              헬로헬로헬로헬로헬로헬로헬로헬로헬로헬로헬로헬로헬로헬로헬로헬로헬로헬로헬로헬로헬로헬로헬로헬로헬로헬로헬로헬로헬로헬로헬로헬로헬로헬로
              헬로헬로헬로헬로헬로헬로헬로헬로헬로헬로헬로헬로헬로헬로헬로헬로헬로헬로헬로헬로헬로헬로헬로헬로헬로헬로헬로헬로헬로헬로헬로헬로헬로헬로
            </S.RemarksContents>
            <S.RemarksTags>
              #태그 #태그 #태그
              {/* {props.data?.fetchUseditem?.tags} */}
            </S.RemarksTags>
          </S.DetailRemarks>
          <S.DetailMenu>
            <S.Purchase>
              <S.PurchaseName>BUY NOW</S.PurchaseName>
            </S.Purchase>
            <S.Basket>
              <S.BasketName>SHOPPING BAG</S.BasketName>
            </S.Basket>
          </S.DetailMenu>
        </S.DetailShort>
        {/* {props.data?.fetchUseditem.images[1] && (
          <S.DetailImage2
            src={`https://storage.googleapis.com/${props.data?.fetchUseditem.images[1]}`}
          />
        )}
        {props.data?.fetchUseditem.images[2] && (
          <S.DetailImage3
            src={`https://storage.googleapis.com/${props.data?.fetchUseditem.images[2]}`}
          />
        )} */}
      </S.DetailHeader>
      <S.DetailLetter>DETAIL</S.DetailLetter>
      <S.DetailMap>
        <S.Title>배송/교환/반품/AS 관련 유의사항</S.Title>
        <S.SubTitle>
          상품상세설명에 배송/교환/반품/취소 관련 안내가 기재된 경우 다음
          안내사항보다 우선 적용됩니다.
        </S.SubTitle>
        <KakaoMapPage2 />
      </S.DetailMap>
      <S.AlertBox>
        <S.DetailAlert>
          상품별로 상품 특성 및 배송지에 따라 배송유형 및 소요기간이 달라집니다.
        </S.DetailAlert>
        <S.DetailAlert>
          상품의 배송비는 공급업체의 정책에 따라 다르오며 공휴일 및 휴일은
          배송이 불가합니다.
        </S.DetailAlert>
        <S.DetailAlertBold>
          상품하자 이외 사이즈, 색상교환 등 단순 변심에 의한 교환/반품 택배비
          고객부담으로 왕복택배비가 발생합니다. (전자상거래 등에서의
          소비자보호에 관한 법률 제18조(청약 철회 등) 9항에 의거 소비자의 사정에
          의한 청약 철회 시 택배비는 소비자 부담입니다.)
        </S.DetailAlertBold>
        <S.DetailAlert>
          주문완료 후 재고 부족 등으로 인해 주문 취소 처리가 될 수도 있는 점
          양해 부탁드립니다.
        </S.DetailAlert>
        <S.DetailAlert>
          반품/교환은 미사용 제품에 한해 배송완료 후 7일 이내에 접수하여
          주십시오.
        </S.DetailAlert>
        <S.DetailAlert>
          제품을 사용 또는 훼손한 경우, 사은품 누락, 상품 TAG 보증서, 상품
          부자재가 제거 혹은 분실된 경우, 밀봉포장을 개봉했거나 내부 포장재를
          훼손 또는 분실한 경우(단, 제품확인을 위한 개봉 제외) 반품/교환이
          불가합니다.
        </S.DetailAlert>
        <S.DetailAlert>
          A/S 기준이나 가능여부는 브랜드와 상품에 따라 다르므로 관련 문의는
          에이블리 고객센터를 통해 부탁드립니다.
        </S.DetailAlert>
        <S.DetailAlert>
          상품불량에 의한 반품,교환, A/S, 환불, 품질보증 및 피해보상 등에 관한
          사항은 소비자분쟁해결기준(공정거래위원회 고시)에 따라 받으실 수
          있습니다.
        </S.DetailAlert>
      </S.AlertBox>
      <S.DetailLetter>Q&A</S.DetailLetter>
    </>
  );
}
