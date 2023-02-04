import './slider.css';
import 'swiper/swiper-bundle.min.css';

import Swiper from 'swiper/swiper-bundle.esm.js';
import Config, {SWIPER_CONTAINER_CLASS,URL,SWIPER_ID} from './config';

import render from './slider.art';
import { getData, getDelayedData } from 'api/getData';

getData(URL).then(data=>{
    document.getElementById(SWIPER_ID).innerHTML = render({
        imgs: data,
        ...Config,
    });

    new Swiper (SWIPER_CONTAINER_CLASS, Config);

});
