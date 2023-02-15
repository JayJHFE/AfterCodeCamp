import dynamic from "next/dynamic";
import * as S from "./BrandCreate.styles";
import "react-quill/dist/quill.snow.css";
import KakaoMapPage from "../../../commons/map/01";
import { useRecoilState } from "recoil";
import { isEditState } from "../../../../commons/stores";
// import Uploads02 from "../../../commons/upload/02/Uploads02.container";
// import { v4 as uuidv4 } from "uuid";

const ReactQuill = dynamic(async () => await import("react-quill"), {
  ssr: false,
});

export default function BrandCreateComponent() {
  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      [{ font: [] }],
      [{ align: [] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [{ list: "ordered" }, { list: "bullet" }, "link"],
      [
        {
          color: [
            "#000000",
            "#e60000",
            "#ff9900",
            "#ffff00",
            "#008a00",
            "#0066cc",
            "#9933ff",
            "#ffffff",
            "#facccc",
            "#ffebcc",
            "#ffffcc",
            "#cce8cc",
            "#cce0f5",
            "#ebd6ff",
            "#bbbbbb",
            "#f06666",
            "#ffc266",
            "#ffff66",
            "#66b966",
            "#66a3e0",
            "#c285ff",
            "#888888",
            "#a10000",
            "#b26b00",
            "#b2b200",
            "#006100",
            "#0047b2",
            "#6b24b2",
            "#444444",
            "#5c0000",
            "#663d00",
            "#666600",
            "#003700",
            "#002966",
            "#3d1466",
            "custom-color",
          ],
        },
        { background: [] },
      ],
      ["image", "video"],
      ["clean"],
    ],
  };
  const [isEdit, setIsEdit] = useRecoilState(isEditState);

  return (
    <>
      {/* {props.AddressModalOpen && (
        <S.ZipModal
          open={true}
          onOk={props.handleComplete}
          onCancel={props.onToggleAddressModal}
        >
          <S.SearchZipCodeInput onComplete={props.handleComplete} />
        </S.ZipModal>
      )} */}
      <S.Body>
        <S.Title>{isEdit === false ? "상품등록" : "상품수정"}</S.Title>
        <form
        // onSubmit={props.handleSubmit(
        //   isEdit === false ? props.onClickSubmit : props.onClickEdit
        // )}
        >
          <S.BodyWrapper>
            <S.Box>
              <S.BrandName>상품명</S.BrandName>
              <S.BrandNameInput
                placeholder="상품명을 작성해주세요"
                // {...props.register("name")}
              />
            </S.Box>
            <S.Box>
              <S.BrandRemarks>상품 요약</S.BrandRemarks>
              <S.BrandRemarksInput
                placeholder="상품요약을 작성해주세요"
                // {...props.register("remarks")}
              />
            </S.Box>
            <S.Box>
              <S.BrandContents>상품 내용</S.BrandContents>
              <ReactQuill
                // defaultValue={props.data?.fetchUseditem.contents}
                // onChange={props.onChangeContents}
                style={{
                  width: "1419px",
                  height: "431px",
                  marginBottom: "42px",
                }}
                className="qqq"
                modules={modules}
                placeholder="상품을 설명해주세요"
              />
            </S.Box>
            <S.Box>
              <S.BrandPrice>판매 가격</S.BrandPrice>
              <S.BrandPriceInput
                placeholder="판매 가격을 입력해주세요"
                // {...props.register("price")}
              />
            </S.Box>
            <S.Box>
              <S.BrandTags>태그 입력</S.BrandTags>
              <S.BrandTagsInput
                placeholder="#태그 #태그 #태그"
                // {...props.register("tags")}
              />
            </S.Box>
            <S.LoctaionBox>
              <S.Location>브랜드 위치</S.Location>
              <S.LocationInnerBox>
                <KakaoMapPage />
                <S.InnerBox>
                  <S.ZipCodeBox>
                    <S.InfoBoxZipCode
                      type="text"
                      placeholder="07250"
                      // value={
                      //   props.zipcode ||
                      //   (props.data?.fetchUseditem.useditemAddress.zipcode ?? "")
                      // }
                    />
                    <S.ZipButton
                      type="button"
                      // onClick={props.onClickSearchZipCode}
                    >
                      우편번호검색
                    </S.ZipButton>
                  </S.ZipCodeBox>
                  <S.AddressInput1
                    type="text"
                    readOnly
                    // value={
                    //   props.address ||
                    //   (props.data?.fetchUseditem.useditemAddress.address ?? "")
                    // }
                  />
                  <S.AddressInput2
                    type="text"
                    // {...props.register("addressDetail")}
                  />
                </S.InnerBox>
              </S.LocationInnerBox>
            </S.LoctaionBox>
            <S.Box>
              <S.AttachImage>사진 첨부</S.AttachImage>
              <S.ImageBox>
                {/* {props.fileUrls.map((el, index) => (
                  <Uploads02
                    key={uuidv4()}
                    index={index}
                    fileUrl={el}
                    onChangeFileUrls={props.onChangeFileUrls}
                  />
                ))} */}
              </S.ImageBox>
            </S.Box>
          </S.BodyWrapper>
          <S.BtnBox>
            <S.CancelBtn
              type="button"
              // onClick={props.onClickMoveToCancel}
            >
              취소
            </S.CancelBtn>
            <S.SubmitBtn>등록</S.SubmitBtn>
          </S.BtnBox>
        </form>
      </S.Body>
    </>
  );
}
