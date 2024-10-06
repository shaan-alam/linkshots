import { Tooltip } from "@nextui-org/react";
import { useAtom } from "jotai";
import "react-color-palette/css";

import { gradients } from "@/constants/gradients";
import { cn } from "@/lib/utils";
import { editorAtom, editorBackgroundSettingAtom } from "@/store";
import { EditorBackGroundEnum, EditorProps } from "@/types";

const GradientPicker = () => {
  const [editorBackgroundSetting, setEditorBackgroundSetting] = useAtom(
    editorBackgroundSettingAtom
  );

  const [editor, setEditor] = useAtom(editorAtom);

  const handleGradientClick = (gradient: (typeof gradients)[0]) => {
    setEditorBackgroundSetting({
      type: EditorBackGroundEnum.gradient,
      gradientClassName: gradient.className,
      activeGradientClassName: gradient.className,
    });

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
            className={cn(
              "block h-[40px] w-[40px] cursor-pointer rounded-lg ring-2 ring-offset-2 ring-transparent",
              gradient.className,
              editorBackgroundSetting.activeGradientClassName ===
                gradient.className
                ? "ring-primary"
                : ""
            )}
          ></span>
        </Tooltip>
      ))}
    </div>
  );
};

export default GradientPicker;
