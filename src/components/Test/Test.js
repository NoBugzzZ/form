import React from "react";
import { TestInput } from "./TestInput";
import { TestInput2 } from "./TestInput2";
import { TestInput3 } from "./TestInput3";

export default class Test extends React.Component{
    
    render(){
        return(
            <>
                <TestInput></TestInput>
                <TestInput2></TestInput2>
                <TestInput3></TestInput3>
            </>
        )
    }
}