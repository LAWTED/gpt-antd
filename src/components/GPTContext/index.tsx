// GPT组件的Context
// 所有的GPT组件都需要使用这个Context
// Context自动收集所有的GPT组件的Ref
// 通过Context可以获取到所有的GPT组件的Ref

import { createContext, createRef, useContext } from "react";

const GPTContext = createContext({});

const refMap: RefMap = {
  name: createRef(),
  address: createRef(),
  isMale: createRef(),
};

interface RefMap {
  [key: string]: React.RefObject<unknown>;
}

interface GPTProviderProps {
  children: React.ReactNode;
}

export const GPTContextProvider = ({ children }: GPTProviderProps) => {
  return <GPTContext.Provider value={refMap}>{children}</GPTContext.Provider>;
};

export const useGPTContext: () => RefMap = () => useContext(GPTContext);

export const useGPTContextRef = (id: string) => {
  const refMap = useGPTContext();
  return refMap[id];
};

// 将RefMap挂载到window上
// @ts-ignore
window.GPTControl = refMap;
