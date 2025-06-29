import React, { Suspense } from "react";
import { CreateTemplatePage } from "./_components/client-page";

export default function Page() {
  return (
    <Suspense>
      <CreateTemplatePage />
    </Suspense>
  );
}
