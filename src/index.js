import React, {   useEffect, useRef, useState }  from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import axios from 'axios';
import './index.css'

axios.defaults.baseURL="https://libretranslate.de/translate"


ReactDOM.render( <App /> , document.getElementById('root'))


