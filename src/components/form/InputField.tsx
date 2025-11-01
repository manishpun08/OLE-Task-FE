import { useField } from "formik";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

interface InputFieldProps {
  name: string;
  type?: string;
  placeholder: string;
  title?: string;
  isRequired?: boolean;
  isDisabled?: boolean;
  className?: string;
}

const InputField = ({
  name,
  type = "text",
  placeholder,
  title,
  isRequired = false,
  isDisabled = false,
  className,
}: InputFieldProps) => {
  const [field, meta] = useField(name);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (type === "number") {
      const allowedKeys = [
        "Backspace",
        "Tab",
        "ArrowLeft",
        "ArrowRight",
        "Delete",
        "+",
        "-",
        " ",
      ];

      if (e.ctrlKey && ["c", "a", "v", "x"].includes(e.key.toLowerCase())) {
        return;
      }

      if (!/[0-9]/.test(e.key) && !allowedKeys.includes(e.key)) {
        e.preventDefault();
      }
    }
  };

  const handleWheel = (e: React.WheelEvent<HTMLInputElement>) => {
    if (type === "number") {
      (e.target as HTMLInputElement).blur();
    }
  };

  return (
    <div className="space-y-2">
      {title && (
        <Label
          htmlFor={String(name)}
          className="font-medium typography-paragraph-medium text-grey-500"
        >
          {title} {isRequired && <span className="text-error">*</span>}
        </Label>
      )}

      <Input
        disabled={isDisabled}
        id={String(name)}
        type={type}
        placeholder={placeholder}
        onKeyDown={handleKeyDown}
        onWheel={handleWheel}
        className={cn(
          "typography-paragraph-small border-grey-100 focus-visible:border-primary-500 h-11.5 rounded-full border-[0.3px] px-4 focus-visible:ring-0",
          className,
        )}
        {...field}
      />
      {meta.touched && meta.error && (
        <p className="pl-4 typography-paragraph-small text-error">
          {meta.error as string}
        </p>
      )}
    </div>
  );
};

export default InputField;
