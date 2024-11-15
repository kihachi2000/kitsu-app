/** @jsx jsx */
import { jsx, css } from "@emotion/react";

import "./reset.css";

import Common from "./Common";
import Rare from "./Rare";

function App() {
    function displayCommon() {
        return [0, 1, 2, 3, 4].map((id) => <Common key={id} />);
    }

    function displayRare() {
        return <Rare />;
    }

    return (
        <div css={css(`
                margin: 0;
                padding: 0;
                width: 100vw;
                height: 100vh;
                background-color: black;
                position: relative;
            `)}>
            {displayCommon()}
            {displayRare()}
        </div>
    );
}

export default App;
