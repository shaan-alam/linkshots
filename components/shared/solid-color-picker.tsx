import { useAtom } from "jotai";
import { ColorPicker, IColor, useColor } from "react-color-palette";
import "react-color-palette/css";

import { editorAtom } from "@/store";
import { EditorBackGroundEnum, EditorProps } from "@/types";


const SolidColorPicker = () => {
  const [editor, setEditor] = useAtom(editorAtom);
  const [color, setColor] = useColor("#561ecb");

  const onColorChange = (color: IColor) => {
    setColor(color);
    const newEditor: EditorProps = {
      ...editor,
      backgroundType: EditorBackGroundEnum.solid,
      color: color.hex,
    };

    setEditor(newEditor);
  };

  return (
    <div>
      <ColorPicker
        color={color}
        onChange={(color) => onColorChange(color)}
        hideInput
        hideAlpha
      />
    </div>
  );
};

export default SolidColorPicker;
