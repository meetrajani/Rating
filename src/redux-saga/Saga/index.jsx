import { all } from "redux-saga/effects"
import { deleterootProducetsaga, postrootProducetsaga, rootProducetsaga} from "./root/rootProducet"

export function* rootProducet () {
    yield all ([rootProducetsaga(),postrootProducetsaga(),deleterootProducetsaga()])
}