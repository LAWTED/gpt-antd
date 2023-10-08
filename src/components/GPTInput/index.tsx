// 封装 antd Input组件
// 使用时和antd的Input组件一样, 只是多了一个id属性
// 新增功能:
// 自动将组件实例注册到GPTContext中
// 可以在外部通过函数式的方式调用Input组件的方法
// 例子如下:
// 导入语法: import { GPTInput, GPTInputAPI } from "gpt-input";
// 使用trigger: GPTInputAPI.setValue("id1", "hello world");
// 使用组件: <GPTInput id="id1" />

import React, { useState, useImperativeHandle } from "react";
import { Input, InputProps } from "antd";
import { useGPTContextRef } from "../GPTContext";

interface GPTInputProps extends InputProps {
  id: string;
}

export const GPTInput: React.FC<GPTInputProps> = (props) => {
  const { id } = props;
  const ref = useGPTContextRef(id);

  const { onChange, ...rest } = props;
  const [value, setValue] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    onChange?.(e);
  };

  useImperativeHandle(ref, () => ({
    setValue: (val: string) => {
      setValue(val);
      onChange?.({
        target: {
          value: val,
        },
      } as React.ChangeEvent<HTMLInputElement>);
    },
  }));

  return <Input value={value} onChange={handleChange} {...rest} />;
};
