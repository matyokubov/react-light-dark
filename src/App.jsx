import { Context } from "./Context";
import { useState } from "react";
import Settings from "./Components/Settings";
import Content from "./Components/Content";
import Top from "./Components/Top";

const App = () => {
    const [isLight, setTheme] = useState(true);
    const theme = isLight ? "light" : "dark"
    return (
        <div className="wrapper">
            <div className={`box ${theme}`}>
                <Context.Provider value={[isLight, setTheme]}>
                    <Top/>
                    <Content/>
                    <Settings/>
                </Context.Provider>
            </div>
        </div>
    );
}

export default App;