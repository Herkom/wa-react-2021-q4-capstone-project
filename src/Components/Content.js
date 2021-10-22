import React from 'react';

//Probably this is where the router will be
const Content = (props) => {
    return(
        <main>
            {props.children}
        </main>
    );
};

export default Content
