import { iconDownload, iconView } from "@/constants/Images";
import Image from "next/image";
import React from "react";

const FileViewer = ({ FileName }: { FileName: string }) => {
  return (
    <div className="flex justify-between ms-[10px] border-[1px] border-borderGrey w-[374px] rounded-[10px] p-4">
      <div>{FileName}</div>
      <div className="flex gap-4">
        <button>
          <Image src={iconView} alt="Icon View" />
        </button>
        <button>
          <Image src={iconDownload} alt="Icon Download" />
        </button>
      </div>
    </div>
  );
};

export default FileViewer;
