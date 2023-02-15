import { useMutation } from "@apollo/client";
import { ChangeEvent, useRef } from "react";
import { checkValidationImage } from "./Uploads02.validation";
import Uploads02UI from "./Uploads02.presenter";
import { UPLOAD_FILE } from "./Uploads02.queries";
import { Modal } from "antd";

export default function Uploads02(props) {
  const fileRef = useRef<HTMLInputElement>(null);
  const [uploadFile] = useMutation(UPLOAD_FILE);

  const onClickUpload = () => {
    fileRef.current?.click();
  };

  const onChangeFile = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = checkValidationImage(event.target.files?.[0]);
    if (!file) return;

    try {
      const result = await uploadFile({ variables: { file } });
      props.onChangeFileUrls(result.data.uploadFile.url, props.index);
      console.log(result.data.uploadFile);
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };

  return (
    <Uploads02UI
      fileRef={fileRef}
      fileUrl={props.fileUrl}
      onClickUpload={onClickUpload}
      onChangeFile={onChangeFile}
    />
  );
}
