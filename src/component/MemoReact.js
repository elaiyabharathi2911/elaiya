import React from 'react'

function MemoReact({name}) {
    console.log('function based component got rendered',name)
    
    return (
        <div>
            <h1>Ashwin Kumar : {name}</h1>
        </div>
    )
}

export default React.memo(MemoReact)
