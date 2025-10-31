import { type FormikValues, useFormikContext } from "formik";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

interface TextAreaFieldProps<T extends FormikValues> {
  name: keyof T;
  placeholder: string;
  title?: string;
  isRequired?: boolean;
  isDisabled?: boolean;
  className?: string;
  rows?: number;
}

const TextAreaField = <T extends FormikValues>({
  name,
  placeholder,
  title,
  isRequired = true,
  isDisabled = false,
  className,
  rows = 4,
}: TextAreaFieldProps<T>) => {
  const formik = useFormikContext<T>();
  const touched = formik?.touched?.[name];
  const error = formik?.errors?.[name];

  return (
    <div className="space-y-2">
      {title && (
        <Label
          htmlFor={String(name)}
          className="typography-paragraph-medium text-grey-500 font-medium"
        >
          {title} {isRequired && <span className="text-error">*</span>}
        </Label>
      )}

      <Textarea
        disabled={isDisabled}
        id={String(name)}
        name={String(name)}
        placeholder={placeholder}
        onChange={formik?.handleChange}
        onBlur={formik?.handleBlur}
        value={
          formik?.values[name] as
            | string
            | number
            | readonly string[]
            | undefined
        }
        rows={rows}
        className={cn(
          "typography-paragraph-small border-border-500 focus-visible:border-primary-500 w-full resize-none rounded-[8px] border-[0.3px] p-4 outline-none focus-visible:ring-0",
          className,
        )}
      />
      {touched && error && (
        <p className="typography-paragraph-small text-error">
          {error as string}
        </p>
      )}
    </div>
  );
};

export default TextAreaField;
