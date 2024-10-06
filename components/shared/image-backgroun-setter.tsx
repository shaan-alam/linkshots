"use client";

import { useState } from "react";

import { Button, Input } from "@nextui-org/react";
import { useAtom } from "jotai";

import { editorAtom } from "@/store";
import { EditorBackGroundEnum, EditorProps } from "@/types";

import ImageGenerator from "./image-generator";

const ImageBackgroundSetter = () => {
  const [imageURL, setImageURL] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [editor, setEditor] = useAtom(editorAtom);

  const setEditorBackgroundImage = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(imageURL);
      if (!response.ok) {
        throw new Error(`Failed to fetch image: ${response.statusText}`);
      }

      const blob = await response.blob();
      const imageObjectURL = URL.createObjectURL(blob);

      const newEditor: EditorProps = {
        ...editor,
        backgroundType: EditorBackGroundEnum.image,
        imageUrl: imageObjectURL,
      };

      setEditor(newEditor);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="space-y-4">
      <div>
        <h1 className="mb-2 text-sm text-default-600">From URL</h1>
        <Input
          placeholder="Image URL"
          value={imageURL}
          onValueChange={setImageURL}
        />
        <Button
          fullWidth
          className="mt-2"
          color="primary"
          disableRipple
          onClick={setEditorBackgroundImage}
          isLoading={isLoading}
        >
          Set
        </Button>
      </div>
      <ImageGenerator />
    </div>
  );
};

export default ImageBackgroundSetter;
