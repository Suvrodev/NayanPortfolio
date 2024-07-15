import React, { useMemo, useRef, useState } from "react";
import JoditEditor from "jodit-react";
// import { Editor } from "react-draft-wysiwyg";
// import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const AdminBlog = () => {
  const editor = useRef(null);
  const [content, setContent] = useState("");
  const [value, setValue] = useState("");

  const config = useMemo(
    () => ({
      readonly: false,
      placeholder: "Start typings...",
    }),
    []
  );

  return (
    <div>
      <div>
        <h1 className="w-4/12 mx-auto bg-green-500 p-5 rounded-md text-center text-4xl text-white my-10">
          Write Text
        </h1>
      </div>
      <div className="p-5">
        <JoditEditor
          ref={editor}
          value={content}
          config={config}
          tabIndex={1}
          //   onChange={(newContent) => {
          //     setContent(newContent);
          //   }}
          onBlur={(newContent) => setContent(newContent)}
          onChange={(newContent) => {}}
          className="text-black p-10"
        />
      </div>

      <div>
        <h1 className="w-4/12 mx-auto bg-green-500 p-5 rounded-md text-center text-4xl text-white my-10">
          Result
        </h1>

        <div className="w-11/12 mx-auto bg-black p-5 rounded-md   text-white my-10">
          {content}
        </div>
      </div>

      {/* 2nd Things */}
      {/* <div>
        <h1 className="w-4/12 mx-auto bg-green-500 p-5 rounded-md text-center text-4xl text-white my-10">
          Write Text
        </h1>
      </div>
      <div className="p-5">
        <ReactQuill value={value} onChange={setValue} className="bg-white" />
      </div>

      <div>
        <h1 className="w-4/12 mx-auto bg-green-500 p-5 rounded-md text-center text-4xl text-white my-10">
          Result
        </h1>

        <div className="w-11/12 mx-auto bg-black p-5 rounded-md   text-white my-10">
          {value}
        </div>
      </div> */}
    </div>
  );
};

export default AdminBlog;
