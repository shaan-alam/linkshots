import { currentUser } from "@clerk/nextjs/server";
import { ZSAError, createServerActionProcedure } from "zsa";

export const authProcedure = createServerActionProcedure().handler(async () => {
  try {
    const user = await currentUser();

    return {
      user: {
        userId: user?.id,
      },
    };
  } catch (error) {
    throw new ZSAError("NOT_AUTHORIZED", error);
  }
});
