import React, { Suspense } from "react";
import { RusticRomanceTemplate } from "./_components/client-page";

export default function Page() {
  return (
    <Suspense>
      <RusticRomanceTemplate />
    </Suspense>
  );
}
