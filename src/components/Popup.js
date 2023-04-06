import React, { useContext } from "react";

// Components
import Loading from "./Loading";

// Context
import { ShowPropertiesContext } from "../context/ElementPropertiesProvider";

// Icon
import { AiOutlineClose } from "react-icons/ai";

// ReactRouterDom
import { useParams } from "react-router-dom";

// GraphQL
import { useQuery } from "@apollo/client";
import { GET_PROPERTIES_ELEMENT } from "../graphql/queries";


const Popup = () => {

  const { slug } = useParams();
  const { isShow, changed } = useContext(ShowPropertiesContext);

  const { loading, data } = useQuery(GET_PROPERTIES_ELEMENT, {
    variables: { slug },
  });

  if (loading) return <Loading />;

  const {
    atomicmass,
    atomicnumber,
    atomicradius,
    bgColor,
    boilingpoint,
    category,
    electronaffinity,
    density,
    electronegativity,
    ionizationenergy,
    meltingpoint,
    name,
    oxidationstates,
    standardstate,
    symbol,
    yeardiscovered,
    electronconfiguration,
  } = data.element;
  console.log();

  return (
    <div
      className={`w-full h-full absolute top-0 left-0 ${
        isShow ? "flex" : "hidden"
      } items-center justify-center bg-black/80`}
    >
      <div className="container w-[95%] md:w-[80%] h-[90%] overflow-y-auto bg-[#1f2937] rounded-xl">
        <div className="w-full flex justify-between items-center bg-[#1f2937] sticky top-0 p-4">
          <AiOutlineClose
            onClick={changed}
            color="#ff0000"
            cursor="pointer"
            fontSize="1.5rem"
          />
          <p className="text-yellow-600 font-primary font-bold text-lg">
            ویژگی های عنصر
          </p>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center gap-5 h-fit">
          <div
            className={`${bgColor} rounded-xl flex flex-col gap-1 items-center w-full md:w-[40%]`}
          >
            <p className="text-[50px] font-table">{atomicnumber}</p>
            <p className="text-[100px] font-table">{symbol}</p>
            <p className="text-[20px] font-primary">{name}</p>
            <p className="text-[20px] font-primary">{category}</p>
          </div>
          <table className="w-full md:w-[50%] mb-2">
            <tbody>
            {category && (
              <tr className="border-b-[1px] border-gray-400 flex justify-between md:justify-around">
                <td className="text-[#7ec9fc] p-2 w-[50%] text-right">
                  {category}
                </td>
                <th className="text-green-500 p-2 w-[50%] text-right">سری</th>
              </tr>
            )}
            {standardstate && (
              <tr className="border-b-[1px] border-gray-400 flex justify-between md:justify-around">
                <td className="text-[#7ec9fc] p-2 w-[50%] text-right">
                  {standardstate}
                </td>
                <th className="text-green-500 p-2 w-[50%] text-right">حالت پایه</th>
              </tr>
            )}
            {atomicmass && (
              <tr className="border-b-[1px] border-gray-400 flex justify-between md:justify-around">
                <td className="text-[#7ec9fc] p-2 w-[50%] text-right">
                  {atomicmass}
                </td>
                <th className="text-green-500 p-2 w-[50%] text-right">جرم اتمی</th>
              </tr>
            )}
            {electronconfiguration.raw.children[0].children[0].text && (
              <tr className="border-b-[1px] border-gray-400 flex justify-between md:justify-around">
                <td className="text-[#7ec9fc] p-2 w-[50%] text-right">
                  {electronconfiguration.raw.children[0].children[0].text}
                </td>
                <th className="text-green-500 p-2 w-[50%] text-right">آرایش الکترونی</th>
              </tr>
            )}
            {oxidationstates && (
              <tr className="border-b-[1px] border-gray-400 flex justify-between md:justify-around">
                <td className="text-[#7ec9fc] p-2 w-[50%] text-right">
                  {oxidationstates}
                </td>
                <th className="text-green-500 p-2 w-[50%] text-right">حالت های اکسیداسیون</th>
              </tr>
            )}
            {electronegativity && (
              <tr className="border-b-[1px] border-gray-400 flex justify-between md:justify-around">
                <td className="text-[#7ec9fc] p-2 w-[50%] text-right">
                  {electronegativity}
                </td>
                <th className="text-green-500 p-2 w-[50%] text-right">الکترونگاتیوی</th>
              </tr>
            )}
            {atomicradius && (
              <tr className="border-b-[1px] border-gray-400 flex justify-between md:justify-around">
                <td className="text-[#7ec9fc] p-2 w-[50%] text-right">
                  {atomicradius}
                </td>
                <th className="text-green-500 p-2 w-[50%] text-right">شعاع اتمی</th>
              </tr>
            )}
            {ionizationenergy && (
              <tr className="border-b-[1px] border-gray-400 flex justify-between md:justify-around">
                <td className="text-[#7ec9fc] p-2 w-[50%] text-right">
                  {ionizationenergy}
                </td>
                <th className="text-green-500 p-2 w-[50%] text-right">انرژی یونیزاسیون</th>
              </tr>
            )}
            {electronaffinity && (
              <tr className="border-b-[1px] border-gray-400 flex justify-between md:justify-around">
                <td className="text-[#7ec9fc] p-2 w-[50%] text-right">
                  {electronaffinity}
                </td>
                <th className="text-green-500 p-2 w-[50%] text-right">الکترونخواهی</th>
              </tr>
            )}
            {meltingpoint && (
              <tr className="border-b-[1px] border-gray-400 flex justify-between md:justify-around">
                <td className="text-[#7ec9fc] p-2 w-[50%] text-right">
                  {meltingpoint}
                </td>
                <th className="text-green-500 p-2 w-[50%] text-right">دمای ذوب</th>
              </tr>
            )}
            {boilingpoint && (
              <tr className="border-b-[1px] border-gray-400 flex justify-between md:justify-around">
                <td className="text-[#7ec9fc] p-2 w-[50%] text-right">
                  {boilingpoint}
                </td>
                <th className="text-green-500 p-2 w-[50%] text-right">دمای جوش</th>
              </tr>
            )}
            {density && (
              <tr className="border-b-[1px] border-gray-400 flex justify-between md:justify-around">
                <td className="text-[#7ec9fc] p-2 w-[50%] text-right">
                  {density}
                </td>
                <th className="text-green-500 p-2 w-[50%] text-right">تراکم</th>
              </tr>
            )}
            {yeardiscovered && (
              <tr className="border-b-[1px] border-gray-400 flex justify-between md:justify-around">
                <td className="text-[#7ec9fc] p-2 w-[50%] text-right rtl">
                  {yeardiscovered}
                </td>
                <th className="text-green-500 p-2 w-[50%] text-right">سال کشف</th>
              </tr>
            )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Popup;
