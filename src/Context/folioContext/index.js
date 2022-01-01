import React, { useContext, createContext } from "react";

const PortfolioContext = createContext();

const PortCtxPro = ({ children }) => {
     //  const [currentTheme, setCurrentTheme] = React.useState("light");
     return <PortfolioContext.Provider>{children}</PortfolioContext.Provider>;
};

const usePortCtx = () => {
     const ctx = useContext(PortfolioContext);

     if (ctx === undefined) throw new Error("context should be used within components");
     return ctx;
};

export { PortCtxPro as default, usePortCtx };
