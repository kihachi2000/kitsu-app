/** @jsx jsx */
import { jsx, css } from "@emotion/react";

import "./reset.css";

function App() {
    function rand(min: number, max: number) {
        return Math.random() * (max - min) + min;
    }

    function gen() {
        return [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
            .map((_) => [rand(4, 8), rand(20, 80), rand(10, 90)])
            .map(([frequency, x, y]) => <div css={css(`
                font-size: 36px;
                color: #d6f414;
                text-align: center;
                position: absolute;
                top: ${y}%;
                left: ${x}%;
                animation: blink ${frequency}s ease-out infinite alternate;

                @keyframes blink {
                    0% { opacity: 0; }
                    80% { opacity: 0; }
                    100% { opacity: 1; }
                }
                `)}>
                キッつ...
            </div>)
    }

    function gen_rainbow() {
        return <div css={css(`
                    font-size: 44px;
                    font-weight: bold;
                    font-family: "Noto Serif";
                    color: transparent;
                    text-align: center;
                    position: absolute;
                    top: ${rand(10, 90)}%;
                    left: ${rand(20, 80)}%;

                    background-clip: text;
                    background-image: linear-gradient(to right, #33ffcc, #ffff33, #66ff33, #00ccff);
                    background-size: 1200%;
                    animation: blink2 16s ease-out infinite alternate, gaming 3s linear infinite;

                    @keyframes blink2 {
                        0% { opacity: 0; }
                        80% { opacity: 0; }
                        100% { opacity: 1; }
                    }

                    @keyframes gaming {
                        100% { background-position-x: 200%; }
                    }
            `)}>
            キッつ...
        </div>;
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
            {gen()}
            {gen_rainbow()}
        </div>
    );
}

export default App;
