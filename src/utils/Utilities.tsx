import moment from "moment";
import { Quiz } from "../state/actions";

const getDateTime = (date: Date): string => {
  var checkedDate = moment(date, "YYYY/MM/DD");
  var month = checkedDate.format("MMMM");
  var day = checkedDate.format("D");
  var year = checkedDate.format("YYYY");
  return day + " " + month + ", " + year;
};

const generateId = (): number => {
  var date = new Date().getDate();
  var month = new Date().getMonth() + 1;
  var year = new Date().getFullYear();
  var h = new Date().getHours();
  var i = new Date().getMinutes();
  var s = new Date().getSeconds();
  var noteId = date + "" + "" + month + "" + year + "" + h + "" + i + "" + s;
  return parseInt(noteId);
};

const generateDateTime = (): string => {
  var date = new Date().getDate();
  var month = new Date().getMonth() + 1;
  var year = new Date().getFullYear();
  var format = year + "-" + month + "-" + date;
  return format;
};

const shuffeArray = (array: any[]) =>
  [...array].sort(() => Math.random() - 0.5);

const generateAbjad = (index: number): string => {
  var abjad = ["A. ", "B. ", "C. ", "D. ", "E. ", "F. ", "G. ", "H. "];
  return abjad[index];
};

const getRandomColor = (): string => {
  const digits = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
  ];
  const colorRandom = new Array(6)
    .fill("")
    .map(() => digits[Math.floor(Math.random() * digits.length)])
    .join("");
  return `#${colorRandom}`;
};

const updateAnswer = (arr: any[], id: string, updateAnswer: Quiz) => {
  return arr.map((item) =>
    item.id === id
      ? {
          ...item,
          ...updateAnswer,
        }
      : item
  );
};

const getTodayDateTime = (): string => {
  const date = new Date();
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();

  return `${day}-${month}-${year}`;
};

export {
  generateDateTime,
  getDateTime,
  generateId,
  shuffeArray,
  generateAbjad,
  getRandomColor,
  updateAnswer,
  getTodayDateTime,
};
