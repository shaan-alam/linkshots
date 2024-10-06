import { useInfiniteQuery, useMutation, useQuery } from "@tanstack/react-query";
import { setupServerActionHooks } from "zsa-react-query";

const {
  useServerActionInfiniteQuery,
  useServerActionMutation,
  useServerActionQuery,
} = setupServerActionHooks({
  hooks: {
    useQuery,
    useMutation,
    useInfiniteQuery,
  },
});

export {
  useServerActionInfiniteQuery,
  useServerActionMutation,
  useServerActionQuery,
};
