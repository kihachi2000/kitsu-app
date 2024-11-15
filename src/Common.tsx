/** @jsx jsx */
import { useEffect, useState, useRef } from "react";
import { jsx, css } from "@emotion/react";

import { rand } from "./utils";

function Common() {
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
        return [rand(5000, 10000), rand(20, 80), rand(10, 90)]
    }

    function display() {
        return <div
            ref={ref}
            css={css(`
                font-size: 4vw;
                color: #d6f414;
                opacity: 0;
                text-align: center;
                position: absolute;
                top: ${y}%;
                left: ${x}%;
                user-select: none;
                cursor: default;
            `)}>
            ｷﾂ...
        </div>;
    }

    return display();
}

/*
animation: blink ${frequency}s ease-out;

@keyframes blink {
    0% { opacity: 0; }
    40% { opacity: 0; }
    60% { opacity: 1; }
    80% { opacity: 1; }
    100% { opacity: 0; }
}
*/
export default Common;
