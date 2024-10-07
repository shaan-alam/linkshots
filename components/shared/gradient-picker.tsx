import { Tooltip } from "@nextui-org/react";
import { useAtom } from "jotai";
import "react-color-palette/css";

import { gradients, meshGradients } from "@/constants/gradients";
import { cn } from "@/lib/utils";
import { editorStateAtom } from "@/store";

const GradientPicker = () => {
  const [editorState, setEditorState] = useAtom(editorStateAtom);

  const handleGradientClick = (gradient: (typeof gradients)[0]) => {
    setEditorState({
      backgroundSetting: {
        backgroundType: "gradient",
        gradientClassName: gradient.className,
      },
    });
  };

  return (
    <div className="space-y-4">
      <div>
        <h1 className="mb-2 text-sm text-default-600">Gradients</h1>
        <div className="grid grid-cols-5 gap-1">
          {gradients.map((gradient) => (
            <Tooltip key={gradient.id} content={gradient.name}>
              <span
                onClick={() => handleGradientClick(gradient)}
                className={cn(
                  "block h-[40px] w-[40px] cursor-pointer rounded-lg ring-2 ring-transparent ring-offset-2",
                  gradient.className,
                  editorState?.backgroundSetting.gradientClassName ===
                    gradient.className
                    ? "ring-primary"
                    : ""
                )}
              ></span>
            </Tooltip>
          ))}
        </div>
      </div>

      <div>
        <h1 className="mb-2 text-sm text-default-600">Mesh Gradients</h1>
        <div className="grid grid-cols-5 gap-1">
          {meshGradients.map((gradient) => (
            <Tooltip key={gradient.id} content={gradient.name}>
              <span
                onClick={() => handleGradientClick(gradient)}
                className={cn(
                  "block h-[40px] w-[40px] cursor-pointer rounded-lg ring-2 ring-transparent ring-offset-2",
                  gradient.className,
                  editorState?.backgroundSetting.gradientClassName ===
                    gradient.className
                    ? "ring-primary"
                    : ""
                )}
              ></span>
            </Tooltip>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GradientPicker;
