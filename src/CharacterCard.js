import React from 'react';
export default function CharacterCard(props) {
    const className = `card `
    return ( <
        div className = { className } > { props.value } < /div>
    )
}