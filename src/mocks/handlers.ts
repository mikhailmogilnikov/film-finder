import { delay, http, HttpResponse } from "msw";

import { API_ENDPOINTS } from "~/shared/api";

export const handlers = [
  http.all("/api/*", async () => {
    await delay();
  }),
  http.get(API_ENDPOINTS.MOVIES, () => {
    return HttpResponse.json({
      hello: "world",
    });
  }),
];
