import { DependencyList, useRef } from "react"

const depsAreSame = (oldDeps: DependencyList, deps: DependencyList): boolean => {
    if (oldDeps === deps) return true;
    for (let i = 0; i < oldDeps.length; i++) {
        // 判断是否为同一值，第一次学习 Object.is 这个函数(比 === 多了一个 NAN === NAN 为 true);
        if (!Object.is(oldDeps[i], deps[i])) return false;
    }
    return true;
}


// 依赖如何处理！！！
const useCreation = <T,>(fn: () => T, deps: DependencyList) => {
    // 如果没有下面一段代码，每次都会实例化一个新的 ref
    const { current } = useRef({
        deps,
        obj: undefined as undefined | T,
        initialized: false // 标志当前变量是否被初始化
    });

    // 控制上面的 ref 时候会更新【感觉和react很像，只有初始化和更新时才会执行】
    if (current.initialized === false || !depsAreSame(current.deps, deps)) {
        current.deps = deps; // 更新依赖，方便下次比较
        current.obj = fn(); // 执行函数
        current.initialized = true;
    }
    return current.obj as T;

}

export default useCreation;
