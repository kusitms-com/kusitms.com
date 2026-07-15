type SegmentedControlProps = {
  options: string[];
  value: string | string[];
  onChange: (value: string) => void;
};

type SegmentedButtonProps = {
  option: string;
  selected: boolean;
  onClick: () => void;
};

export function SegmentedControl({ options, value, onChange }: SegmentedControlProps) {
  return (
    <div
      className={`grid h-12 gap-3 ${
        options.length === 4 ? "grid-cols-4" : options.length === 3 ? "grid-cols-3" : "grid-cols-2"
      }`}
    >
      {options.map((option) => (
        <SegmentedButton
          key={option}
          option={option}
          selected={Array.isArray(value) ? value.includes(option) : value === option}
          onClick={() => onChange(option)}
        />
      ))}
    </div>
  );
}

function SegmentedButton({ option, selected, onClick }: SegmentedButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`cursor-pointer rounded-[8px] border text-sm font-semibold transition ${
        selected
          ? "border-[#eef3ff] bg-[#eef3ff] text-[#3157ff]"
          : "border-[#dfe2ea] bg-white text-[#626879] hover:border-[#cbd2df] hover:bg-[#fafbff]"
      }`}
    >
      {option}
    </button>
  );
}
