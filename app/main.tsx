import * as React from 'react';
import { List } from './list';

interface MainState {
    strings: string[],
    text: string;
}

export class Main extends React.Component {
    state: MainState;
    constructor(props: never) {
        super(props);
        this.click = this.click.bind(this);
        this.change = this.change.bind(this);
        this.state = {
            strings: [],
            text: ''
        };
    }    

    click() {
        if (this.state.text === '') {
            return;
        }
        const strings = this.state.strings;
        strings.push(this.state.text);
        this.setState({
            strings: strings,
            text: ''
        });
    }

    change(event: React.ChangeEvent<HTMLInputElement>) {                
        this.setState({
            text: event.target.value,
        });
    }


    render() {
        return <div>
            <input type="text" onChange={this.change} value={this.state.text} /><button onClick={this.click}>Add</button>
            <List strings={this.state.strings}/>
        </div>;
    }
}