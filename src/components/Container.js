import { useState } from 'react'

/*
props.children sono tutti gli elementi figlio del container, dichiarati nel JSX
esempio:

<Container>
    <Elemento1 /> -> gli elementi dichiarati qui sono le props.children
</Container>
 */
function Container(props) {
    return (
        <div className="my-container">
            <hr />
            {props.children}
        </div>
    );
}

export default Container;