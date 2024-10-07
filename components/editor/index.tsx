"use client";

import { useAtom } from "jotai";

import { cn } from "@/lib/utils";
import { editorStateAtom } from "@/store";

import "../../app/gradients.css";

const Editor = () => {
  const [editorState] = useAtom(editorStateAtom);

  const generateEditorStyles = () => {
    let styles = {};

    if (editorState?.backgroundSetting.backgroundType === "solid") {
      styles = {
        backgroundColor: editorState.backgroundSetting.color,
      };
    } else if (editorState?.backgroundSetting.backgroundType === "image") {
      styles = {
        backgroundImage: `url("${editorState.backgroundSetting.imageUrl || editorState.backgroundSetting.aiGenImageUrl}")`,
        backgroundSize: "cover",
      };
    }

    return styles;
  };

  return (
    <div
      style={generateEditorStyles()}
      className={cn(
        "h-full rounded-lg border p-4 shadow-md",
        editorState?.backgroundSetting.backgroundType === "gradient"
          ? editorState?.backgroundSetting.gradientClassName
          : ""
      )}
    >
      <div>Editor</div>
    </div>
  );
};

export default Editor;
