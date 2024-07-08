"use client";

import React, { type useState, type FC } from "react";
import dynamic from "next/dynamic";
import { type ReactQuillProps } from "react-quill";
import Dropdown from "./dropdown";

// 동적으로 ReactQuill 컴포넌트를 로드하고 SSR은 비활성화합니다.
const ReactQuill = dynamic<ReactQuillProps>(() => import("react-quill"), {
  ssr: false,
  loading: () => <p>Loading...</p>,
}) as React.ComponentType<ReactQuillProps>;

// interface QuillEditorProps {
//   onContentChange?: (content: string) => void;
// }

const modules = {
  toolbar: {
    container: [
      [{ header: 1 }, { header: 2 }],
      ["bold", "italic", "underline", "strike"],
      ["link", "image", "video"],
      ["clean"],
    ],
    handlers: {
      image: imageHandler,
    }
  },
};

const formats = [
  "header",
  "bold",
  "italic",
  "underline",
  "strike",
  "link",
  "image",
  "video",
];

function imageHandler() {
  console.log("imageHandeler!");
  const input = document.createElement('input');
  input.setAttribute('type', 'file');
  input.setAttribute('accept', 'image/*');
  input.click();

  input.onchange = async () => {
    const file = input.files[0];
    if (file) {
      const formData = new FormData();
      formData.append('file', file);

      try {
        const response = await fetch('/uploadthing/imageUploader', {
          method: 'POST',
          body: formData,
        });

        if (response.ok) {
          const data = await response.json();
          const range = quill.getSelection();
          quill.insertEmbed(range.index, 'image', data.fileUrl); // fileUrl은 서버에서 반환되는 URL 속성 이름에 따라 변경
        } else {
          console.error('Upload failed:', response.statusText);
        }
      } catch (error) {
        console.error('Upload error:', error);
      }
    }
  };
}

const QuillEditor: FC = () => {
  const [value, setValue] = useState<string>("");
  const [title, setTitle] = useState("");
  // const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");
  const [error, setError] = useState("");
  // const author = user?.primaryEmailAddress?.emailAddress;
  const author = "test";
  const options = [
    { value: "카테고리 선택", label: "카테고리 선택" },
    { value: "잡담", label: "잡담" },
    { value: "질문", label: "질문" },
    { value: "소식", label: "소식" },
    { value: "멀티", label: "멀티" },
    { value: "기타", label: "기타" },
  ];

  const handleChange = (
    content: string,
    delta: any,
    source: string,
    editor: any,
  ): void => {
    console.log("change.contetn", editor.getHTML);
    setContent(editor.getHTML());
    setValue(editor.getHTML()); // 또는 content를 사용
    // if (onContentChange) onContentChange(editor.getHTML());
  };

  return (
    <>
      <section>
        <h1 className="mb-2 h-10 bg-slate-300 text-center leading-10">
          글쓰기
        </h1>
        <Dropdown options={options} />
        <input
          type="text"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="제목을 입력해주세요"
          className="mb-2 w-full border p-1"
        ></input>
        <form>
          <ReactQuill
            theme="snow"
            value={value}
            onChange={handleChange}
            modules={modules}
            formats={formats}
          />
          <button
            className="mt-2 w-full rounded-md border p-1 hover:bg-slate-200"
            type="submit"
          >
            등록
          </button>
        </form>
      </section>
    </>
  );
};

export default QuillEditor;
