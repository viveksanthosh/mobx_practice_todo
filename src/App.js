import React from 'react';
import './App.css';
import { observable, autorun } from 'mobx';
import { observer } from 'mobx-react';

class Counter{
    @observable count = 0
}

let counter = new Counter();

@observer class App extends React.Component {
    render() {
        return (
            <React.Fragment>
                <button onClick={() => { counter.count = counter.count + 1 }}>increment</button>
                <button onClick={() => { counter.count = counter.count - 1 }}>decrement</button>
                <br />
                <p>{counter.count}</p>
            </React.Fragment>
        );
    }
}

autorun(() => {
    console.log('click')
})

export default App;
