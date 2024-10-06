import { PropsWithChildren } from "react";

import { ClerkProvider } from "@clerk/nextjs";
import { NextUIProvider } from "@nextui-org/react";

const Providers = ({ children }: PropsWithChildren) => {
  return (
    <ClerkProvider>
      <NextUIProvider>{children}</NextUIProvider>
    </ClerkProvider>
  );
};

export default Providers;
