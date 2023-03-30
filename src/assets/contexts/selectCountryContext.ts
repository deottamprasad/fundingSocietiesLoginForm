import { createContext, Dispatch, SetStateAction } from "react";

interface CountryContextType {
    selectCountry: boolean;
    setSelectCountry: Dispatch<SetStateAction<boolean>>;
  }
  
  export const CountryContext = createContext({} as CountryContextType);