import styled from "@emotion/styled";

export const CommentWrapper = styled.div`
  width: 1700px;
  height: 800px;
  margin-left: 134px;
  margin-top: 18px;
  overflow: auto;
`;
export const Comment = styled.div`
  width: 1651px;
  // height: 96px;
  font-family: "NotoSansKR-400";
  font-size: 15px;
  display: flex;
  flex-direction: column;
  padding-left: 9px;
  padding-top: 39px;
  padding-bottom: 20px;
  border-top: 1px solid #c0c0c0;
  border-bottom: 1px solid #c0c0c0;
`;
export const CommentWriter = styled.div`
  width: 103px;
  height: 27px;
  text-align: center;
  background-color: #000000;
  color: #ffffff;
  margin-right: 24px;
`;
export const CommentContent = styled.div`
  width: 1460px;
  height: 57px;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  // border-bottom: 1px dashed #c0c0c0;
`;
export const Content = styled.div``;
export const RightContent = styled.div`
  display: flex;
  flex-direction: row;
  margin-right: 15px;
`;
export const Date = styled.div``;
export const Edit = styled.button`
  width: 18px;
  height: 18px;
  margin-left: 32px;
  border: none;
  background-image: url("/images/Detail/Edit.png");
  background-size: cover;
  background-color: #ffffff;
`;
export const Delete = styled.button`
  width: 18px;
  height: 18px;
  margin-left: 16px;
  border: none;
  background-image: url("/images/Detail/Delete.png");
  background-size: cover;
  background-color: #ffffff;
`;
export const Recomment = styled.div`
  width: 1460px;
  margin-left: 134px;
  padding-top: 29px;
  padding-bottom: 39px;
  border-top: 1px dashed #c0c0c0;
`;
export const RecommentTitle = styled.div`
  font-family: "NotoSansKR-500";
  font-size: 15px;
  margin-bottom: 28px;
`;
export const RecommentDate = styled.div`
  font-family: "NotoSansKR-400";
  font-size: 15px;
  color: #999999;
  margin-bottom: 16px;
`;
export const RecommentContent = styled.div`
  font-family: "NotoSansKR-400";
  font-size: 15px;
`;
export const UpperComment = styled.div`
  display: flex;
`;
export const LowerComment = styled.div``;
export const RecommentBtn = styled.div`
  width: 18px;
  height: 18px;
  margin-left: 18px;
  background-image: url("/images/Detail/Answer.png");
  transform: tranSlateY(2px);
`;
