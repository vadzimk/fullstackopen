import React from "react";

export const InputField = (props) => {
    return <div>
        find countries <input value={props.value} onChange={props.onChange}/>
    </div>;
}

export default InputField