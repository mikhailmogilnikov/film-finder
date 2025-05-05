import "./app/css/index.css";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./app/app.tsx";
import { enableMocking } from "./mocks/enableMocking.ts";

enableMocking()
  .then(() => {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    createRoot(document.getElementById("root")!).render(
      <StrictMode>
        <App />
      </StrictMode>
    );
  })
  .catch((error: unknown) => {
    // eslint-disable-next-line no-console
    console.error(error);
  });
