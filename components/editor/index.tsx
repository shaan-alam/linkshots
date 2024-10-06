"use client";

import { useAtom } from "jotai";

import { cn } from "@/lib/utils";
import { editorAtom } from "@/store";
import { EditorBackGroundEnum } from "@/types";

import "../../app/mesh.css";

const Editor = () => {
  const [editor] = useAtom(editorAtom);

  const generateEditorStyles = () => {
    let styles = {};

    if (editor?.backgroundType === EditorBackGroundEnum.image) {
      styles = {
        backgroundImage: `url("${editor.imageUrl || editor.aiGenImageUrl}")`,
        backgroundSize: "cover",
      };
    } else if (editor?.backgroundType === EditorBackGroundEnum.solid) {
      styles = {
        backgroundColor: editor.color,
      };
    }

    return styles;
  };

  return (
    <div
      style={generateEditorStyles()}
      className={cn(
        "h-full rounded-lg border p-4 shadow-md",
        editor?.backgroundType === EditorBackGroundEnum.gradient &&
          editor.gradientClassName
      )}
    >
      <div>Editor</div>
    </div>
  );
};

export default Editor;
