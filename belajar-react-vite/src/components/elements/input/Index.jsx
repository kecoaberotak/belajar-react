import { forwardRef } from "react";
import Input from "./input";
import Label from "./label";

const InputForm = forwardRef((props, ref) => {
  const {label, type, placeholder, name} = props;
  return (
    <div className="mb-6">
      <Label htmlFor={name}>{label}</Label>
      <Input type={type} name={name} placeholder={placeholder} ref={ref}/>
    </div>
  );
})


export default InputForm;