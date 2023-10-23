import axios from "axios";
import { Dispatch } from "react";
import { Action, CategoryQuestionProps, Quiz } from "../actions";
import { ActionType } from "../action-types";
import { shuffeArray, updateAnswer } from "../../utils/Utilities";

export const fetchQuizQuestions = () => {
  return async (dispatch: Dispatch<Action>) => {
    try {
      dispatch({
        type: ActionType.FETCH_QUESTIONS,
      });
      const data = await axios.get(
        "https://the-trivia-api.com/api/questions?limit=10",
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const mapdata = data.data.map((questions: Quiz) => ({
        ...questions,
        answers: shuffeArray([
          ...questions.incorrectAnswers,
          questions.correctAnswer,
        ]),
      }));
      dispatch({
        type: ActionType.FETCH_QUESTIONS_SUCCESS,
        payload: mapdata,
      });
    } catch (error: any) {
      dispatch({
        type: ActionType.FETCH_QUESTIONS_ERROR,
        payload: error.message,
      });
    }
  };
};

export const fetchQuestionByCategory = (category: CategoryQuestionProps) => {
  return async (dispatch: Dispatch<Action>) => {
    try {
      dispatch({
        type: ActionType.FETCH_QUESTIONS,
      });
      var amount = category.amount === undefined ? 3 : category.amount;
      var difficulty =
        category.difficulty === undefined ? "easy" : category.difficulty;
      const data = await axios.get(
        `https://the-trivia-api.com/api/questions?category=${category.param}&limit=${amount}&type=${difficulty}`,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const mapdata = data.data.map((questions: Quiz) => ({
        ...questions,
        answers: shuffeArray([
          ...questions.incorrectAnswers,
          questions.correctAnswer,
        ]),
      }));
      dispatch({
        type: ActionType.FETCH_QUESTIONS_SUCCESS,
        payload: mapdata,
      });
    } catch (error: any) {
      dispatch({
        type: ActionType.FETCH_QUESTIONS_ERROR,
        payload: error.message,
      });
    }
  };
};

export const selectedAnswerQuestion = (
  arr: Quiz[],
  id: string,
  answerSelected: string
) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.FETCH_QUESTIONS,
    });
    const fillQuestion: Quiz[] = arr.filter((e: Quiz) => e.id === id);
    const checkAnswer = fillQuestion.map((item) => {
      return {
        ...item,
        status: item.correctAnswer === answerSelected ? "correct" : "uncorrect",
        answerSelected: answerSelected,
      };
    });
    const newArr = updateAnswer(arr, id, checkAnswer[0]);
    dispatch({
      type: ActionType.FETCH_QUESTIONS_UPDATE,
      payload: newArr,
    });
  };
};

export const fetchQuestionReport = (
  category: CategoryQuestionProps,
  questions: Quiz[]
) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.FETCH_QUESTIONS,
    });
    dispatch({
      type: ActionType.FETCH_QUESTIONS_REPORT,
      category: category,
      questions: questions,
    });
  };
};

// export const fetchQuestionByCategory = (item: CategoryQuestionProps) => {
//   return "()";
// };
