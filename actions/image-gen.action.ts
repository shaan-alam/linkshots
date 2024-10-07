"use server";

import { z } from "zod";

import { authProcedure } from "./procedures";

export const imageGenAction = authProcedure
  .createServerAction()
  .input(z.object({ prompt: z.string() }))
  .handler(async ({ input }) => {
    const { prompt } = input;
    const seed = Math.floor(Math.random() * 10000000);
    const model = "mistral";

    const finalPrompt = prompt + "Return the result in 16:9 ratio";

    const url = `https://image.pollinations.ai/prompt/${encodeURIComponent(finalPrompt)}?width=1920&height=1080&seed=${seed}&model=${model}&nologo=True`;
    await fetch(url);

    return url;
  });

export const generateRandomPrompt = authProcedure
  .createServerAction()
  .input(z.object({}))
  .handler(async () => {
    const randomNumber = Math.floor(Math.random() * 10000000);
    const promptGenerationPrompt =
      "Generate a detailed and creative image prompt for an AI art generator, including vivid scene descriptions, emotions, color schemes, lighting, and specific subjects, ensuring a visually captivating and imaginative result. Do not return the markdown result. Just give me the prompt";
    const prompt = await fetch(
      `https://text.pollinations.ai/${encodeURIComponent(promptGenerationPrompt)}seed=${randomNumber}&model=mistral&system=${encodeURIComponent("You are a prompt engineer")}`
    );
    const result = await prompt.text();

    return result;
  });
