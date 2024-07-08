"use client";

// import dynamic from "next/dynamic";
import { useMemo, useRef } from "react";
import ReactQuill from "react-quill";
// import { useEffect, useRef } from "react";
import "react-quill/dist/quill.snow.css";
import { uploadFiles } from "~/utils/uploadthing";
// import ReactQuill from "react-quill";

// const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

interface QuillEditorProps {
  value: string;
  onChange: (value: string) => void;
}

const QuillEditor: React.FC<QuillEditorProps> = ({ value, onChange }) => {
  const quillRef = useRef(null);

  const imageHandler = () => {
    console.log("imageHandeler!");
    const input = document.createElement('input');
    input.setAttribute('type', 'file');
    input.setAttribute('accept', 'image/*');
    input.click();

    input.onchange = async () => {
      const files = input.files;
      if (!files || files.length === 0) return;
      const filesArray = Array.from(files); // FileList를 배열로 변환

      try {
        const response = await uploadFiles('imageUploader', {
          files: filesArray,
        });

        if (response) {
          const quill = quillRef.current.getEditor();
          const range = quill.getSelection();
          response.forEach(file => {
            quill.insertEmbed(range.index, 'image', file.url);
          });
        } else {
          console.error('Upload failed');
        }

        // const response = await uploadFiles("postImageUploder", {
        //   files,
        // input: {}, // will be typesafe to match the input set for `imageUploader` in your FileRouter
        // });
        // const response = await fetch('/api/uploadthing/imageUploader', {
        //   method: 'POST',
        //   body: formData,
        // });

        // if (response.ok) {
        //   const data = await response.json();
        //   const range = quill.getSelection();
        //   quill.insertEmbed(range.index, 'image', data.fileUrl); // fileUrl은 서버에서 반환되는 URL 속성 이름에 따라 변경
        // } else {
        //   console.error('Upload failed:', response.statusText);
        // }
      } catch (error) {
        console.error('Upload error:', error);
      }
    };
  }

  const modules = useMemo(() => {
    return {
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
    }
  }, []);

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

  // useEffect(() => {
  //   if (quillRef.current) {
  //     const quill = quillRef.current.getEditor();
  //     quill.getModule('toolbar').addHandler('image', imageHandler);
  //   }
  // }, []);

  return (
    <ReactQuill ref={quillRef} value={value} onChange={onChange} modules={modules} formats={formats} className="h-52 mb-10" />
  );
};

export default QuillEditor;
