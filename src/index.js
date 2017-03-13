import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Match, Miss} from 'react-router';
import App from './components/App';
import Home from './components/Home';
import e404 from './components/e404';
import './components/scss/main.scss';
// import './components/css/index.css';

const Root = () => {
    return (
        <BrowserRouter>
            <div>
                <Match exactly pattern='/' component={Home}/>
                <Match pattern='/app/' component={App}/>
                <Miss component={e404}/>
            </div>
        </BrowserRouter>
    )
}

ReactDOM.render( <Root/> ,
  document.getElementById('root')
);
