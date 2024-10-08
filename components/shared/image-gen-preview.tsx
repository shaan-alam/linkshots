"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

import { Button } from "@nextui-org/react";
import { IconX } from "@tabler/icons-react";
import { motion } from "framer-motion";
import { useAtom } from "jotai";

import { editorStateAtom } from "@/store";

type ImageGenerationPreviewProps = {
  props: {
    imageURL?: string;
    prompt: string;
  };
  resetData: () => void;
  isGenerating: boolean;
};

const ImageGenerationPreview = ({
  props,
  resetData,
  isGenerating,
}: ImageGenerationPreviewProps) => {
  const [, setShot] = useAtom(editorStateAtom);

  const [isImageLoading, setImageLoading] = useState(true);

  useEffect(() => {
    const fecthImage = async () => {
      await fetch(props.imageURL as string);
      setImageLoading(false);
    };

    fecthImage();
  }, [props.imageURL]);

  const setImageBackgroundd = () => {
    setShot({
      backgroundSetting: {
        backgroundType: "image",
        gradientClassName: "",
        imageUrl: "",
        aiGenImageUrl: props.imageURL,
        prompt: props.prompt,
      },
    });
  };

  const resetBackground = () => {
    setShot({
      backgroundSetting: {
        backgroundType: "image",
        aiGenImageUrl: "",
      },
    });

    resetData();
  };

  return props.imageURL ? (
    <>
      {!isGenerating && (
        <>
          {!isImageLoading && (
            <motion.div
              initial={{ opacity: 0, filter: "blur(10px)" }}
              animate={{ opacity: 1, filter: "blur(0px)" }}
              transition={{ duration: 1 }}
            >
              <Image
                src={props.imageURL}
                height={300}
                width={300}
                alt="Generated Image"
                className="mb-1 mt-2 rounded-lg"
              />
            </motion.div>
          )}
          <motion.div
            className="flex space-x-1"
            initial={{ opacity: 0, filter: "blur(10px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 0.3 }}
          >
            <Button
              onClick={setImageBackgroundd}
              className="mt-2 h-7 rounded-md bg-default-200 px-3 py-1 text-default-600"
              color="default"
              disableRipple
            >
              Use Image
            </Button>
            <Button
              className="mt-2 h-7 rounded-md bg-default-200 px-3 py-1 text-default-600"
              color="default"
              disableRipple
              onClick={resetBackground}
            >
              <IconX className="h-4 w-4" />
              Remove
            </Button>
          </motion.div>
        </>
      )}
      <div />
    </>
  ) : null;
};

export default ImageGenerationPreview;
