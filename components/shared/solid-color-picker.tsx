import { useAtom } from "jotai";
import { ColorPicker, IColor, useColor } from "react-color-palette";
import "react-color-palette/css";

import { editorStateAtom } from "@/store";

const SolidColorPicker = () => {
  const [, setEditorState] = useAtom(editorStateAtom);

  const [color, setColor] = useColor("#561ecb");

  const onColorChange = (color: IColor) => {
    setEditorState({
      backgroundSetting: {
        backgroundType: "solid",
        color: color.hex,
      },
    });

    setColor(color);
  };

  return (
    <div>
      <ColorPicker
        color={color}
        onChange={(color) => onColorChange(color)}
        hideAlpha
      />
    </div>
  );
};

export default SolidColorPicker;
