export type EditorBackgroundType = "image" | "solid" | "gradient";
export enum EditorBackGroundEnum {
  image = "image",
  solid = "solid",
  gradient = "gradient",
}

export type EditorBackground =
  | {
      backgroundType: EditorBackGroundEnum.image;
      imageUrl: string;
    }
  | {
      backgroundType: EditorBackGroundEnum.solid;
      color: string;
    }
  | {
      backgroundType: EditorBackGroundEnum.gradient;
      gradientClassName: string;
    };

export type EditorProps = EditorBackground & {};
