import { atom } from "jotai";

type EditorStateProps = {
  backgroundSetting: {
    backgroundType: "solid" | "gradient" | "image";
    color?: string;
    gradientClassName?: string;
    imageUrl?: string;
    aiGenImageUrl?: string;
    prompt?: string;
  };
};

export const editorStateAtom = atom<EditorStateProps>();
