import { serverConfig } from "../../serverConfig";

type RequestHeaders = {
  "content-type": string;
};
type RequestBody = {
  [key: string]: string;
};
export const apiClient = async (
  endpoint: string,
  {
    body,
    ...opts
  }: {
    body?: RequestBody;
    headers?: Partial<RequestHeaders>;
    credentials?: "include" | "omit" | "same-origin";
  } = {}
) => {
  const headers: RequestHeaders = {
    "content-type": "application/json",
  };
  const config: RequestInit = {
    method: body !== undefined ? "POST" : "GET",
    ...opts,
    headers: new Headers({
      ...headers,
      ...opts.headers,
    }),
  };
  if (body) {
    config.body = JSON.stringify(body);
  }
  const result = await window.fetch(
    `${serverConfig.SERVER_URL}:${serverConfig.SERVER_PORT}/${endpoint}`,
    config
  );
  const data = await result.json();
  if (result.ok) {
    console.log({ result, data });
    return data;
  }
  return Promise.reject(data);
};
