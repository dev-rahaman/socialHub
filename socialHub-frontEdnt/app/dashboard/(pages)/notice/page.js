"use client";
import { useContext } from "react";
import { Button, TextInput } from "../../DashboardComponents/SmallComponents";
import { AuthContext } from "@/app/Provider/AuthProvider";
import PostData from "../../Functions/PostData";

const Notice = () => {
  const { user } = useContext(AuthContext);

  const handleNotice = (e) => {
    e.preventDefault();
    const form = e.target;
    const principalName = form.principalName.value;
    const description = form.description.value;
    const schoolPlace = form.schoolPlace.value;
    const schoolSeal = form.schoolSeal.value;
    const noticeDate = form.noticeDate.value;
    const noticeNo = form.noticeNo.value;
    const schoolWebsite = form.schoolWebsite.value;
    const schoolEstablish = form.schoolEstablish.value;
    const tags = form.tags.value;

    const userEmail = user?.email;

    const newNotice = {
      userEmail,
      principalName,
      description,
      schoolPlace,
      schoolSeal,
      noticeDate,
      noticeNo,
      schoolWebsite,
      schoolEstablish,
      tags,
    };
    PostData({ endPoint: "notice", newData: newNotice });
  };

  return (
    <form onSubmit={handleNotice} className="flex flex-col gap-y-5">
      <TextInput
        type={"text"}
        htmlFor={"title"}
        id={"title"}
        labelTitle={"title"}
        name={"title"}
        placeholder={
          " Introduce the problem and expand on what you put in the title. Minimum 20 characters."
        }
      />

      {/* description */}
      <div className="bg-gray-200 p-5 rounded w-[900px]">
        <span className="block">{"Description"}</span>
        <textarea
          type={"text"}
          id={"description"}
          name={"description"}
          required
          className="w-full h-[300px]"
        />
      </div>

      <TextInput
        type={"text"}
        htmlFor={"principalName"}
        id={"principalName"}
        labelTitle={"principal Name"}
        name={"principalName"}
        placeholder={"Enter Principal's Name here."}
      />
      <TextInput
        type={"text"}
        htmlFor={"schoolPlace"}
        id={"schoolPlace"}
        labelTitle={"school Place"}
        name={"schoolPlace"}
        placeholder={"Enter school Place here."}
      />
      <TextInput
        type={"file"}
        htmlFor={"schoolSeal"}
        id={"schoolSeal"}
        labelTitle={"school Seal"}
        name={"schoolSeal"}
        placeholder={"Enter School Seal here."}
      />
      <TextInput
        type={"text"}
        htmlFor={"schoolEstablish"}
        id={"schoolEstablish"}
        labelTitle={"School Establish"}
        name={"schoolEstablish"}
        placeholder={"Enter School School Establish Date"}
      />
      <TextInput
        type={"text"}
        htmlFor={"schoolWebsite"}
        id={"schoolWebsite"}
        labelTitle={"school Website"}
        name={"schoolWebsite"}
        placeholder={"Enter School School Website Link"}
      />
      <TextInput
        type={"text"}
        htmlFor={"noticeNo"}
        id={"noticeNo"}
        labelTitle={"notice No:"}
        name={"noticeNo"}
        placeholder={"Enter notice No ex: 45"}
      />
      <TextInput
        type={"date"}
        htmlFor={"noticeDate"}
        id={"noticeDate"}
        labelTitle={"notice Date"}
        name={"noticeDate"}
        placeholder={"Minimum 5 tags is required"}
      />
      <TextInput
        type={"text"}
        htmlFor={"tags"}
        id={"tags"}
        labelTitle={"tags"}
        name={"tags"}
        placeholder={"Minimum 5 tags is required"}
      />
      <div className="flex justify-end">
        <Button type={"submit"} buttonText={"Post Now"} />
      </div>
    </form>
  );
};

export default Notice;
