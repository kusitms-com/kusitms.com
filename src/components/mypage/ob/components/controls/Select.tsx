import { Dropdown } from "@kusitms.com/ui";

type SelectProps = {
  value: string;
  placeholder?: string;
  options: string[];
  onChange: (value: string) => void;
  invalid?: boolean;
};

export function Select({ value, placeholder, options, onChange, invalid = false }: SelectProps) {
  return (
    <Dropdown
      value={value || undefined}
      placeholder={placeholder}
      options={options.map((option) => ({ value: option, label: option }))}
      onValueChange={onChange}
      className={`h-12 w-full cursor-pointer justify-between rounded-[8px] border bg-white px-4 py-0 !text-[16px] !font-medium !leading-[26px] [&_*]:!text-[16px] [&_*]:!font-medium [&_*]:!leading-[26px] ${
        invalid
          ? "border-[#e52222] text-[#151519]"
          : value
            ? "border-[#e5e7ef] text-[#151519]"
            : "border-[#e5e7ef] text-[#9da2af]"
      }`}
    />
  );
}
