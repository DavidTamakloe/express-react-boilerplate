import { ADD_LOADING_ENTRY, REMOVE_LOADING_ENTRY } from "./action-types";

export function addLoadingEntry(entryName) {
    return {
        type: ADD_LOADING_ENTRY,
        entryName
    };
}

export function removeLoadingEntry(entryName) {
    return {
        type: REMOVE_LOADING_ENTRY,
        entryName
    };
}
