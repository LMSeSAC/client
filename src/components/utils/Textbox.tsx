import { useMemo, useRef } from "react";
import ReactQuill from "react-quill";
import hljs from "highlight.js";
import "react-quill/dist/quill.snow.css";
import "highlight.js/styles/atom-one-dark.css";

export default function Textbox() {
  const editorRef = useRef<any>(null);

  const imageHandler = () => {
    const input = document.createElement("input");
    input.setAttribute("type", "file");
    input.setAttribute("accept", "image/*");
    input.click();

    input.onchange = async () => {
      if (input.files) {
        const file = input.files[0];
        const formData = new FormData();
        formData.append("img", file);

        try {
          const res = await fetch("http://localhost:8000/img", {
            method: "POST",
            body: formData,
          });
          const data = await res.json();
          if (editorRef.current) {
            const editor = editorRef.current.getEditor();
            const cursor = editor.getSelection();
            editor.insertEmbed(cursor.index, "image", data.url);
          }
        } catch (error) {
          console.log(error);
        }
      }
    };
  };

  const modules = useMemo(() => {
    return {
      syntax: {
        highlight: (text: string) =>
          hljs.highlight(text, { language: "javascript" }).value,
      },
      toolbar: {
        container: [
          [{ header: [1, 2, 3, 4, 5, 6, false] }],
          [{ font: [] }],
          [{ align: [] }],
          ["bold", "italic", "underline", "strike", "blockquote", "code-block"],
          [{ list: "ordered" }, { list: "bullet" }, "link"],
          [{ color: [] }, { background: [] }],
          ["image"],
        ],
        handlers: {
          image: imageHandler,
        },
      },
    };
  }, []);

  const handleText = (value: any) => {
    console.log(value);
  };

  return (
    <div className="ql-snow">
      <ReactQuill
        modules={modules}
        theme="snow"
        onChange={handleText}
        ref={editorRef}
      />
    </div>
  );
}
