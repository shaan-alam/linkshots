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
