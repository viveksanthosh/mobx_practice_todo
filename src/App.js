import React from 'react';
import './App.css';
import { observable, autorun, computed } from 'mobx';
import { observer } from 'mobx-react';

class Counter {
    @observable count = 0
    @computed get total(){
        console.log('comouting total');
        return this.count * 3;
    }
}

let counter = new Counter();

@observer class App extends React.Component {
    render() {
        return (
            <React.Fragment>
                <button onClick={() => { counter.count++ }}>increment</button>
                <button onClick={() => { counter.count-- }}>decrement</button>
                <br />
                <p><b>Count </b>{counter.count}</p>
                <p><b>Total </b>{counter.total}</p>
            </React.Fragment>
        );
    }
}

if (typeof window !== 'undefined') {
    window.counter = counter;
}

autorun(() => {
    console.log('click')
})

export default App;
