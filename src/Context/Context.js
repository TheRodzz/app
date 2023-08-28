import React, { useState } from "react";
 
export const Context = React.createContext();
export const ContextProvider = ({ children }) => {
    const [teams, setTeams] = useState(0);
    const [toChoose, setToChoose] = useState(0);
    const [chosenTeams, setChosenTeams] = useState([]);
    
    return (
        <Context.Provider value={{ teams, setTeams, toChoose,setToChoose,chosenTeams, setChosenTeams }}>
            {children}
        </Context.Provider>
    );
};