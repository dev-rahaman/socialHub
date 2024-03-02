"use client";
import "quill/dist/quill.snow.css";
import { Button, TextInput } from "../../DashboardComponents/SmallComponents";
import TextEditor from "../../DashboardComponents/TextEditor";
import { useContext, useState } from "react";
import PostData from "../../Functions/PostData";
import { AuthContext } from "@/app/Provider/AuthProvider";

const AddBlog = () => {
  const { user } = useContext(AuthContext);
  const [value, setValue] = useState();

  const handleArticle = (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const photo = form.photo.value;
    const tags = form.tags.value;

    const userEmail = user?.email;

    const newArticle = { userEmail, title, photo, value, tags };
    PostData({ endPoint: "article", newData: newArticle });
  };

  return (
    <form onSubmit={handleArticle} className="flex flex-col gap-y-5">
      <TextInput
        type={"text"}
        htmlFor={"title"}
        id={"title"}
        labelTitle={"Title"}
        placeholder={
          " Introduce the problem and expand on what you put in the title. Minimum 20 characters."
        }
        name={"title"}
      />

      <TextInput
        type={"file"}
        htmlFor={"photo"}
        id={"photo"}
        labelTitle={"photo"}
        name={"photo"}
      />

      <TextEditor value={value} setValue={setValue} />

      <TextInput
        type={"text"}
        htmlFor={"tags"}
        id={"tags"}
        labelTitle={"Tag"}
        name={"tags"}
        placeholder={"Minimum 5 tags is required"}
      />

      <div className="flex justify-end">
        <Button type={"submit"} buttonText={"Post Now"} />
      </div>
    </form>
  );
};

export default AddBlog;
