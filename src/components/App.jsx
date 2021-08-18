import React from "react"
import emojipedia from "../emojipedia";
import Emoji from "./Emoji";

function createEmoji(emoji){
    return <Emoji
        key={emoji.id}
        emoji={emoji.emoji}
        name={emoji.name}
        description={emoji.meaning}
        id={emoji.id}
    />
}

function App() {
    return (
        <div>
            <h1>
                <span>emojipedia</span>
            </h1>
            <dl className="dictionary">
                {emojipedia.map(emoji=>
                    <Emoji key={emoji.id} emoji={emoji.emoji} name={emoji.name} description={emoji.meaning} id={emoji.id}/>
                )}
            </dl>
        </div>
    );
}

export default App;

//codesandbox.io/s/mapfilterreduce-h7sm6