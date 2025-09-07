"use client";

import { useEffect } from "react";

export function Providers({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    if (process.env.NEXT_PUBLIC_USE_MOCK === "true") {
      import("../mocks/browser").then(({ worker }) => {
        worker.start();
      });
    }
  }, []);

  return <>{children}</>;
}

export default Providers;
