import React, { useState } from "react";

const WodCreate = props => {
    //Exemple de hooks pour Antoine car il est nul
    const [count, setCount] = useState(0);

    return (
        <div>
            <button type="button" class="btn btn-primary">Wod Create</button>
        </div>
    );
};

export { WodCreate };