"use client";

import { useState } from "react";

import { Button, Textarea } from "@nextui-org/react";
import { IconArrowsShuffle } from "@tabler/icons-react";
import { useAtom } from "jotai";
import { useServerAction } from "zsa-react";

import {
  generateRandomPrompt,
  imageGenAction,
} from "@/actions/image-gen.action";
import { useServerActionMutation } from "@/hooks/server-action-hooks";
import { editorStateAtom } from "@/store";

import ImageGenerationPreview from "./image-gen-preview";

const ImageGenerator = () => {
  const [editorState, setEditorState] = useAtom(editorStateAtom);

  const [prompt, setPrompt] = useState(
    editorState?.backgroundSetting.prompt || ""
  );

  const {
    mutate: generateImage,
    isPending: isGenerating,
    data: imageURL,
    reset: resetImage,
  } = useServerActionMutation(imageGenAction, {
    onSuccess: () => {
      setEditorState({
        backgroundSetting: {
          backgroundType: "image",
          imageUrl: "",
          prompt,
        },
      });
    },
  });

  const { execute: generatePrompt, isPending: isGeneratingPrompt } =
    useServerAction(generateRandomPrompt, {
      onSuccess: (data) => {
        setPrompt(data.data);
      },
    });

  const handleGenerateImage = () => {
    generateImage({
      prompt,
    });
  };

  return (
    <div>
      <h1 className="mb-2 text-sm text-default-600">Generate An Image</h1>
      <Textarea
        label="Your Prompt"
        placeholder="A serene landscape with mountains and a lake..."
        className="max-w-xs"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      />
      <div className="flex space-x-2">
        <Button
          fullWidth
          className="mt-2"
          color="primary"
          isLoading={isGenerating}
          disableRipple
          onClick={handleGenerateImage}
          disabled={!prompt}
        >
          Generate
        </Button>
        <Button
          fullWidth
          className="mt-2 text-default-600"
          color="default"
          onClick={() => generatePrompt({})}
          isLoading={isGeneratingPrompt}
          type="button"
          disableRipple
        >
          <IconArrowsShuffle />
          Random
        </Button>
      </div>

      <ImageGenerationPreview
        props={{ imageURL, prompt }}
        isGenerating={isGenerating}
        resetData={() => {
          resetImage();
          setPrompt("");
        }}
      />
    </div>
  );
};

export default ImageGenerator;
