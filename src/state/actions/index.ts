import { RootStackParams } from "../../stack/RootStackScreen";
import { ActionType } from "../action-types";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
// ========================================
export type QuestionsScreenProps = NativeStackScreenProps<
  RootStackParams,
  "Questions"
>;

export interface CategoryQuestionProps {
  title: string;
  param: string;
  icon: string;
  difficulty?: string;
  amount?: number;
  scoreBoard?: number;
  date?: string;
}

export interface CategoryItemProps {
  category: CategoryQuestionProps;
  handleSelectCategory: (category: CategoryQuestionProps) => void;
}
export interface ModalProps {
  isVisible: boolean;
  onBackdropPress: () => void | undefined;
  category: CategoryQuestionProps;
  handleSelectQuestions: (data: CategoryQuestionProps) => void;
}

export interface ScoreBoardProps {
  isVisible: boolean;
  onBackdropPress: () => void | undefined;
  category: CategoryQuestionProps;
  scorBoard: number;
  handleReport: () => void;
  navigation?: QuestionsScreenProps;
}

// union
export type QuizAppTypes =
  | CategoryQuestionProps
  | ModalProps
  | CategoryItemProps;

export type Difficulty = "easy" | "medium" | "hard";

export interface Quiz {
  id: string;
  category: string;
  correctAnswer: string;
  question: string;
  difficulty: Difficulty;
  incorrectAnswers: string[];
  answers: string[];
  status?: string;
  answerSelected?: string;
}

// ========================================

export type QuestionState = Quiz & { answers: string[] };

export interface FetchQuestionAction {
  type: ActionType.FETCH_QUESTIONS;
  // payload : any
}
export interface FetchQuestionSuccessAction {
  type: ActionType.FETCH_QUESTIONS_SUCCESS;
  payload: Quiz[];
}

export interface FetchQuestionErrorAction {
  type: ActionType.FETCH_QUESTIONS_ERROR;
  payload: string;
}

export interface FetchQuestionUpdateAction {
  type: ActionType.FETCH_QUESTIONS_UPDATE;
  payload: Quiz[];
}

export interface FetchQuestionReport {
  type: ActionType.FETCH_QUESTIONS_REPORT;
  category: any;
  questions: Quiz[];
}

export type Action =
  // neww
  | FetchQuestionAction
  | FetchQuestionSuccessAction
  | FetchQuestionErrorAction
  | FetchQuestionUpdateAction
  | FetchQuestionReport;
