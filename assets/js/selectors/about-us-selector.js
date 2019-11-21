import {createSelector} from "reselect";


// We use createSelector to create memorized selector means cache data after first call
export const getContacts = createSelector(
    [store => store.contacts],
    (contacts) => {
        return contacts;
    }
);
