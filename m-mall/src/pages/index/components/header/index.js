import Header from 'components/header';
import 'components/searchbox';

const scrollContainer = document.getElementById('index-page');
const $header = scrollContainer.querySelector('.header');

new Header($header, 0, scrollContainer);