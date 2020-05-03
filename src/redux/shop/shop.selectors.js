import {createSelector} from "reselect";

const COLLECTION_ID_MAP = {
    makeup: 1,
    bestsallers: 2,
    skincare: 3,
    womens: 4,
    mens: 5
}


const selectShop = state => state.shop;
export const selectCollections = createSelector(
    [selectShop],
    shop => shop.collections
);
export const selectCollection = collectionUrlParam =>
    createSelector(
        [selectCollections],
        collections => collections.find(collection => collection.id === COLLECTION_ID_MAP[collectionUrlParam]
        )
    );
