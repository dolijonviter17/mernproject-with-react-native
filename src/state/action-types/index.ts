export enum ActionType {
  // new
  FETCH_QUESTIONS = "fetch_questions",
  FETCH_QUESTIONS_SUCCESS = "fetch_questions_success",
  FETCH_QUESTIONS_ERROR = "fetch_questions_error",
  FETCH_QUESTIONS_UPDATE = "fetch_questions_update",
  FETCH_QUESTIONS_REPORT = "fetch_questions_report",
}

const profile = ({ age, name }: { age: number; name: string }): string => {
  return "hellow brother";
};
