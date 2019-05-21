import React from 'react'

const userIpunt = (props) => {
    return <input type ="text" onChange={props.changed}
    value={props.currentName}
    />
}

export default userIpunt;