import './nav.css';

import render from './nav.art';
import { getData, getDelayedData } from 'api/getData';
import {URL, NAV_ID} from './config';

// https://www.imooc.com/api/mall-wepApp/index/nav

getData(URL).then(data=>{
    document.getElementById(NAV_ID).innerHTML = render({
        imgs: data,
    });
});