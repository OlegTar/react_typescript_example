import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Main} from './main';

onload = function() {
    ReactDOM.render(<Main />, document.getElementById('app'));
}