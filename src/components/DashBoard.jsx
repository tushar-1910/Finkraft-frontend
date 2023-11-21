import { Link } from "react-router-dom";
import { extractionData } from "../constants";

const DashBoard = () => {
  return (
    <div className="flex flex-1">
      <div className="h-screen w-8/12 px-14 py-10 overflow-y-scroll hide-scroll">
        <div className="flex justify-between items-center">
          <h2 className="text-[1.9rem] font-bold">Home Dashboard</h2>
          <div className="flex">
            <button className="w-[50px] h-[50px] border-2 border-solid border-slate-200 rounded-lg flex justify-center items-center text-[1.1rem] mr-4">
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
            <button className=" w-[50px] h-[50px] border-2 border-solid border-slate-200 rounded-lg flex justify-center items-center text-[1.1rem]">
              <i className="fa-solid fa-calendar relative">
                <span className="bg-[#DC446A] border border-solid border-white w-[6px] h-[6px] absolute bottom-0 right-0 rounded-full translate-x-[30%] translate-y-[30%]"></span>
              </i>
            </button>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-8 py-10">
          <div className="bg-[#5F5EE8] rounded-xl px-6 py-4 drop-shadow-xl flex justify-between items-center overflow-hidden">
            <div>
              <h6 className="uppercase text-[0.8rem] font-semibold text-white-900">Customers</h6>
              <p className="text-white-900 text-[0.9rem]">4,235</p>
            </div>
            <div className="dashboard-icon-group relative">
              <i className="fa-solid fa-user -rotate-[25deg] text-[3.5rem] absolute -bottom-2 right-3 translate-y-[60%] dashboard-icon-group-behind"></i>
              <i className="fa-solid fa-crown -rotate-[10deg] text-[4.2rem] absolute -bottom-1 right-0 translate-x-[55%] translate-y-[50%] dashboard-icon-group-front"></i>
            </div>
          </div>
          <div className="bg-[#5F5EE8] rounded-xl px-6 py-4 drop-shadow-xl flex justify-between items-center overflow-hidden">
            <div>
              <h6 className="uppercase text-[0.8rem] font-semibold text-white-900">Tax Saved</h6>
              <p className="text-white-900 text-[0.9rem]">$45,000</p>
            </div>
            <div className="dashboard-icon-group relative">
              <i className="fa-solid fa-money-bill-wave -rotate-[28deg] text-[3.5rem] absolute bottom-0 -right-6 translate-y-[50%] dashboard-icon-group-behind"></i>
              <i className="fa-solid fa-money-bill-wave -rotate-[15deg] text-[4.2rem] absolute -bottom-2 -right-2 translate-x-[60%] translate-y-[50%] dashboard-icon-group-front"></i>
            </div>
          </div>
          <div className="bg-[#5F5EE8] rounded-xl px-6 py-4 drop-shadow-xl flex justify-between items-center overflow-hidden">
            <div>
              <h6 className="uppercase text-[0.8rem] font-semibold text-white-900">Products Sold</h6>
              <p className="text-white-900 text-[0.9rem]">1,265</p>
            </div>
            <div className="dashboard-icon-group relative">
              <i className="fa-solid fa-tags -rotate-[0deg] text-[3.5rem] absolute -bottom-1 -right-7 translate-y-[60%] dashboard-icon-group-behind"></i>
              <i className="fa-solid fa-tags rotate-[15deg] text-[4.2rem] absolute -bottom-3 -right-3 translate-x-[60%] translate-y-[50%] dashboard-icon-group-front"></i>
            </div>
          </div>
        </div>
        <div className="my-2">
          <h3 className="font-bold text-[1.1rem] mb-6">Marketplace</h3>
          <div className="grid grid-cols-3 gap-9">
            <div className="col-span-2 grid grid-rows-2 gap-9">
              <div className="bg-white drop-shadow-xl rounded-2xl flex items-center justify-between px-6 py-6">
                <div className="w-[60%]">
                  <h4 className="font-bold text-[1.1rem] mb-2">
                    Data Analytics <br />
                    Overview
                  </h4>
                  <p className="text-slate-500 text-[0.95rem]">See how your account grow and how you can boost it.</p>
                </div>
                <div>
                  <div className="start-button rounded-full p-1 cursor-pointer w-[95px] h-[95px] flex items-center justify-center">
                    <div className="uppercase bg-white h-full w-full rounded-full flex items-center justify-center text-[#5F5EE8] text-sm font-bold">Start</div>
                  </div>
                </div>
              </div>
              <div className="bg-white drop-shadow-xl rounded-2xl flex items-center justify-between px-6 py-6">
                <div className="h-full flex flex-col justify-between">
                  <h4 className="font-bold text-[1.1rem] mb-2">Finance Flow</h4>
                  <div>
                    <p className="font-bold text-[1.1rem]">$2,256</p>
                    <p className="text-slate-500 text-[0.95rem]">November 2021</p>
                  </div>
                </div>
                <div>
                  <div className="start-button rounded-full p-1 cursor-pointer w-[95px] h-[95px] flex items-center justify-center">
                    <div className="uppercase bg-white h-full w-full rounded-full flex items-center justify-center text-[#5F5EE8] text-sm font-bold">Start</div>
                  </div>
                </div>
              </div>
            </div>
            <div className=" bg-white drop-shadow-xl rounded-2xl flex flex-col items-center justify-between px-6 py-6">
              <div className="border-b-2 w-full border-solid border-slate-200 uppercase pb-4 text-center text-sm font-bold text-[#5F5EE8]">Upgrade to Pro</div>
              <div className="flex flex-1 flex-col text-center items-center justify-center">
                <img src="/images/upgrade.webp" className="w-[85%] mb-3 drop-shadow-xl" />
                <p className="font-bold text-[1.1rem]">$29 / month</p>
                <p className="text-slate-500 text-[0.95rem]">Get upto 75% return on upgradation</p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12">
          <div className="flex justify-between items-center pb-3">
            <h3 className="font-bold text-[1.1rem] mb-0">Recent Extractions</h3>{" "}
            <Link to="extractions" className="uppercase font-bold text-xs text-[#5F5EE8]">
              See All
            </Link>
          </div>
          <table className="w-full recent-extractions">
            {extractionData?.map((d, i) => {
              return (
                i < 5 && (
                  <tr key={d?.id} className="grid grid-cols-5 gap-3 text-slate-200 border-t-2 border-solid border-slate-200 py-3">
                    <td className="text-primary font-semibold">#{d?.id}</td>
                    <td className="text-slate-500 font-medium">{d?.fileName}</td>
                    <td className="text-slate-500 font-medium">{d?.date}</td>
                    <td className="text-slate-500 font-medium">${d?.amount}</td>
                    <td className={`text-end font-medium ${d?.status}`}>{d?.status}</td>
                  </tr>
                )
              );
            })}
          </table>
        </div>
      </div>
      <div className="h-screen w-4/12 px-16 py-10 bg-[#F9F8FD] overflow-y-scroll hide-scroll">
        <h2 className="text-[1.9rem] font-bold">Summary</h2>
        <div className="relative w-[92%] bg-white rounded-2xl px-6 py-4 my-10">
          <p className="m-0 font-medium">Your Balance</p>
          <p className="my-7 text-1xl font-bold">$10,632.00</p>
          <div className="flex">
            <div className="w-1/2 text-[0.85rem] font-medium flex items-center">
              <i className="fa-solid fa-caret-up text-base mr-1 text-[#3AAD87]"></i> $3,250.27
            </div>
            <div className="w-1/2 text-[0.85rem] font-medium flex items-center">
              <i className="fa-solid fa-caret-down text-base mr-1 text-[#E7375E]"></i> $3,250.27
            </div>
          </div>
          <button className="rounded-full flex items-center justify-center text-white w-[40px] h-[40px] bg-[#FE384F] text-xs absolute top-[50%] right-0 translate-x-[50%] -translate-y-[50%]">
            <i className="fa-solid fa-plus"></i>
          </button>
        </div>
        <div className="flex flex-col mb-10">
          <div className="flex justify-between items-center border-b-2 border-solid border-slate-200 pb-3">
            <h3 className="font-bold text-[1.1rem] mb-0">Activity</h3> <button className="uppercase font-bold text-xs text-[#5F5EE8]">See All</button>
          </div>
          <ul className="flex flex-col">
            <li className="flex justify-between items-center pt-6">
              <div className="flex items-center">
                <i className="fa-solid fa-wallet text-white flex items-center justify-center h-[45px] w-[45px] rounded-lg bg-[#5F5EE8] mr-3"></i>
                <div>
                  <h5 className="font-semibold">Withdraw Earning</h5>
                  <p className="mb-0 text-sm text-slate-400 font-medium">12:40 am</p>
                </div>
              </div>
              <span className="font-semibold">$4,120</span>
            </li>
            <li className="flex justify-between items-center pt-6">
              <div className="flex items-center">
                <i className="fa-solid fa-money-check-dollar text-white flex items-center justify-center h-[45px] w-[45px] rounded-lg bg-[#5F5EE8] mr-3"></i>
                <div>
                  <h5 className="font-semibold">Withdraw Earning</h5>
                  <p className="mb-0 text-sm text-slate-400 font-medium">08:25 am</p>
                </div>
              </div>
              <span className="font-semibold">$2,750</span>
            </li>
          </ul>
        </div>
        <div className="flex flex-col">
          <h3 className="font-bold text-[1.1rem] mb-0">Top Categories</h3>
          <p className="text-sm mt-4 mb-6">Explore your top categories and keep shopping with cashback</p>
          <div className="grid grid-cols-2 gap-5">
            <div className="bg-[#FFF3CB] flex flex-col rounded-xl py-5 px-6">
              <i className="fa-solid fa-shoe-prints text-[1.5rem] text-[#FFC500]"></i>
              <h5 className="font-semibold mt-6">Invoices</h5>
              <p>14,450</p>
            </div>
            <div className="bg-[#E1F2EC] flex flex-col rounded-xl py-5 px-6">
              <i className="fa-solid fa-mitten text-[1.5rem] text-[#2EB38B]"></i>
              <h5 className="font-semibold mt-6">Accessories</h5>
              <p>450</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
