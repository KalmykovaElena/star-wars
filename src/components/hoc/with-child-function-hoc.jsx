import React from "react";

const WithChildFunctionHoc = (Wrapper, fn) => {
    return (props) => {
        return (
            <Wrapper {...props}>
                {fn}
            </Wrapper>
        )
    }
}
export {WithChildFunctionHoc}
