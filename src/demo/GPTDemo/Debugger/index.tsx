// 一个文本框，和一些按钮, 使用antd, tailwindcss
// 卡片可以将文本框中的每一行转义成一个按钮
// 比如输入:
// window.GPTControl["name"].current?.setValue("李四")
// 需要渲染出来一个按钮:
// <button onClick={() => window.GPTControl["name"].current?.setValue("李四")}>Step1</button>
// step 数等于按钮的序列号

import { useState } from "react";
import { Input, Button, Card } from "antd";

const Debugger = () => {
  const [inputValue, setInputValue] = useState<string>("");

  // 将每一行的输入转换成一个按钮
  const generateButton = (inputValue) => {
    if (!inputValue) {
      return null;
    }
    const lines = inputValue.split("\n");
    const buttons = lines.map(
      (line, index) =>
        line && (
          <Button
            key={index}
            onClick={() => {
              eval(line);
            }}
          >
            步骤{index + 1}
          </Button>
        )
    );
    return buttons;
  };

  return (
    <>
      <Input.TextArea onChange={(e) => setInputValue(e.target.value)} />
      <div className="mt-2 flex gap-2">{generateButton(inputValue)}</div>
    </>
  );
};

export default Debugger;
