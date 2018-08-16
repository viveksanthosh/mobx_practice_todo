import React from 'react';
import './App.css';
import { observable, autorun } from 'mobx';
import { observer } from 'mobx-react';

@observer class App extends React.Component {
    @observable count = 0
    render() {
        return (
            <React.Fragment>
                <button onClick={() => { this.count = this.count + 1 }}>increment</button>
                <button onClick={() => { this.count = this.count - 1 }}>decrement</button>
                <br />
                <p>{this.count}</p>
            </React.Fragment>
        );
    }
}

autorun(() => {
    console.log('click')
})

export default App;
