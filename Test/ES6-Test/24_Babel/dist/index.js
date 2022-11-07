"use strict";

// Promise解决的是回调地狱
// Promise具有三种状态 pending(初始状态) fulfilled(成功状态) rejected(失败状态)
// Promise一旦发生状态更改，后续将不会再更改状态。
var p = new Promise(function (resolve, reject) {
  // reject('msg error');
  resolve({
    id: 10
  });
});
console.log(p);
// then()方法
// p.then(data=>console.log(data),err=>console.log(err))
p.then(function (data) {
  console.log('success', data);
  // return data
  return new Promise(function (resolve, reject) {
    reject('msg err');
  });
}, function (err) {
  console.log('err', err);
}
// 默认调用成功状态
).then(function (data) {
  console.log('success1', data);
}, function (err) {
  console.log('err1', err);
});

// catch方法
var p1 = new Promise(function (resolve, reject) {
  reject();
});
p1.then(function () {
  console.log('success');
})["catch"](function () {
  console.log('err');
})["finally"](function () {
  console.log('final');
});

// all方法
var delay = function delay(ms) {
  return new Promise(function (resolve) {
    setTimeout(resolve, ms);
  });
};
var pPart1 = delay(1000).then(function () {
  console.log('pPart1');
  return Promise.reject();
});
var pPart2 = delay(2000).then(function () {
  console.log('pPart2');
});
var pAll = Promise.all([pPart1, pPart2]);
pAll.then(function () {
  console.log('pAll');
}, function () {
  console.log('err pAll');
});

// race: 第一个成功就成功
// allSettled: 记录所有promise的状态，无论成功失败
console.log(Promise.allSettled([pPart1, pPart2]));
var pRace = Promise.race([pPart1, pPart2]);
pRace.then(function () {
  console.log('pRace');
}, function () {
  console.log('err pRace');
});