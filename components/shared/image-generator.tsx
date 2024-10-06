"use client";

import Image from "next/image";

import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Textarea } from "@nextui-org/react";
import { useAtom } from "jotai";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { imageGenAction } from "@/actions/image-gen.action";
import { useServerActionMutation } from "@/hooks/server-action-hooks";
import { editorAtom } from "@/store";
import { EditorBackGroundEnum, EditorProps } from "@/types";

const promptSchema = z.object({
  prompt: z
    .string()
    .min(10, { message: "Prompt must be at least 10 characters long" })
    .nonempty({ message: "Prompt cannot be empty" }),
});

type PromptFormValues = z.infer<typeof promptSchema>;

const ImageGenerator = () => {
  const [editor, setEditor] = useAtom(editorAtom);

  const {
    mutate: generateImage,
    isPending: isGenerating,
    data: imageURL,
    reset: resetData,
  } = useServerActionMutation(imageGenAction);

  const {
    register,
    handleSubmit,
    reset: resetForm,
    formState: { errors },
  } = useForm<PromptFormValues>({
    resolver: zodResolver(promptSchema),
  });

  const onSubmit = (data: PromptFormValues) => {
    generateImage({
      prompt: data.prompt,
    });
  };

  const setImageBackgroundd = () => {
    const newEditor: EditorProps = {
      ...editor,
      backgroundType: EditorBackGroundEnum.image,
      imageUrl: imageURL as string,
    };

    setEditor(newEditor);
  };

  const resetGenerator = () => {
    resetData();
    resetForm();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1 className="mb-2 text-sm text-default-600">Generate An Image</h1>
      {errors.prompt && (
        <p className="text-sm text-danger-500">{errors.prompt.message}</p>
      )}
      <Textarea
        label="Your Prompt"
        placeholder="A serene landscape with mountains and a lake..."
        className="max-w-xs"
        {...register("prompt")}
      />
      <Button
        fullWidth
        className="mt-2"
        color="primary"
        isLoading={isGenerating}
        disableRipple
        type="submit"
      >
        Generate
      </Button>
      {imageURL && (
        <>
          <Image
            src={imageURL}
            height={300}
            width={300}
            alt="Generated Image"
            className="mb-1 mt-2 rounded-lg"
          />
          <Button
            onClick={setImageBackgroundd}
            className="mt-2 h-7 rounded-md bg-default-200 px-3 py-1 text-default-600"
            color="default"
            disableRipple
          >
            Use Image
          </Button>
          <Button
            className="ml-1 mt-2 h-7 rounded-md bg-danger-200 px-3 py-1 text-danger-600"
            color="danger"
            disableRipple
            onClick={resetGenerator}
          >
            Discard
          </Button>
        </>
      )}
    </form>
  );
};

export default ImageGenerator;
