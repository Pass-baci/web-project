import Backtop from "components/backtop";

const scrollContainer = document.getElementById('index-page');
const backtopEl = scrollContainer.querySelector('.backtop');

// window.innerHeight
new Backtop(backtopEl, 0,scrollContainer);