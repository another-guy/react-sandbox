import React from 'react';
import ReactDOM from 'react-dom';
import { demo } from './App';
import * as serviceWorker from './serviceWorker';

import { ForwardRefDemo } from './forwarding-refs/ForwardRefDemo';
const Demo = demo(ForwardRefDemo);

ReactDOM.render(<Demo />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
