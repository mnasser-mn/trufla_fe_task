import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.bundle.js"
import "./styles.css"
//
import {render} from 'react-dom';
import App from './components/app';

render(<App/>,document.querySelector('#root'))