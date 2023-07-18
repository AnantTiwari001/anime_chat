import { createContext, useState } from "react";

const SignContext= createContext();

const Signing= (props)=>{
    const [accountType, setAccountType]= useState('old');
    const handleSetType= (newValue)=>{
        setAccountType(newValue)
    }

    return(
        <SignContext.Provider value={{
            account:{value: accountType , setFunc:handleSetType}
        }} >
            {props.children}
        </SignContext.Provider>
    )
}

export default Signing;
export {SignContext};