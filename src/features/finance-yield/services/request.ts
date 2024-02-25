import { getApi } from "@/lib/fetch";
type APIRoutes = "selic" | "cdi" | "gov-saving";

export function getCdi() {
  return getApi<{}, APIRoutes>("cdi");
}
