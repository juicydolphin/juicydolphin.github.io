import React, {useState} from 'react'
import Header from "./Components/Header/Header";
import Body from './Components/Body/Body'
import {Context} from "./context";
import Bottom from "./Components/Body/Bottom";

function App() {

    const style = {
        app: {
            maxWidth: '75%',
            height: '100%',
            margin: 'auto'
        }
    }
    return (
        <Context.Provider value={{

        }}>
            <div style={style.app}>
                <Header/>
                <Body/>


            </div>
        </Context.Provider>
    );
}

export default App;
