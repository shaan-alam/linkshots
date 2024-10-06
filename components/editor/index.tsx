"use client";

import { useAtom } from "jotai";

import { editorAtom } from "@/store";
import { EditorBackGroundEnum } from "@/types";

const Editor = () => {
  const [editor] = useAtom(editorAtom);

  const generateEditorStyles = () => {
    let styles = {};

    if (editor?.backgroundType === EditorBackGroundEnum.image) {
      styles = {
        backgroundImage: `url(${editor.imageUrl})`,
        backgroundSize: "cover",
      };
    } else if (editor?.backgroundType === EditorBackGroundEnum.solid) {
      styles = {
        backgroundColor: editor.color,
      };
    } else if (editor?.backgroundType === EditorBackGroundEnum.gradient) {
      styles = {
        backgroundImage: `url(${editor.gradientUrl})`,
        backgroundSize: "cover",
      };
    }

    return styles;
  };

  return (
    <div
      style={generateEditorStyles()}
      className="h-full rounded-lg border p-4 shadow-md"
    >
      <div>Editor</div>
    </div>
  );
};

export default Editor;
