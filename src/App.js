import React from 'react';
import './App.css';
import { observable, autorun, computed } from 'mobx';
import { observer } from 'mobx-react';

class Todo {
    @observable value = ''
    @observable checked
    constructor(value) {
        this.value = value;
        this.checked = false;
    }
}

class Todos {
    @observable list = [new Todo('sleep')]
    @observable filter = ''
    @computed get filteredTodos (){
        let reg = new RegExp(this.filter, 'i');
        return this.list.filter(t => !this.filter || reg.test(t.value))
    }
}


let todos = new Todos();

@observer class App extends React.Component {

    handleNewTodo = e => {
        if (e.key === 'Enter') {
            todos.list.push(new Todo(e.target.value));
            e.target.value = '';
        }
    }

    handleFilterChange = e => {
        todos.filter = e.target.value
    }

    toggleCheckBox = (todo) => {
        todo.checked = !todo.checked;
    }

    render() {
        return (
            <React.Fragment>
                <label>new</label><input onKeyPress={this.handleNewTodo} />
                <label>filter</label><input onChange = {this.handleFilterChange} />
                <ul>
                    {todos.filteredTodos.map(todo => <li>
                        <input type="checkbox" onChange={e => this.toggleCheckBox(todo)}  checked={todo.checked} />{todo.value}</li>)}
                </ul>
            </React.Fragment>
        );
    }
}

if (typeof window !== 'undefined') {
    window.counter = todos;
}

autorun(() => {
    console.log('click')
})

export default App;
