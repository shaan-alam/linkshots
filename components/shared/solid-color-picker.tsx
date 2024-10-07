import { useAtom } from "jotai";
import { ColorPicker, IColor, useColor } from "react-color-palette";
import "react-color-palette/css";

import { editorAtom, editorBackgroundSettingAtom } from "@/store";
import { EditorBackGroundEnum, EditorProps } from "@/types";

const SolidColorPicker = () => {
  const [, setEditorBackgroundSetting] = useAtom(editorBackgroundSettingAtom);
  const [editor, setEditor] = useAtom(editorAtom);
  const [color, setColor] = useColor("#561ecb");

  const onColorChange = (color: IColor) => {
    setEditorBackgroundSetting({
      type: EditorBackGroundEnum.solid,
      color: color.hex,
    });
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
        hideAlpha
      />
    </div>
  );
};

export default SolidColorPicker;
