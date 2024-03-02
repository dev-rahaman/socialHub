import React from "react";
import { useQuill } from "react-quilljs";

export default function TextEditor({ value, setValue }) {
  const modules = {
    toolbar: [
      ["bold", "italic", "underline"],
      [{ align: [] }],

      [{ list: "ordered" }, { list: "bullet" }],
      [{ indent: "-1" }, { indent: "+1" }],

      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      ["link", "image", "video"],
      [{ color: [] }, { background: [] }],

      ["clean"],
    ],
    clipboard: {
      matchVisual: false,
    },
  };

  const { quill, quillRef } = useQuill({ modules });

  React.useEffect(() => {
    if (quill) {
      quill.on("text-change", (delta, oldDelta, source) => {
        setValue(quillRef.current.firstChild.innerHTML);
      });
    }
  }, [quill, quillRef, setValue]);

  return (
    <div>
      <div className="bg-gray-200 p-5 rounded w-[900px]">
        <label htmlFor="Content">Content</label>
        <span className="block">
          Introduce the problem and expand on what you put in the title. Minimum
          20 characters.
        </span>

        <div style={{ height: 200, border: "1px solid lightgray" }}>
          <div ref={quillRef} style={{ border: "none" }} />
        </div>
      </div>
    </div>
  );
}
