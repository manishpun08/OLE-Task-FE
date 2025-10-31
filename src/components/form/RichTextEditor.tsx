import dynamic from "next/dynamic";
import { useEffect } from "react";
import { Label } from "@/components/ui/label";
import "react-quill-new/dist/quill.snow.css";

// Dynamically import ReactQuill with SSR disabled
const ReactQuill = dynamic(() => import("react-quill-new"), {
  ssr: false,
  loading: () => (
    <div className="h-32 animate-pulse rounded-md border bg-gray-50" />
  ),
});

interface RichTextEditorProps {
  name?: string;
  value: string;
  onChange: (value: string) => void;
  onBlur?: () => void;
  error?: string;
  touched?: boolean;
  label?: string;
  placeholder?: string;
  toolbar?: boolean;
  minHeight?: string;
  maxHeight?: string;
  isRequired?: boolean;
}

const RichTextEditor = ({
  value,
  onChange,
  onBlur,
  error,
  touched,
  label,
  placeholder,
  toolbar = true,
  minHeight = "150px",
  maxHeight = "300px",
  isRequired = false,
}: RichTextEditorProps) => {
  const modules = {
    toolbar: toolbar
      ? [
          [{ header: [1, 2, 3, false] }],
          ["bold", "italic", "underline"],
          [{ list: "ordered" }, { list: "bullet" }],
          [{ align: [] }],
          ["link"],
          ["clean"],
        ]
      : false,
    clipboard: {
      matchVisual: false,
    },
    keyboard: {
      bindings: {
        tab: false,
        indent: null,
        outdent: null,
      },
    },
  };

  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "list",
    "bullet",
    "align",
    "link",
  ];

  useEffect(() => {
    if (value === undefined || value === null) {
      onChange("");
    }
  }, [value, onChange]);

  const containerStyle = {
    "--editor-min-height": minHeight,
    "--editor-max-height": maxHeight,
  } as React.CSSProperties;

  return (
    <div className="space-y-2" style={containerStyle}>
      {label && (
        <Label
          htmlFor={label}
          className="typography-paragraph-medium text-grey-500 font-medium"
        >
          {label} {isRequired && <span className="text-error">*</span>}
        </Label>
      )}

      <div className="rich-text-container">
        <ReactQuill
          theme="snow"
          value={value || ""}
          onChange={(content) => onChange(content)}
          onBlur={onBlur}
          placeholder={placeholder}
          modules={modules}
          formats={formats}
          className="bg-white"
          style={{
            minHeight: "var(--editor-min-height)",
            maxHeight: "var(--editor-max-height)",
          }}
        />
      </div>

      {touched && error && (
        <div className="typography-paragraph-small text-error mt-1">
          {error}
        </div>
      )}
    </div>
  );
};

export default RichTextEditor;
