/** @jsx jsx */
import { useEffect, useState, useRef } from "react";
import { jsx, css } from "@emotion/react";

import { rand } from "./utils";

function Rare() {
    const [[frequency, x, y], setData] = useState(genData());
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        ref.current?.animate({ opacity: [0, 0, 1, 0, 0] }, frequency);

        const handle = setTimeout(() => {
            setData(genData());
        }, frequency);

        return () => {
            clearTimeout(handle);
        }
    }, [x]);

    function genData() {
        return [rand(14000, 18000), rand(20, 80), rand(10, 90)];
    }

    function display() {
        return <div
            ref={ref}
            css={css(`
                font-size: 8vw;
                font-weight: bold;
                font-family: "Noto Serif";
                color: transparent;
                opacity: 0;
                text-align: center;
                position: absolute;
                top: ${x}vw;
                left: ${y}%;
                user-select: none;
                cursor: default;

                background-clip: text;
                background-image: linear-gradient(to right, #33ffcc, #ffff33, #66ff33, #00ccff);
                background-size: 1200%;
                animation: gaming 3s linear infinite;

                @keyframes gaming {
                    100% { background-position-x: 200%; }
                }
            `)}>
            キッつぅ♡
        </div>;
    }

    return display();
}

export default Rare;
