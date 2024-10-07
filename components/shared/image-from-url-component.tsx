"use client";

import { useState } from "react";

import { Button, Input } from "@nextui-org/react";
import { IconX } from "@tabler/icons-react";
import { useAtom } from "jotai";

import { getImageObjectFromURL } from "@/lib/utils";
import { editorStateAtom } from "@/store";

const ImageFromURLComponent = () => {
  const [editorState, setEditorState] = useAtom(editorStateAtom);

  const [imageURL, setImageURL] = useState("");

  const [isLoading, setIsLoading] = useState(false);

  const setEditorBackgroundImage = async () => {
    setIsLoading(true);

    const imageObjectURL = (await getImageObjectFromURL(imageURL)) as string;

    if (imageObjectURL) {
      setEditorState({
        backgroundSetting: {
          backgroundType: "image",
          imageUrl: imageURL,
          aiGenImageUrl: "",
          gradientClassName: "",
        },
      });
    }

    setIsLoading(false);
  };

  const removeImageBackground = () => {
    setImageURL("");

    setEditorState({
      backgroundSetting: {
        backgroundType: "image",
        imageUrl: "",
      },
    });
  };
  return (
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
      {editorState?.backgroundSetting.imageUrl && (
        <div
          className="relative mt-2 block h-[100px] w-[100px] rounded-lg"
          style={{
            backgroundImage: `url(${imageURL})`,
            backgroundSize: "cover",
          }}
        >
          <span className="cursor-pointer" onClick={removeImageBackground}>
            <IconX className="absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-white shadow-md" />
          </span>
        </div>
      )}
    </div>
  );
};

export default ImageFromURLComponent;
