import { useState } from "react";
import { GPTInput, GPTSwitch } from "../../components";
import Debugger from "./Debugger";

const data = [
  { name: "张三", gender: "男", address: "北京市" },
  { name: "张三老婆", gender: "女", address: "北京市" },
  { name: "李四", gender: "女", address: "上海市" },
  { name: "李四老公", gender: "男", address: "上海市" },
  { name: "王五", gender: "男", address: "广州市" },
  { name: "王五老婆", gender: "女", address: "广州市" },
];

const Demo = () => {
  const [searchText, setSearchText] = useState("");
  const [address, setAddress] = useState("");
  const [isMale, setIsMale] = useState(false);

  // 根据条件筛选人名数据
  const filteredData = data.filter((person) => {
    const nameMatch = person.name.includes(searchText);
    const genderMatch = !isMale || person.gender === "男";
    const addressMatch = person.address.includes(address);
    return nameMatch && genderMatch && addressMatch;
  });

  return (
    <>
      <div className="p-4">
        <h1 className="text-purple-600"> GPT Demo</h1>
        <div className="mb-4">
          <GPTInput
            id="name"
            placeholder="输入姓名"
            onChange={(e) => setSearchText(e.target.value)}
            style={{ width: 200, marginRight: 16 }}
          />
        </div>
        <div className="mb-4">
          <GPTInput
            id="address"
            placeholder="输入家庭住址"
            onChange={(e) => setAddress(e.target.value)}
            style={{ width: 200, marginRight: 16 }}
          />
        </div>
        <div className="mb-4">
          <span className="mr-2">只显示男性：</span>
          <GPTSwitch id="isMale" onChange={(checked) => setIsMale(checked)} />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredData.map((person, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-4">
              <h2 className="text-lg font-medium mb-2">{person.name}</h2>
              <p className="text-gray-500 mb-2">性别: {person.gender}</p>
              <p className="text-gray-500">地址: {person.address}</p>
            </div>
          ))}
        </div>
      </div>
      <Debugger />
    </>
  );
};

export default Demo;
