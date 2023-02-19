import dynamic from "next/dynamic";
import * as S from "./BrandCreate.styles";
import "react-quill/dist/quill.snow.css";
import KakaoMapPage from "../../../commons/map/01";
import { useRecoilState } from "recoil";
import { isEditState } from "../../../../commons/stores";
import { useEffect, useState } from "react";
import { useUploadFile } from "../../../commons/hooks/mutations/useUploadFile";
import { useCreateUsedItem } from "../../../commons/hooks/mutations/useCreateUsedItem";
import { useUpdateUsedItem } from "../../../commons/hooks/mutations/useUpdateUsedItem";
import { useForm } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";
import { IUseItemFormData, IWriteProps } from "./BrandCreate.types";
import Uploads01 from "../../../commons/upload/01/Upload01.index";

const ReactQuill = dynamic(async () => await import("react-quill"), {
  ssr: false,
});

export default function BrandCreateComponent(props: IWriteProps) {
  console.log(props.data);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isEdit, setIsEdit] = useRecoilState(isEditState);
  const [files, setFiles] = useState<File[]>([]);
  const { uploadFile } = useUploadFile();
  const { createSubmit } = useCreateUsedItem();
  const { updateSubmit } = useUpdateUsedItem();

  const { register, setValue, trigger, reset, handleSubmit } = useForm({
    // resolver: yupResolver(ProductItemSchema),
    mode: "onChange",
    defaultValues: {
      name: "",
      remarks: "",
      contents: "",
      price: 0,
      tags: [],
      images: ["", ""],
    },
  });

  useEffect(() => {
    if (props.data) {
      const resetData = {
        name: props.data?.fetchUseditem?.name,
        remarks: props.data?.fetchUseditem?.remarks,
        contents: props.data?.fetchUseditem?.contents,
        price: props.data?.fetchUseditem?.price,
        tags: [...props.data?.fetchUseditem.tags],
        images: [...props.data?.fetchUseditem.images],
      };
      reset({ ...resetData });
    }
  }, [props.data]);

  const onChangeContents = (value: string) => {
    setValue("contents", value === "<p><br></p>" ? "" : value);
  };

  const onChangeFileUrls = (fileUrl: File, index: number) => {
    const newFileUrls = [...files];
    newFileUrls[index] = fileUrl;
    setFiles(newFileUrls);
  };
  const onClickSubmit = async (data: IUseItemFormData) => {
    const results = await Promise.all(
      files.map(async (file) => await uploadFile({ variables: { file } }))
    );
    const resultUrls = results.map((el) =>
      el !== undefined ? el.data?.uploadFile.url : ""
    );
    setValue("images", resultUrls);
    if (!props.isEdit) {
      void createSubmit(data, resultUrls);
    } else {
      void updateSubmit(props.useditemId, data, resultUrls);
    }
  };
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

  return (
    <>
      <S.Body>
        <S.Title>{isEdit === false ? "상품등록" : "상품수정"}</S.Title>
        <form onSubmit={handleSubmit(onClickSubmit)}>
          <S.BodyWrapper>
            <S.Box>
              <S.BrandName>상품명</S.BrandName>
              <S.BrandNameInput
                placeholder="상품명을 작성해주세요"
                {...register("name")}
              />
            </S.Box>
            <S.Box>
              <S.BrandRemarks>상품 요약</S.BrandRemarks>
              <S.BrandRemarksInput
                placeholder="상품요약을 작성해주세요"
                {...register("remarks")}
              />
            </S.Box>
            <S.Box>
              <S.BrandContents>상품 내용</S.BrandContents>
              <ReactQuill
                defaultValue={props.data?.fetchUseditem.contents}
                onChange={onChangeContents}
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
                {...register("price")}
              />
            </S.Box>
            <S.Box>
              <S.BrandTags>태그 입력</S.BrandTags>
              <S.BrandTagsInput
                placeholder="#태그 #태그 #태그"
                {...register("tags")}
              />
            </S.Box>
            <S.LoctaionBox>
              <S.Location>브랜드 위치</S.Location>
              <S.LocationInnerBox>
                <KakaoMapPage />
                <S.InnerBox>
                  <S.ZipCodeBox>
                    <S.InfoBoxZipCode type="text" placeholder="07250" />
                    <S.ZipButton type="button">우편번호검색</S.ZipButton>
                  </S.ZipCodeBox>
                  <S.AddressInput1 type="text" readOnly />
                  <S.AddressInput2 type="text" />
                </S.InnerBox>
              </S.LocationInnerBox>
            </S.LoctaionBox>
            <S.ImagesBox>
              <S.AttachImage>사진 첨부</S.AttachImage>
              <Uploads01
                defaultUrls={props.data?.fetchUseditem?.images}
                onChangeFileUrls={onChangeFileUrls}
              />
            </S.ImagesBox>
          </S.BodyWrapper>
          <S.BtnBox>
            <S.CancelBtn type="button">취소</S.CancelBtn>
            <S.SubmitBtn>등록</S.SubmitBtn>
          </S.BtnBox>
        </form>
      </S.Body>
    </>
  );
}
