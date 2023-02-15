import * as S from "./Uploads02.styles";
import { IUploads02UIProps } from "./Uploads02.tpyes";

export default function Uploads02UI(props: IUploads02UIProps) {
  console.log(props.fileUrl);
  return (
    <>
      {props.fileUrl ? (
        <S.UploadImage
          onClick={props.onClickUpload}
          src={`https://storage.googleapis.com/${props.fileUrl}`}
        />
      ) : (
        <S.UploadButton type="button" onClick={props.onClickUpload}>
          <S.Cross>+</S.Cross>
          <br />
          <S.Upload>Upload</S.Upload>
        </S.UploadButton>
      )}
      <S.UploadFileHidden
        type="file"
        ref={props.fileRef}
        onChange={props.onChangeFile}
      />
    </>
  );
}
