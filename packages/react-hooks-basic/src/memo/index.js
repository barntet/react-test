// import React, { useState, useMemo } from "react";

// function Memo() {
//   const [xiaohong, setXiaohong] = useState("小红");
//   const [zhilin, setZhiling] = useState("志林");

//   return (
//     <>
//       <button
//         onClick={() => {
//           setXiaohong(new Date().getTime());
//         }}
//       >
//         小红
//       </button>
//       <button
//         onClick={() => {
//           setZhiling(new Date().getTime() + "zhilin");
//         }}
//       >
//         志林
//       </button>
//       <ChildComponent name="{xiaohong}">{zhilin}</ChildComponent>
//     </>
//   );
// }

// function ChildComponent({ name, children }) {
//   function changeXiaohong(name) {
//     console.log("xiaohong laile "); // 这时候在控制台能看到，虽然点击的是志林，但是对应方都会执行
//     return name + "xiaohong laile";
//   }

//   return (
//     <>
//       <div>{actionXiaohong}</div>
//       <div>{children}</div>
//     </>
//   );
// }
// export default Memo;

// 优化

import React, { useState, useMemo } from "react";

function Memo() {
  const [xh, setXh] = useState("小红");
  const [zl, setZl] = useState("志林");

  return (
    <>
      <button
        onClick={() => {
          setXh(new Date().getTime());
        }}
      >
        xiaiohong
      </button>
      <button onClick={() => setZl(new Date().getTime() + "xiaohong ")}>
        zhiling
      </button>
      <ChildComponent name="{xh}">{zl}</ChildComponent>
    </>
  );
}

function ChildComponent({ name, children }) {
  function changeXiaohong(name) {
    console.log("lailem laile xiaohong");
    return name + "xiaohonglail";
  }

  const actionXiaohong = useMemo(() => changeXiaohong(name), [name]);
  return (
    <>
      <div>{actionXiaohong}</div>
      <div>{children}</div>
    </>
  );
}

export default Memo;
