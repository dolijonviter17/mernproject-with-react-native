import AsyncStorage from "@react-native-async-storage/async-storage";

export interface NoteProps {
  id: number;
  category: string;
  title: string;
  summary: string;
  date: string;
  theme: string;
  archive: boolean;
}

const data: NoteProps[] = [
  {
    id: 2,
    category: "Learning",
    title: "Javascript",
    summary:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis eum placeat voluptatibus commodi amet repellat earum, officia quasi ad inventore sit consequatur culpa quas ipsum tempore dolore assumenda maiores deleniti?",
    date: "29 July, 2023",
    theme: "#FF0000",
    archive: true,
  },
];

const checkNotesCollection = async () => {
  try {
    const checkNote: string | null = await AsyncStorage.getItem("@notes");
    return checkNote;
  } catch (error) {}
};

const saveNotesCollection = async (notes: NoteProps[]) => {
  try {
    var jsonStrParse = JSON.stringify(notes);
    await AsyncStorage.setItem("@notes", jsonStrParse);
  } catch (error) {}
};

const addNoteCollection = async () => {
  try {
    const jsonValue = JSON.stringify(data);
    await AsyncStorage.setItem("@notes", jsonValue);
  } catch (error) {}
};
const viewNotesCollection = async () => {
  try {
    const checkStorage = await checkNotesCollection();
    var notes = JSON.parse(checkStorage as string);
    return notes;
  } catch (error) {}
};

const viewNotesArchiveCollection = async () => {
  try {
    const checkStorage = await checkNotesCollection();
    var notes = JSON.parse(checkStorage as string);
    var filterNote: NoteProps[] = notes.filter(
      (e: NoteProps) => e.archive === true
    );
    return filterNote;
  } catch (error) {}
};

export {
  checkNotesCollection,
  addNoteCollection,
  saveNotesCollection,
  viewNotesCollection,
  viewNotesArchiveCollection,
};
