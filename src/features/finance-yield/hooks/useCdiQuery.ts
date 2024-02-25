import { useQuery, useQueryClient } from "react-query";
import { getCdi } from "@finance-yield/services/request";

export const useCdiQuery = () => {
  console.log("🚀 ~ useCdiQuery ~ useCdiQuery");
  return useQuery("post", getCdi, {
    refetchOnWindowFocus: false,
    refetchInterval: 60000,
  });
};
