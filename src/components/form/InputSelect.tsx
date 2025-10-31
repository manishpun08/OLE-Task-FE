import { cn } from "@/lib/utils";
import { Label } from "../ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

interface Option {
  label: string;
  value: string | number;
}

interface InputSelectProps {
  name: string;
  title?: string;
  placeholder?: string;
  value?: string | number;
  onChange?: (value: string) => void;
  options: Option[];
  isRequired?: boolean;
  isDisabled?: boolean;
  className?: string;
  error?: string;
  touched?: boolean;
}

const InputSelect = ({
  name,
  title,
  placeholder = "Select",
  value,
  onChange,
  options,
  isRequired = false,
  isDisabled = false,
  className = "",
  error,
  touched,
}: InputSelectProps) => {
  return (
    <div className="space-y-2">
      {title && (
        <Label
          htmlFor={name}
          className="typography-paragraph-small text-text-500 font-medium"
        >
          {title} {isRequired && <span className="text-error">*</span>}
        </Label>
      )}

      <Select
        disabled={isDisabled}
        value={value !== undefined ? String(value) : ""}
        onValueChange={(val) => {
          if (onChange && val) {
            onChange(val);
          }
        }}
      >
        <SelectTrigger
          className={cn(
            "border-grey-100 w-full rounded-full border-[0.3px] p-5 data-[size=default]:h-11.5",
            className,
          )}
        >
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>

        <SelectContent>
          {options.map((opt) => (
            <SelectItem
              key={opt.value}
              value={String(opt.value)}
              className="text-text-500 typography-paragraph-small focus:bg-primary-50 focus:text-primary-500 rounded-none px-[0.62rem] py-[0.5rem] capitalize"
            >
              {opt.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      {touched && error && (
        <p className="typography-paragraph-small text-error">{error}</p>
      )}
    </div>
  );
};

export default InputSelect;
