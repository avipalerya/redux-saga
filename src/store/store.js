import { applyMiddleware, combineReducers, createStore } from "redux";
import createSagaMiddleware from "@redux-saga/core";
import agereducer from "../reducers/agereducer";
import { watchAgeUp } from "../saga/saga";

const SagaMiddleware = createSagaMiddleware();
const rootReducer = combineReducers(agereducer);
const store = createStore(rootReducer, applyMiddleware(SagaMiddleware));
SagaMiddleware.run(watchAgeUp);
export default store;
