"use client";

import { getQueryClient } from "@/shared/libs/query-client";
import { QueryClientProvider } from "@tanstack/react-query";
import { PropsWithChildren } from "react";

export default function TanstackQueryProvider({ children }: PropsWithChildren) {
  const queryClient = getQueryClient();

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
