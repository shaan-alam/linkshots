"use client";

import { useState } from "react";
import { PropsWithChildren } from "react";

import { ClerkProvider } from "@clerk/nextjs";
import { NextUIProvider } from "@nextui-org/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const Providers = ({ children }: PropsWithChildren) => {
  const [queryClient] = useState(new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <ClerkProvider>
        <NextUIProvider>{children}</NextUIProvider>
      </ClerkProvider>
    </QueryClientProvider>
  );
};

export default Providers;
