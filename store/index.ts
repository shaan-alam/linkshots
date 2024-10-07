import { atom } from "jotai";

import { EditorProps } from "@/types";

type EditorBackgroundSettingsProps = {
  type: "solid" | "gradient" | "image";
  color?: string;
  gradientClassName?: string;
  imageUrl?: string;
  aiGenImageUrl?: string;
  activeGradientClassName?: string;
};

export const editorAtom = atom<EditorProps>();

export const editorBackgroundSettingAtom = atom<EditorBackgroundSettingsProps>({
  type: "solid",
  color: "#ffffff",
});
