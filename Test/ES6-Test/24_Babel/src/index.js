// Promise解决的是回调地狱
// Promise具有三种状态 pending(初始状态) fulfilled(成功状态) rejected(失败状态)
// Promise一旦发生状态更改，后续将不会再更改状态。
const p = new Promise((resolve, reject) => {
    // reject('msg error');
    resolve({ id: 10 });
});
console.log(p);
// then()方法
// p.then(data=>console.log(data),err=>console.log(err))
p.then(
    data => {
        console.log('success', data);
        // return data
        return new Promise((resolve, reject) => { reject('msg err'); })
    },
    err => {
        console.log('err', err);
    }
    // 默认调用成功状态
).then(
    data => {
        console.log('success1', data);
    },
    err => {
        console.log('err1', err);
    }
);

// catch方法
const p1 = new Promise((resolve, reject) => { reject(); })

p1.then(() => { console.log('success'); }).catch(() => { console.log('err'); }).finally(() => { console.log('final'); });

// all方法
const delay = ms => {
    return new Promise(resolve => {
        setTimeout(resolve, ms)
    })
};

const pPart1 = delay(1000).then(() => { console.log('pPart1'); return Promise.reject(); });

const pPart2 = delay(2000).then(() => { console.log('pPart2'); });

const pAll = Promise.all([pPart1, pPart2]);
pAll.then(() => { console.log('pAll'); }, () => { console.log('err pAll'); });


// race: 第一个成功就成功
// allSettled: 记录所有promise的状态，无论成功失败
console.log(Promise.allSettled([pPart1, pPart2]));

const pRace = Promise.race([pPart1, pPart2])
pRace.then(() => { console.log('pRace'); }, () => { console.log('err pRace'); });