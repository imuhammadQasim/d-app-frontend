import Process from "@/components/Process";
import React, {createContext, useState} from "react";

export const SubmitContext = createContext();

export const SubmitContextProvider = ({children}) => {
    const [process, setProcess] = useState(false);
    const [data, setData] = useState({});
    function handleData(e) {
        setProcess(true);
        setData(e);
    }
    return (
        <SubmitContext.Provider value={{handleData, setProcess}}>
            {process == false && <>{children}</>}
            {process && <Process data={data} />}
        </SubmitContext.Provider>
    );
};
