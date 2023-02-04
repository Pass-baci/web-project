import './main.css';
import Tab from '../tab';
import Content from '../content';
import 'components/loading'
import {set, get} from 'utils/sessionStorage';

const tabEl = document.querySelector('.tab');
const tab = new Tab(tabEl);
const contentEl = document.getElementById('destination-content');
const content = new Content(contentEl);

tabEl.addEventListener('click', (e) => {
    if (e.target.classList.contains('tab-item')) {

        const index = e.target.dataset.id-1;

        const storageName = `destination_content_${index}`;
        const storageContent= get(storageName);

        if (storageContent) {
            tab.setAcitveItem(index);
            content.set(storageContent);
        } else {
            content.setLoading();
            tab.to(index).then(data => {
                content.set(data);
                set(storageName, data);
            })
        }
    }
}, false)

tab.to(0).then(data => {
    content.set(data);
})
// tab.to(1).then(data=>{
//     console.log(data);
//     content.set(data);
// })
// tab.setAcitveItem(0)
// const data = tab.to(1)