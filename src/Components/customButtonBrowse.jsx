import { Children } from "react";

const CustomButtonBrowse = ({ classname,children,onClick,style}) => {
    const buttonClasses=`${classname}`
  return (
  <button className={`${buttonClasses} hover:bg-[rgba(112,110,122,.6)] text-start pl-6 text-xs rounded-md w-40 lg:w-48 md:w-[150px]  mobile:w-24 mobile:text-[8px] h-6 bg-gray-700`} onClick={onClick} style={style}>
    {children}
    </button>
  )
};

export default CustomButtonBrowse;
