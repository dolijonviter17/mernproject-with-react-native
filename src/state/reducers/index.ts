import { combineReducers } from "redux";
import quizReducers from "./quizReducers";

const reducers = combineReducers({
  quiz: quizReducers,
});

export default reducers;
export type RootState = ReturnType<typeof reducers>;
