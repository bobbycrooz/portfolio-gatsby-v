import React, { useContext, createContext } from "react";

const UserContext = createContext();

const UserCtxPro = ({ children }) => {
     const [currentTheme, setCurrentTheme] = React.useState("light");
     const userState = {
          name: "bob",
          current: currentTheme,
          set: setCurrentTheme,
     };

     return <UserContext.Provider value={userState}>{children}</UserContext.Provider>;
};

const useUserCtx = () => {
     const ctx = useContext(UserContext);

     if (ctx === undefined) throw new Error("context should be used within components");
     return ctx;
};

export { UserCtxPro as default, UserContext, useUserCtx };
