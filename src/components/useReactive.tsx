import { useRef } from "react";
import useCreation from "./useCreation";
import useUpdate from "./useUpdate";

const observer = <T extends Record<string, any>,>(initialVal: T, cb: () => void): T => {
  const proxy = new Proxy<T>(initialVal, {
    get(target, key, receiver) {
      const res = Reflect.get(target, key, receiver);
      return typeof res === "object" ? observer(res, cb) : Reflect.get(target, key);
    },
    set(target,key,val){
      const res = Reflect.set(target,key,val);
      cb(); // 触发视图刷新
      return res;
    }
  })
  return proxy; // 返回 监听器
}

const useReactive = <T extends Record<string, any>,>(initialState: T) => {
  // 1.使用 ref 保存变量
  const ref = useRef<T>(initialState);

  // 2.控制当前函数是否刷新变量
  const update = useUpdate();

  // 3.使用 proxy 拦截 get 和 set 请求，将更新视图传递到 observer 内部
  const state = useCreation(() => {
    return observer(ref.current, () => {
      update();
    })
  }, [])
  return state;
}

export default useReactive;