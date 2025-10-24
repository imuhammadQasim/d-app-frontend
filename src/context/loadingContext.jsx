import React, {useState, createContext, useEffect} from "react";

const context = {};

export const LoadingContext = createContext(context);

export const LoadingContextProvider = ({children}) => {
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(false  );
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1000);
        // Cancel the timer while unmounting
        return () => clearTimeout(timer);
    }, []);

    const contextValues = {
        loading,
        setLoading,
    };

    return <LoadingContext.Provider value={contextValues}>{children}</LoadingContext.Provider>;
};
