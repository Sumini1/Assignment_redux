import React from "react";

const ErrorComponent = ({message}) =>{
    return (
        <div className="text-red-700">
            <h6>Error : {message}</h6>
        </div>
    )
}
export default ErrorComponent;