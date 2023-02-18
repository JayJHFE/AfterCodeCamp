import * as S from "./Commetn.Write.styles";

export default function CommnetComponent() {
  return (
    <S.CommnetWriteWrap>
      <S.TextareaWrap
      //   onSubmit={handleSubmit(onSubmitComment)}
      >
        <textarea
          placeholder="내용을 입력해주세요"
          //   {...register("contents")}
          //   defaultValue={props.defaultValue}
        ></textarea>
        <S.CommentBtnBox>
          {/* {props.isEdit && ( */}
          <S.SubmitBtn
          // onClick={props.onClickUpdateComment("")}
          >
            작성하기
          </S.SubmitBtn>
          {/* )} */}
        </S.CommentBtnBox>
      </S.TextareaWrap>
    </S.CommnetWriteWrap>
  );
}
