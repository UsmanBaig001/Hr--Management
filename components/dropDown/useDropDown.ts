import { useState } from "react";

const useDropDown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  return { toggleDropdown, isOpen };
};

export default useDropDown;
