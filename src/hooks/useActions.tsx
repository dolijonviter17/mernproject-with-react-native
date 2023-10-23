import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { quizCreators } from "../state";
export const useActions = () => {
  const dispatch = useDispatch();

  return bindActionCreators(
    {
      ...quizCreators,
    },
    dispatch
  );
};
