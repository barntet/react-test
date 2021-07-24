import React, { useState, useEffect } from "react";

// useState
/* 
function Example() {
  console.log(useState);
  const [count, setCount] = useState(0); // useState注意声明多个变量时需要按照顺序排列
  // 如下
  const [sex, setSex] = useState('男');
  const [age, setAge] = useState(18);
  // 如果不是按顺序会报错
  const [sex, setSex] = uesState('男');
  if(count === 1){
	  const [age, setAge] = useState(18); // 这时候会报错
  }
  return (
    <div>
      <div>current {count}</div>
      <button onClick={() => setCount(count + 1)}>click</button>
    </div>
  );
}

export default Example;

*/

// useEffect
function ExampleHook() {
  const [count, setCount] = useState(0);

  // useEffect函数 首次渲染和后续的每次渲染都会调用，相当于用类形式定义组件时，首次调用componentDidMount，后续渲染调用componentDidUpdate
  // 注意 ：useEffect中定义的函数的执行不会阻碍浏览器更新视图，也就是说函数是异步的，
  useEffect(() => {
    console.log(`count => ${count}`);
  });

  return (
    <div>
      <div>current {count}</div>
      <button onClick={() => setCount(count + 1)}>click</button>
    </div>
  );
}

export default ExampleHook;

// var bsj = {
//   bar: function () {
//     return this.baz;
//   },
//   baz: 10,
// };

// (function () {
//   console.log(typeof arguments[0]());
// })(bsj.bar);
