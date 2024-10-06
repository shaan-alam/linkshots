import { Tooltip } from "@nextui-org/react";
import { useAtom } from "jotai";
import "react-color-palette/css";

import { gradients } from "@/constants/gradients";
import { editorAtom } from "@/store";
import { EditorBackGroundEnum, EditorProps } from "@/types";

const GradientPicker = () => {
  const [editor, setEditor] = useAtom(editorAtom);

  const handleGradientClick = (gradient: (typeof gradients)[0]) => {
    const newEditor: EditorProps = {
      ...editor,
      backgroundType: EditorBackGroundEnum.gradient,
      gradientUrl: gradient.url,
    };

    setEditor(newEditor);
  };

  return (
    <div className="grid grid-cols-5 gap-1">
      {gradients.map((gradient) => (
        <Tooltip key={gradient.id} content={gradient.name}>
          <span
            onClick={() => handleGradientClick(gradient)}
            className="block h-[40px] w-[40px] cursor-pointer rounded-lg"
            style={{
              backgroundImage: `url(${gradient.thumbnail_url})`,
              backgroundSize: "150%",
              backgroundPosition: "center",
            }}
          ></span>
        </Tooltip>
      ))}
    </div>
  );
};

export default GradientPicker;
