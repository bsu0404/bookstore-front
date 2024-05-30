import { httpClient } from "./http";

export const fetchCategory = async () => {
  const response = await httpClient.get("/categories");
  return response.data;
};
