import React, { useContext } from "react";

// Context
import { ShowPropertiesContext } from "../context/ElementPropertiesProvider";

// Icon
import { AiOutlineClose } from "react-icons/ai"

const Popup = () => {

  const { isShow, changed } = useContext(ShowPropertiesContext);

  return (
    <div className={`w-full h-full absolute top-0 left-0 ${isShow ? "flex" : "hidden" } items-center justify-center bg-black/80`}>
      <div className="container w-[95%] md:w-[80%] h-[90%] overflow-y-auto bg-[#1f2937] rounded-xl">
        <div className="w-full flex justify-between items-center bg-[#1f2937] sticky top-0 p-4">
          <AiOutlineClose onClick={changed} color="#ff0000" cursor="pointer" fontSize="1.5rem" />
          <p className="text-yellow-600 font-primary font-bold text-lg">ویژگی های عنصر</p>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center gap-5 h-fit">
          <div className="element bg-green-500 flex flex-col gap-1 items-center w-full md:w-[40%]">
            <p className="text-[50px] font-table">1</p>
            <p className="text-[100px] font-table">H</p>
            <p className="text-[20px] font-primary">هیدروژن</p>
            <p className="text-[20px] font-primary">نا فلز</p>
          </div>
          <table className="w-full md:w-[50%] mb-2">
            <tr className="border-b-[1px] border-gray-400 flex justify-between md:justify-around">
              <td className="text-[#7ec9fc] p-2 w-[50%] text-right">نا فلز</td>
              <th className="text-green-500 p-2 w-[50%] text-right">سری</th>
            </tr>
            <tr className="border-b-[1px] border-gray-400 flex justify-between md:justify-around">
              <td className="text-[#7ec9fc] p-2 w-[50%] text-right">نا فلز</td>
              <th className="text-green-500 p-2 w-[50%] text-right">سری</th>
            </tr>
            <tr className="border-b-[1px] border-gray-400 flex justify-between md:justify-around">
              <td className="text-[#7ec9fc] p-2 w-[50%] text-right">نا فلز</td>
              <th className="text-green-500 p-2 w-[50%] text-right">سری</th>
            </tr>
            <tr className="border-b-[1px] border-gray-400 flex justify-between md:justify-around">
              <td className="text-[#7ec9fc] p-2 w-[50%] text-right">نا فلز</td>
              <th className="text-green-500 p-2 w-[50%] text-right">سری</th>
            </tr>
            <tr className="border-b-[1px] border-gray-400 flex justify-between md:justify-around">
              <td className="text-[#7ec9fc] p-2 w-[50%] text-right">نا فلز</td>
              <th className="text-green-500 p-2 w-[50%] text-right">سری</th>
            </tr>
            <tr className="border-b-[1px] border-gray-400 flex justify-between md:justify-around">
              <td className="text-[#7ec9fc] p-2 w-[50%] text-right">نا فلز</td>
              <th className="text-green-500 p-2 w-[50%] text-right">سری</th>
            </tr>
            <tr className="border-b-[1px] border-gray-400 flex justify-between md:justify-around">
              <td className="text-[#7ec9fc] p-2 w-[50%] text-right">نا فلز</td>
              <th className="text-green-500 p-2 w-[50%] text-right">سری</th>
            </tr>
            <tr className="border-b-[1px] border-gray-400 flex justify-between md:justify-around">
              <td className="text-[#7ec9fc] p-2 w-[50%] text-right">نا فلز</td>
              <th className="text-green-500 p-2 w-[50%] text-right">سری</th>
            </tr>
            <tr className="border-b-[1px] border-gray-400 flex justify-between md:justify-around">
              <td className="text-[#7ec9fc] p-2 w-[50%] text-right">نا فلز</td>
              <th className="text-green-500 p-2 w-[50%] text-right">سری</th>
            </tr>
            <tr className="border-b-[1px] border-gray-400 flex justify-between md:justify-around">
              <td className="text-[#7ec9fc] p-2 w-[50%] text-right">نا فلز</td>
              <th className="text-green-500 p-2 w-[50%] text-right">سری</th>
            </tr>
            <tr className="border-b-[1px] border-gray-400 flex justify-between md:justify-around">
              <td className="text-[#7ec9fc] p-2 w-[50%] text-right">نا فلز</td>
              <th className="text-green-500 p-2 w-[50%] text-right">سری</th>
            </tr>
            <tr className="border-b-[1px] border-gray-400 flex justify-between md:justify-around">
              <td className="text-[#7ec9fc] p-2 w-[50%] text-right">نا فلز</td>
              <th className="text-green-500 p-2 w-[50%] text-right">سری</th>
            </tr>
            <tr className="border-b-[1px] border-gray-400 flex justify-between md:justify-around">
              <td className="text-[#7ec9fc] p-2 w-[50%] text-right">نا فلز</td>
              <th className="text-green-500 p-2 w-[50%] text-right">سری</th>
            </tr>
            <tr className="border-b-[1px] border-gray-400 flex justify-between md:justify-around">
              <td className="text-[#7ec9fc] p-2 w-[50%] text-right">نا فلز</td>
              <th className="text-green-500 p-2 w-[50%] text-right">سری</th>
            </tr>
            <tr className="border-b-[1px] border-gray-400 flex justify-between md:justify-around">
              <td className="text-[#7ec9fc] p-2 w-[50%] text-right">نا فلز</td>
              <th className="text-green-500 p-2 w-[50%] text-right">سری</th>
            </tr>
            <tr className="border-b-[1px] border-gray-400 flex justify-between md:justify-around">
              <td className="text-[#7ec9fc] p-2 w-[50%] text-right">نا فلز</td>
              <th className="text-green-500 p-2 w-[50%] text-right">سری</th>
            </tr>
            <tr className="border-b-[1px] border-gray-400 flex justify-between md:justify-around">
              <td className="text-[#7ec9fc] p-2 w-[50%] text-right">نا فلز</td>
              <th className="text-green-500 p-2 w-[50%] text-right">سری</th>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Popup;
