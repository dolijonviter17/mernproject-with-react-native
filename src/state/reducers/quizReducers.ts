import { ActionType } from "../action-types";
import { Action, CategoryItemProps, Quiz } from "../actions";

interface RepositoriesState {
  loading: boolean;
  error: string | null;
  data?: any;
  questions?: any;
  category?: any;
}

const intialState = {
  loading: false,
  error: null,
  data: [],
  questions: [],
  category: null,
};

const reducer = (
  state: RepositoriesState = intialState,
  action: Action
): RepositoriesState => {
  switch (action.type) {
    case ActionType.FETCH_QUESTIONS:
      return { loading: true, error: null, data: [] };
    case ActionType.FETCH_QUESTIONS_SUCCESS:
      return { loading: false, error: null, data: action.payload };
    case ActionType.FETCH_QUESTIONS_UPDATE:
      return { loading: false, error: null, data: action.payload };
    case ActionType.FETCH_QUESTIONS_ERROR:
      return { loading: false, error: action.payload, data: [] };
    case ActionType.FETCH_QUESTIONS_REPORT:
      return {
        loading: false,
        error: null,
        category: action.category,
        questions: action.questions,
      };
    default:
      return state;
  }
};

export default reducer;
