import './slider.css';
import 'swiper/swiper-bundle.min.css';

import Swiper from 'swiper/swiper-bundle.esm.js';
import Config, {SWIPER_CONTAINER_CLASS} from './config';

new Swiper (SWIPER_CONTAINER_CLASS, Config);