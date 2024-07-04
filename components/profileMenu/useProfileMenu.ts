import { useState } from "react";

const useProfileMenu = () => {
  const [option, setOption] = useState<number>(0);
  const handleClick = (num: number) => {
    setOption(num);
  };
  return { handleClick, option };
};

export default useProfileMenu;
