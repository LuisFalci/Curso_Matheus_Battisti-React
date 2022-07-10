import { useLocation } from "react-router-dom";
import { useMemo } from "react";

export function useQuery() {
  const { search } = useLocation();

//   busca o parâmetro da url
  return useMemo(() => new URLSearchParams(search), [search]);
}