import './product.css';

import { getData, getDelayedData } from 'api/getData';
import {URL, PRODUCT_ID} from './config';
import render from './item.art';


getData(URL).then(data=>{
    document.getElementById(PRODUCT_ID).innerHTML = render({
        items: data,
    });
})