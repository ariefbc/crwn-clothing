import {
  takeLatest,
  // takeEvery,
  call,
  put,
  all,
} from "redux-saga/effects";

import {
  firestore,
  convertCollectionsSnapshotToMap,
} from "../../firebase/firebase.utils";

import { fetchCollectionSuccess, fetchCollectionFailure } from "./shop.actions";

import ShopActionTypes from "./shop.types";

export function* fetchCollectionsAsync() {
  try {
    const collectionRef = firestore.collection("collections");
    const snapshot = yield collectionRef.get();
    const colletionsMap = yield call(convertCollectionsSnapshotToMap, snapshot);
    yield put(fetchCollectionSuccess(colletionsMap));
  } catch (error) {
    yield put(fetchCollectionFailure(error.message));
  }
}

export function* fetchCollectionsStart() {
  yield takeLatest(
    ShopActionTypes.FETCH_COLLECTIONS_START,
    fetchCollectionsAsync
  );
}

export function* shopSagas() {
  yield all([call(fetchCollectionsStart)]);
}
