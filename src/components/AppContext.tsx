import { createContext, useEffect, useState } from "react";
import { getAllLocalStorage } from "../services/storage";

interface IAppContext {
  user: UserData | undefined;
  isLoggedIn: boolean;
  setIsLoggedIn: (isLoggedIn: boolean) => void;
  setUser: (user: UserData) => void;
}

interface UserData {
  email: string;
  password: string;
  name: string;
  balance: number;
  id: string;
}

export const AppContext = createContext({} as IAppContext);

export const AppContextProvider = ({ children }: any) => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [user, setUser] = useState<UserData>();

  const storage = getAllLocalStorage();

  useEffect(() => {
    if (storage) {
      const { login } = JSON.parse(storage);
      setIsLoggedIn(login);
    }
  }, [storage]);

  return (
    <AppContext.Provider value={{ user, isLoggedIn, setIsLoggedIn, setUser }}>
      {children}
    </AppContext.Provider>
  );
};
