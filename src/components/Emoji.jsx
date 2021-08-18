import React from "react";

function Emoji(props){
    return <div div className="term">
        <dt>
            <span className="emoji" role="img" aria-label="{emoji.name}">
              {props.emoji}
            </span>
            <span>{props.name}</span>
        </dt>
        <dd>
            {props.description}
        </dd>
    </div>
}
export default Emoji;