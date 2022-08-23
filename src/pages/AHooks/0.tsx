import { useLatest } from "@ant-design/pro-components";
import React, { useState } from "react";

// 复现 stale Closure
const Index = () => {
  const [count, setCount] = useState(0);
  const latestCount = useLatest(count);

  function handleAlertClick() {
    setTimeout(() => {
      alert(`实际值：${count}-useLatest值：${latestCount.current}`)
    }, 1500)
  };

  return (
    <div style={{ paddingLeft: "50px" }}>
      <h1>复现 stale Closure</h1>
      <h3>点击 alert 后快速点击 + 1</h3>
      <p>当前页面渲染值： {count}</p>
      <button onClick={() => setCount(count + 1)}>+1</button>
      <button onClick={handleAlertClick}>Show alert</button>
    </div>
  );
};

export default Index;