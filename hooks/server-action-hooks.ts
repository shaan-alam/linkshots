import { useInfiniteQuery, useMutation, useQuery } from "@tanstack/react-query";
import {
  createServerActionsKeyFactory,
  setupServerActionHooks,
} from "zsa-react-query";

export const QueryKeyFactory = createServerActionsKeyFactory({
  generateImageGenPrompt: () => ["generate-image-gen-prompt"],
});

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
  queryKeyFactory: QueryKeyFactory,
});

export {
  useServerActionInfiniteQuery,
  useServerActionMutation,
  useServerActionQuery,
};
