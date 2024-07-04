import { INPUT_DROPDOWN_PROPS } from "@/types/types";
import { useState } from "react";

const useInputDropdown = ({ label, onChange }: INPUT_DROPDOWN_PROPS) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const handleOptionSelect = (optionValue: string) => {
    onChange({
      target: {
        name: label.toLowerCase().replace(/\s+/g, ""),
        value: optionValue,
      },
    });
  };
  return { toggleDropdown, isOpen, handleOptionSelect };
};

export default useInputDropdown;
