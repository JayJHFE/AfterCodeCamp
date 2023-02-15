import { useMutation } from "@apollo/client";
import { yupResolver } from "@hookform/resolvers/yup";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Address } from "react-daum-postcode";
import { useForm } from "react-hook-form";
import { useRecoilState } from "recoil";
import { isEditState } from "../../../../commons/stores";
import { IMutation, IMutationCreateUseditemArgs, IMutationUpdateUseditemArgs } from "../../../../commons/types/generated/types";
import ProductWriteUI from "./productwrite.presenter";
import { CREATE_USED_ITEM, UPDATE_USED_ITEM } from "./productwrite.queries";

export default function ProductWrite(props) {
    const [address, setAddress] = useState("");
    const [zipcode, setZipcode] = useState("");
    const [AddressModalOpen, setAddressModalOpen] = useState(false);
    const [fileUrls, setFileUrls] = useState(["", "", ""]);
    const router = useRouter();
    const [isEdit, setIsEdit] = useRecoilState(isEditState);

    const [createUseditem] = useMutation<
      Pick<IMutation, "createUseditem">,
      IMutationCreateUseditemArgs
    >(CREATE_USED_ITEM);

    const [updateUseditem] = useMutation<
      Pick<IMutation, "updateUseditem">,
      IMutationUpdateUseditemArgs
    >(UPDATE_USED_ITEM);

    const onToggleAddressModal = () => {
        setAddressModalOpen((prev) => !prev);
      };

    const onClickSearchZipCode = () => {
        onToggleAddressModal();
      };
    
    const handleComplete = (address: Address) => {
        onToggleAddressModal();
        setAddress(address.address);
        setZipcode(address.zonecode);
      };
    const { register, handleSubmit, formState, setValue, trigger } =
      useForm<IFormData>({
        // resolver: yupResolver(schema),
        mode: "onChange",
        defaultValues: {
          name: props.data?.fetchUseditem.name
            ? props.data?.fetchUseditem.name
            : "",
          remarks: props.data?.fetchUseditem.remarks
            ? props.data?.fetchUseditem.remarks
            : "",
          contents: props.data?.fetchUseditem.contents
            ? props.data?.fetchUseditem.contents
            : "",
          price: props.data?.fetchUseditem.price
            ? props.data?.fetchUseditem.price
            : "",
          tags: props.data?.fetchUseditem.tags
            ? props.data?.fetchUseditem.tags
            : "",
          addressDetail: props.data?.fetchUseditem.useditemAddress?.addressDetail
            ? props.data?.fetchUseditem.useditemAddress?.addressDetail
            : "",
          images: ["", "", ""],
        },
      });


    const onChangeContents = (value: string) => {
        setValue("contents", value === "<p><br></p>" ? "" : value);
        void trigger("contents");
    };
    
    const onChangeFileUrls = (fileUrl: string, index: number) => {
      const newimageUrls = [...fileUrls];
      newimageUrls[index] = fileUrl;
      setFileUrls(newimageUrls);
    };

    setValue("address", address);
    setValue("images", fileUrls);
    setValue("zipcode", zipcode);
      
    const onClickSubmit = async (data) => {
      try {
        const result = await createUseditem({
          variables: {
            createUseditemInput: {
                name: data.name,
                remarks: data.remarks,
                contents: String(data.contents),
                price: parseInt(data.price),
                tags: data.tags,
                useditemAddress: {
                  zipcode: data.zipcode,
                  address: data.address,
                  addressDetail: data.addressDetail,
                },
                images: data.images,
              },
            },
          });
          setIsEdit(false);
          void router.push(`/product/${result.data?.createUseditem._id}`);
        } catch (error) {
          alert(error);
        }
      };
    
      const onClickEdit = async (data) => {
        try {
          if (typeof router.query.productId !== "string") return;
          const result = await updateUseditem({
            variables: {
              useditemId: router.query.productId,
              updateUseditemInput: {
                name: data.name,
                remarks: data.remarks,
                contents: data.contents,
                price: data.price,
                tags: data.tags,
                useditemAddress: {
                  zipcode: data.zipcode,
                  address: data.address,
                  addressDetail: data.addressDetail,
                },
                images: data.images,
              },
            },
          });
          if (typeof result.data?.updateUseditem._id !== "string") {
            return;
          }
          setIsEdit(false);
          void router.push(`/product/${result.data?.updateUseditem._id}`);
          // console.log(result);
        } catch (error) {
          if (error instanceof Error) Modal.error({ content: error.message });
        }
      };
    
      useEffect(() => {
        if (props.data?.fetchUseditem?.images?.length) {
          setFileUrls([...props.data?.fetchUseditem?.images]);
        }
      }, [props.data]);  

      const onClickMoveToCancel = () => {
        setIsEdit(false);
        void router.push("/");
      };
    return(
    <>
        <ProductWriteUI 
          handleComplete = {handleComplete}
          onClickSearchZipCode = {onClickSearchZipCode}
          AddressModalOpen = {AddressModalOpen}
          address = {address}
          zipcode = {zipcode}
          onToggleAddressModal ={onToggleAddressModal}
          register={register}
          handleSubmit={handleSubmit}
          formState={formState}
          onClickSubmit={onClickSubmit}
          onChangeContents={onChangeContents}
          onClickEdit={onClickEdit}
          data={props.data}
          onChangeFileUrls={onChangeFileUrls}
          fileUrls={fileUrls}
          onClickMoveToCancel={onClickMoveToCancel}
        />  
    </>
    )
}