import { Tooltip } from "@nextui-org/react";
import { useAtom } from "jotai";
import "react-color-palette/css";

import { gradients } from "@/constants/gradients";
import { editorAtom } from "@/store";
import { EditorBackGroundEnum, EditorProps } from "@/types";
import { cn } from "@/lib/utils";

const GradientPicker = () => {
  const [editor, setEditor] = useAtom(editorAtom);

  const handleGradientClick = (gradient: (typeof gradients)[0]) => {
    const newEditor: EditorProps = {
      ...editor,
      backgroundType: EditorBackGroundEnum.gradient,
      gradientClassName: gradient.className,
    };

    setEditor(newEditor);
  };

  return (
    <div className="grid grid-cols-5 gap-1">
      {gradients.map((gradient) => (
        <Tooltip key={gradient.id} content={gradient.name}>
          <span
            onClick={() => handleGradientClick(gradient)}
            className={cn("block h-[40px] w-[40px] cursor-pointer rounded-lg", gradient.className)}
          ></span>
        </Tooltip>
      ))}
    </div>
  );
};

export default GradientPicker;
