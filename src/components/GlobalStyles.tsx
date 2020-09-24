import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *, *:before, *:after { 
        box-sizing: inherit;
        margin: 0;
        padding: 0;
    }

    html, body { 
        font-size: 8px;
    }
`;
