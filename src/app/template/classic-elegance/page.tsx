import React, { Suspense } from "react";
import { ClassicEleganceTemplate } from "./_components/client-page";

export default function Page() {
  return (
    <Suspense>
      <ClassicEleganceTemplate />
    </Suspense>
  );
}
