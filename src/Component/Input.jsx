import React from "react";


const Input =({width,maxLength,disabled=false,onChange,value,margin,badge,inputwidth,type})=>{
return(
  <div class={`input input-bordered flex items-center gap-2 ${width}  ${margin}` }>
  <input type={type} className={`grow text-center font-semibold text-2xl ${inputwidth}`}  maxLength={maxLength}
  disabled={disabled}
  value={value}
  onChange={onChange}
  // {...register(valueInput)}
  
  />
  {badge}
</div>
)
};
export default Input;

