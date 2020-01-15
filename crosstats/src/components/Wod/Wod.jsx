
import React, { useState } from "react";

const Wod = props => {
    //Exemple de hooks pour Antoine car il est nul
    const [count, setCount] = useState(0);

    return (
        <div>
            <button type="button" class="btn btn-primary">Wod</button>
        </div>
    );
};

export { Wod };