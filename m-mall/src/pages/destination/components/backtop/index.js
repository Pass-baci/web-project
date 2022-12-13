import Backtop from 'components/backtop';

const backtopEl = document.querySelector('.backtop');
const scrollContainerEl = document.getElementById('destination-content');

new Backtop(backtopEl, scrollContainerEl.offsetHeight, scrollContainerEl);