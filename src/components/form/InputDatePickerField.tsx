"use client";

import { format, isValid, parse } from "date-fns";
import { Calendar } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";

const InputDatePickerField = ({
  label,
  value,
  onChange,
  error,
  touched,
  isRequired = false,
  className,
  disabled = false,
  placeholder = "dd/mm/yyyy",
}: {
  label: string;
  value: Date | undefined;
  onChange: (date: Date | undefined) => void;
  error?: string;
  touched?: boolean;
  isRequired?: boolean;
  className?: string;
  disabled?: boolean;
  placeholder?: string;
}) => {
  const [open, setOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");

  // Update input value when the date value changes
  useEffect(() => {
    if (value) {
      setInputValue(format(value, "dd/MM/yyyy"));
    } else {
      setInputValue("");
    }
  }, [value]);

  const handleSelect = (date: Date | undefined) => {
    onChange(date);
    setOpen(false); // close calendar after selecting
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputVal = e.target.value;
    setInputValue(inputVal);

    // Try to parse the date as user types
    if (inputVal.length === 10) {
      // dd/mm/yyyy format
      const parsedDate = parse(inputVal, "dd/MM/yyyy", new Date());
      if (isValid(parsedDate)) {
        onChange(parsedDate);
      }
    } else if (inputVal === "") {
      onChange(undefined);
    }
  };

  const handleInputBlur = () => {
    // On blur, try to parse various date formats
    if (inputValue) {
      const formats = ["dd/MM/yyyy", "d/M/yyyy", "dd-MM-yyyy", "d-M-yyyy"];
      let parsedDate: Date | undefined;

      for (const formatStr of formats) {
        const testDate = parse(inputValue, formatStr, new Date());
        if (isValid(testDate)) {
          parsedDate = testDate;
          break;
        }
      }

      if (parsedDate) {
        onChange(parsedDate);
        setInputValue(format(parsedDate, "dd/MM/yyyy"));
      } else {
        // If invalid, reset to previous valid date or empty
        if (value) {
          setInputValue(format(value, "dd/MM/yyyy"));
        } else {
          setInputValue("");
        }
      }
    }
  };

  return (
    <div className="flex flex-col space-y-2">
      {label && (
        <Label
          htmlFor={String(label)}
          className="typography-paragraph-medium text-grey-500 font-medium"
        >
          {label} {isRequired && <span className="text-error">*</span>}
        </Label>
      )}

      <div className="relative">
        <Input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          onBlur={handleInputBlur}
          placeholder={placeholder}
          disabled={disabled}
          className={cn(
            "border-grey-100 focus-visible:border-primary-500 h-11.5 rounded-full border-[0.3px] px-4 pr-12 focus-visible:ring-0",
            disabled && "cursor-not-allowed opacity-50",
            className,
          )}
        />
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              disabled={disabled}
              className="absolute top-1/2 right-2 h-8 w-8 -translate-y-1/2 hover:bg-transparent"
            >
              <Calendar className="text-grey-400 size-4" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="start">
            <CalendarComponent
              mode="single"
              selected={value}
              onSelect={handleSelect}
              captionLayout="dropdown"
              showOutsideDays={true}
              // startMonth={new Date(1900, 0)}
              // endMonth={new Date(2100, 11)}
            />
          </PopoverContent>
        </Popover>
      </div>

      {touched && error && (
        <div className="text-error typography-paragraph-small">{error}</div>
      )}
    </div>
  );
};

export default InputDatePickerField;
