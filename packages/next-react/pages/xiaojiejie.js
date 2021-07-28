// import React from "react";
import Link from "next/link";
import { withRouter } from "next/router"; // 用这个方法进行路由参数的接受
import axios from "axios"; // 通过axios获取数据

const Xiaojiejie = ({ router, list }) => {
  return (
    <>
      <div>
        {router.query.name} 来了 {list}
      </div>

      <Link href="/">返回首页</Link>
    </>
  );
};

Xiaojiejie.getInitialProps = async () => {
  const promise = new Promise((resolve) => {
    axios.post("http://orrz.work:8800/postData", {
      list: ["早上", "中午", "下午", "晚"],
    }).then((res) => {
      console.log(res);
      resolve(res.data);
    });
  });
  return await promise;
};

export default withRouter(Xiaojiejie);
