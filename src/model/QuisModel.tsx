import AsyncStorage from "@react-native-async-storage/async-storage";
import { CategoryQuestionProps } from "../state/actions";

export interface PointsProps {
  category: string;
  score: number | undefined;
  date: string | undefined;
  numberOfQuestiion: number | undefined;
}

export interface LoginProps {
  fullname: string;
  username: string;
  address: string;
  password: string;
}

const createAccount = async (data: LoginProps) => {
  if (data.fullname === "") data.fullname = "user1";
  if (data.username === "") data.username = "username1";
  if (data.address === "") data.address = "unknown";
  var jsonPars = JSON.stringify(data);
  await AsyncStorage.setItem("@account", jsonPars);
};

const checkAccoutStorage = async () => {
  const logindata: string | null = await AsyncStorage.getItem("@account");
  return logindata;
};

const checkTokenLogin = async () => {
  const logindata: string | null = await AsyncStorage.getItem("@token");
  return logindata;
};

const updateProfileCollection = async (data: LoginProps) => {
  try {
    var jsonPars = JSON.stringify(data);
    await AsyncStorage.setItem("@account", jsonPars);
  } catch (error) {}
};

const getProfileCollection = async () => {
  const check = await checkAccoutStorage();
  if (check !== null) {
    const profile = JSON.parse(check as string);
    return profile;
  } else throw new Error("no data yet");
};

const checkScoresCollection = async () => {
  const points: string | null = await AsyncStorage.getItem("@points");
  return points;
};

const updateScoreCollection = async (points: PointsProps[]) => {
  try {
    var jsonPars = JSON.stringify(points);
    await AsyncStorage.setItem("@points", jsonPars);
  } catch (error) {}
};

const getPointsCollection = async () => {
  const check = await checkScoresCollection();
  if (check !== null) {
    const points = JSON.parse(check as string);
    return points;
  } else throw new Error("no data yet");
};

const CategoryQuestionItem: CategoryQuestionProps[] = [
  {
    title: "Music",
    param: "music",
    icon: "music",
  },
  {
    title: "Sport and Leisure",
    param: "sport_and_leisure",
    icon: "baseball-ball",
  },
  {
    title: "Film and TV",
    param: "film_and_tv",
    icon: "film",
  },
  {
    title: "Arts and Literature",
    param: "arts_and_literature",
    icon: "person-booth",
  },
  {
    title: "History",
    param: "history",
    icon: "history",
  },
  {
    title: "Society and Culture",
    param: "society_and_culture",
    icon: "chalkboard-teacher",
  },
  {
    title: "Science",
    param: "science",
    icon: "graduation-cap",
  },
  {
    title: "Geography",
    param: "geography",
    icon: "digital-tachograph",
  },
  {
    title: "Food and Drink",
    param: "food_and_drink",
    icon: "user-secret",
  },
  {
    title: "General Knowledge",
    param: "general_knowledge",
    icon: "laptop-code",
  },
];

export {
  getProfileCollection,
  updateProfileCollection,
  checkAccoutStorage,
  createAccount,
  CategoryQuestionItem,
  checkScoresCollection,
  updateScoreCollection,
  getPointsCollection,
  checkTokenLogin,
};
