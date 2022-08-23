import useHover from "@/components/useHover"
import useUpdate from "@/components/useUpdate";
import { useRef } from "react"

const Index: React.FC = () => {
  const domRef = useRef();
  const isHover = useHover(domRef);
  return (
    <h1 ref={domRef} style={{ padding: "20px" }}> 鼠标是否移入: {isHover ? "是" : "否"}</h1 >
  )
}

export default Index;