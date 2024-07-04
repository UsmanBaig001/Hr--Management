import { toCamelCase } from "@/constants/GlobalFunction";
import { INPUT_DROPDOWN_PROPS } from "@/types/types";
import { useState } from "react";

const useSelectMenu = ({ label, onChange }: INPUT_DROPDOWN_PROPS) => {
  const [open, setOpen] = useState<Boolean>(false);
  const handleOpen = () => {
    setOpen(!open);
  };
  const handleOptionSelect = (optionValue: string) => {
    onChange({
      target: {
        name: toCamelCase(label),
        value: optionValue,
      },
    });
  };
  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    handleOptionSelect(event.target.value);
  };
  return { handleOpen, open, handleSelectChange };
};

export default useSelectMenu;
