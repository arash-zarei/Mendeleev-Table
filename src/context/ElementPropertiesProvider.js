import React, { useState, createContext } from 'react';

export const ShowPropertiesContext = createContext();

const ElementPropertiesProvider = ({ childer }) => {

    const [isSow, setIsShow] = useState(false);

    const changed = () => {
        setIsShow(!isSow)
    }

    return (
        <ShowPropertiesContext.Provider value={{ isSow, changed }}>
            {childer}
        </ShowPropertiesContext.Provider>
    );
};

export default ElementPropertiesProvider;