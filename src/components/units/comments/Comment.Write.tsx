import * as S from "./Commetn.Write.styles";

export default function CommnetComponent() {
  return (
    <S.ProductInfoWriteWrap>
      <S.TextareaWrap
      //   onSubmit={handleSubmit(onSubmitComment)}
      >
        <textarea
        //   {...register("contents")}
        //   defaultValue={props.defaultValue}
        ></textarea>
        <S.CommentBtnBox>
          {/* {props.isEdit && ( */}
          <S.CancleBtn
          // onClick={props.onClickUpdateComment("")}
          >
            취소하기
          </S.CancleBtn>
          {/* )} */}
          <S.CommentBtn>
            {/* {props.isEdit ? "수정하기" : "작성하기"} */}
          </S.CommentBtn>
        </S.CommentBtnBox>
      </S.TextareaWrap>
    </S.ProductInfoWriteWrap>
  );
}
