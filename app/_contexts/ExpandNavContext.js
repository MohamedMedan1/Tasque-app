"use client"
import { createContext, useContext, useEffect, useMemo, useState } from "react"

const ExpandNavContext = createContext();
function ExpandNavProvider({children}){
    const [isExpanded, setIsExpanded] = useState(true);
    
    useEffect(() => {
        if(typeof window !== "undefined"){
            const stored = window?.localStorage.getItem("isExpanded");
            if (stored !== null) setIsExpanded(JSON.parse(stored));
        }
    }, [])

    useEffect(() => {
        if (typeof window !== "undefined") {
            if (isExpanded) {
                localStorage.removeItem("isExpanded");
            } else {
                localStorage.setItem("isExpanded", JSON.stringify(isExpanded));
            }
        } 
    }, [isExpanded])
    
    const expandNavValue = useMemo(() => {
        return {isExpanded,setIsExpanded}
    },[isExpanded])
    
    return (
        <ExpandNavContext.Provider value={expandNavValue}>
            {children}
        </ExpandNavContext.Provider>
    );
}

function useExpandedNav() {
    const context = useContext(ExpandNavContext);
    
    if (!context) throw new Error("useExpandedNav must be used within an ExpandNavProvider");
    
    return context;
}

export { ExpandNavProvider, useExpandedNav };

