import { type FormikValues, useFormikContext } from "formik";
import { Eye, EyeOff } from "lucide-react";
import type React from "react";
import { useState } from "react";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

interface PasswordInputFieldProps<T extends FormikValues> {
  name: keyof T;
  placeholder: string;
  title?: string;
  isRequired?: boolean;
  isDisabled?: boolean;
  className?: string;
  maxLength?: number;
}

const PasswordInputField = <T extends FormikValues>({
  name,
  placeholder,
  title,
  isRequired = false,
  isDisabled = false,
  className,
  maxLength,
}: PasswordInputFieldProps<T>) => {
  const formik = useFormikContext<T>();
  const touched = formik?.touched?.[name];
  const error = formik?.errors?.[name];

  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    const noWhitespaceValue = inputValue.replace(/\s/g, "");

    if (inputValue !== noWhitespaceValue) {
      const modifiedEvent = {
        ...e,
        target: {
          ...e.target,
          value: noWhitespaceValue,
        },
      };
      formik?.handleChange(
        modifiedEvent as React.ChangeEvent<HTMLInputElement>,
      );
      return;
    }

    formik?.handleChange(e);
  };

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

      <div className="relative">
        <input
          id={String(name)}
          name={String(name)}
          type={showPassword ? "text" : "password"}
          placeholder={placeholder}
          disabled={isDisabled}
          maxLength={maxLength}
          value={(formik?.values[name] as string) || ""}
          onChange={handleChange}
          onBlur={formik?.handleBlur}
          autoComplete="current-password"
          className={cn(
            "typography-paragraph-small border-border-500 focus-visible:border-primary-500 h-11.5 w-full rounded-full border-[0.3px] px-4 pr-10 focus-visible:ring-0",
            className,
          )}
        />
        <button
          type="button"
          className="absolute top-1/2 right-5 -translate-y-1/2 text-gray-500"
          onClick={() => setShowPassword((prev) => !prev)}
          aria-label={showPassword ? "Hide password" : "Show password"}
        >
          {showPassword ? (
            <Eye className="h-4 w-4" />
          ) : (
            <EyeOff className="h-4 w-4" />
          )}
        </button>
      </div>

      {touched && error && (
        <p className="typography-paragraph-small text-error pl-4">
          {error as string}
        </p>
      )}
    </div>
  );
};

export default PasswordInputField;
