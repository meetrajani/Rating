import { takeLatest } from "redux-saga/effects";
import { DELETE_PRODUCET_PROGRESS, GET_PRODUCET_PROGRESS, POST_PRODUCET_PROGRESS} from "../../Producet/Action/Action";
import { manageProducet, managedeleteProducet, managepostProducet } from "../manageProducet/manageProducet";

export function* rootProducetsaga () {
    yield takeLatest (GET_PRODUCET_PROGRESS,manageProducet)
}

export function* postrootProducetsaga () {
    yield takeLatest (POST_PRODUCET_PROGRESS,managepostProducet)
}

export function* deleterootProducetsaga () {
    yield takeLatest (DELETE_PRODUCET_PROGRESS,managedeleteProducet)
}