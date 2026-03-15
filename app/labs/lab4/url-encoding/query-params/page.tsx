import { Suspense } from "react";
import QueryCalculatorClient from "./QueryCalculatorClient";

export default function QueryCalculatorPage() {
  return (
    <Suspense fallback={<div style={{ padding: 40 }}>Loading...</div>}>
      <QueryCalculatorClient />
    </Suspense>
  );
}
