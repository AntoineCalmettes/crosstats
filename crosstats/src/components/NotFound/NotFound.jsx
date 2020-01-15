import React, { useState } from "react";

const NotFound = props => {
    //Exemple de hooks pour Antoine car il est nul
    const [count, setCount] = useState(0);

    return (
        <div>
            <button type="button" class="btn btn-primary">NotFound</button>
        </div>
    );
};

export { NotFound };