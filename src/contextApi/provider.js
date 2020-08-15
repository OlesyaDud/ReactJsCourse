import React, {useState} from 'react';

import ImportingContextComponent from "./context";


const Provider = props => {
    // info we want to provide
    const [mission, setMission] = useState({
        mName : "go to russia",
        agent: "007",
        accepted:"not accepted"

    })

    return(
        <ImportingContextComponent.Provider
        value={{
            data: mission,
            isAccepted: ()=>{
                setMission({...mission, accepted:"accepted"})
            }
        }}
        >
        {props.children}

        </ImportingContextComponent.Provider>
    )
}

export default Provider;

// data that is kept in one place