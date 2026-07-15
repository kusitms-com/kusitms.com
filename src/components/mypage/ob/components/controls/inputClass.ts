export function inputClass(invalid: boolean, empty = false) {
  return `h-12 w-full rounded-[8px] border px-4 text-[16px] font-medium leading-[26px] text-[#343946] outline-none transition placeholder:font-normal placeholder:text-[#9da2af] ${
    empty ? "bg-[#f7f7f9]" : "bg-white"
  } ${
    invalid ? "border-[#e52222] focus:border-[#e52222]" : "border-[#e5e7ef] focus:border-[#3157ff]"
  }`;
}
