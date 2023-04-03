import React, { useState, createContext } from "react";

export const ShowPropertiesContext = createContext();

const ElementPropertiesProvider = ({ children }) => {
  const [isShow, setIsShow] = useState(false);

  const changed = () =>{
    setIsShow(!isShow)
  }

  return (
    <ShowPropertiesContext.Provider value={{ isShow, changed }}>
      {children}
    </ShowPropertiesContext.Provider>
  );
};

export default ElementPropertiesProvider;