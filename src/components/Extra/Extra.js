import React from 'react';

const Extra = () => {
    return (
        <div>
            <h1>How React works?</h1>
            <p>React is one kind of component based javaScript libraray. It actually render a component into real DOM(Document object Model). But reacts main functionality is on Virtual DOM.When any element have to change , React's virtual DOM compare previous dom and change it . It updates after the change of UI(user interface).</p>
            <h1>How useState works?</h1>
            <p>UseState is a kind of hook.And it is new in react library. It would be recognige as a store of a array. useState can receive two parameter. one Parameter get value and another gets function which can be updated.</p>
        </div>
    );
};

export default Extra;