// //
// import React from "react";
// import Link from "next/link"; // link方式跳转，缺点不能直接在link标签内写多个标签，（但是可以内部用一个标签包裹多个标签）
// import Router from "next/router";

// const Home = () => {
//   function gotoA() {
//     Router.push("/LinkA");
//   }
//   return (
//     <>
//       <div>我是首页</div>
//       <div>
//         <Link href="/LinkA">
//           <a>去a页面</a>
//         </Link>
//       </div>
//       <div>
//         {/* link 标签内只能包含一个标签，否则会报错 */}
//         <Link href="/LinkB">
//           <a>去b页面</a>
//           {/* <a>去0b页面</a> */}
//         </Link>
//       </div>
//       <div>
//         <button onClick={gotoA}>qu A</button>
//       </div>
//     </>
//   );
// };
// export default Home;

import React from "react";
import Link from "next/link";
import Router from "next/router";

// next.js 中只能通过query(?key:value)来传递参数，不能通过(path:id)的形式传递
const Home = () => {
  // function gotoA() {
  //   Router.push("/xiaojiejie?name=xiaoming");
  // }

  // 优雅一点的方式
  function gotoA() {
    Router.push({
      pathname: "/xiaojiejie",
      query: {
        name: "小明",
      },
    });
  }
  return (
    <>
      <div>我是首页</div>
      <div>
        {/* <Link href="/xiaojiejie?name=xiaohogn">xiaohong</Link> */}
        {/* link 也修改一下优雅的方式 */}
        <Link href={{ pathname: "/xiaojiejie", query: { name: "小红" } }}>
          小红
        </Link>
        <button onClick={gotoA}>xiaoming</button>
        <div>
          <Link href="#jack">
            <a>选jack</a>
          </Link>
        </div>
        <Link href={{ pathname: "/error", query: { name: "小红" } }}>
          error
        </Link>
      </div>
    </>
  );
};

// 路由 六个钩子事件

// 路由发生变化时触发 routeChangeStart  只要路由发生变化都会触发
Router.events.on("routeChangeStart", (...args) => {
  console.log("1 routeChangeStart", ...args);
});

// 路由结束变化时触发 routeChangeComplete
Router.events.on("routeChangeComplete", (...args) => {
  console.log("3 routeChangeComplete", ...args);
});

// 浏览器history触发之前 beforeHistoryChange
Router.events.on("beforeHistoryChange", (...args) => {
  console.log("2 beforeHistoryChange", ...args);
});

// 路由跳转发生错误时 routeChangeError
Router.events.on("routeChangeError", (...args) => {
  console.log("routeChangeError", ...args);
});

// 转变hash路由模式 hashChangeStart
Router.events.on("hashChangeStart", (...args) => {
  console.log("hashChangeStart", ...args);
});

// 转变hash路由模式结束 hashChangeComplete
Router.events.on("hashChangeComplete", (...args) => {
  console.log("hashChangeComplete", ...args);
});

export default Home;
