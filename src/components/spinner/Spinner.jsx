import React from "react";
import {MutatingDots} from "react-loader-spinner";

export const Spinner = ({color}) => {
return (
    <MutatingDots 
    height="100"
    width="100"
    color={color}
    secondaryColor={color}
    radius='12.5'
    ariaLabel="mutating-dots-loading"
    wrapperStyle={{}}
    wrapperClass=""
    visible={true}
   />

    )
};
