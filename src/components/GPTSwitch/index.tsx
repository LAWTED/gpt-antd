import { Switch, SwitchProps } from "antd";
import { useImperativeHandle, useState } from "react";
import { useGPTContextRef } from "../GPTContext";

interface GPTSwitchProps extends SwitchProps {
  id: string;
}

export const GPTSwitch: React.FC<GPTSwitchProps> = (props) => {
  const { id } = props;
  const ref = useGPTContextRef(id);

  const { onChange, ...rest } = props;
  const [checked, setChecked] = useState<boolean>(false);

  const handleChange = (checked: boolean) => {
    setChecked(checked);
    onChange?.(checked);
  };

  useImperativeHandle(ref, () => ({
    setChecked: (checked: boolean) => {
      setChecked(checked);
      onChange?.(checked);
    },
  }));

  return <Switch checked={checked} onChange={handleChange} {...rest} />;
};
