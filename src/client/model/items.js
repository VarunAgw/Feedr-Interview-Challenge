import useSWRWithFetcher from "../lib/useSWRWithFetcher";

export function useItems(keyword = "") {
    const result = useSWRWithFetcher('items', {search: keyword});
    return {items: result.data ? result.data.items : undefined};
}