"use client";

import CustomHeader from "@/components/commons/header/CustomHeader";
import NicknameEditForm from "@/components/domains/profile/NicknameEditForm";

const fieldTitle = {
  email: "이메일",
  nickname: "닉네임",
  password: "비밀번호",
};

export default function EditFieldPage({
  params,
}: {
  params: { field: string };
}) {
  const { field } = params;

  return (
    <>
      <CustomHeader pageTitle={`${fieldTitle[field]} 변경`} />
      <div className="mt-16 p-5">
        {field === "email" ? (
          <div>이메일 변경</div>
        ) : field === "nickname" ? (
          <NicknameEditForm />
        ) : (
          <div>비밀번호 변경</div>
        )}
      </div>
    </>
  );
}