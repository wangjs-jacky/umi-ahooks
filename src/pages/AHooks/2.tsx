import useCreation from "@/components/useCreation";
import { Button } from "antd";
import { useRef, useState } from "react";
import { useMemo } from "react";

const Index = (list: number[]) => {
  const [_, setFlag] = useState<boolean>(false);

  const getNowData = () => {
    return Math.random();
  }
  // useRef 此方案存在缺陷，遇到复杂对象可能会存在问题
  // @ts-ignore
  const dataRef = useRef<any>(new Object({ "a": getNowData() }));

  const nowData = useCreation(() => getNowData(), []);
  const memoData = useMemo(() => getNowData(), []);

  return (
    <div style={{ padding: 50 }}>
      <div>正常的函数：{getNowData()}</div>
      <div>useCreation包裹后的：{nowData}</div>
      <div>memoData:{memoData}</div>
      <div>dataRef:{dataRef.current.a.toString()}</div>
      <Button color='primary' onClick={() => { setFlag(v => !v) }}> 渲染</Button>
    </div>
  )
}

export default Index;