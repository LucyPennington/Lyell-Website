import {useEffect, useLayoutEffect, useRef} from "react";
import "universalviewer/dist/uv.css";
import "universalviewer/dist/esm/index.css";

import {IIIFEvents, init} from "universalviewer";

export function UV() {

    const uvRef = useRef()
    useEffect(() => {
        const initViewer = async () => {
            const data = {
                manifest: "http://localhost:5000/object/manifest/A1-2",
            };
            const uv = init(uvRef.current, data);
        };
        initViewer();
    });

    return (
        <div
            className="uv"
            id="uv"
            ref={uvRef}
            style={{width: "100%", height: "800px"}}
        />
    );
}