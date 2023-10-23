import "@react-navigation/native";

declare module "@react-navigation/native" {
  export type ExtendedTheme = {
    dark: boolean;
    colors: {
      primary: string;
      background: string;
      card: string;
      text: string;
      border: string;
      notification: string;
      placeholder: string;
      descriptionText: string;
      buttonBackground: string;
      income: string;
      incomeBackground: string;
      expense: string;
      expenseBackground: string;
      chevron: string;
      shadow: string;
    };
  };
  export function useTheme(): ExtendedTheme;
}
