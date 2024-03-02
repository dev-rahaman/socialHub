"use client";
import { Button, TextInput } from "../../DashboardComponents/SmallComponents";

const Photo = () => {
  const handlePhoto = (e) => {
    e.preventDefault();
    const form = e.target;
    const photo = form.photo.value;
    const description = form.description.value;
    const tags = form.tags.value;

    const newPhoto = { photo, description, tags };

    fetch("http://localhost:5000/add-photo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPhoto),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <div className="flex flex-col gap-y-5">
      <form
        onSubmit={handlePhoto}
        className="bg-gray-200 p-5 rounded-2xl w-[920px]"
      >
        <label htmlFor={"description"}>Description</label>
        <span className="block">{"ভিডিও ডেসক্রিপশন"}</span>
        <textarea
          id={"description"}
          name={"description"}
          required
          className="w-full p-2 h-[300px] resize-none border-0 rounded-2xl outline-0  focus:outline-none focus:border-0"
        />
        <TextInput
          type={"file"}
          htmlFor={"photo"}
          id={"photo"}
          labelTitle={"photo"}
          name={"photo"}
          paragraph={"একটি ফটো সিলেক্ট করুন"}
        />
        <TextInput
          type={"text"}
          htmlFor={"tags"}
          id={"tags"}
          labelTitle={"Tag"}
          name={"tags"}
          paragraph={"Minimum 5 tags is required"}
        />
        <div className="flex justify-end">
          <Button type={"submit"} buttonText={"Post Now"} />
        </div>
      </form>
    </div>
  );
};

export default Photo;
