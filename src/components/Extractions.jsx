import { extractionData } from "../constants";

const Extractions = () => {
  return (
    <div className="flex flex-1">
      <div className="h-screen w-8/12 px-14 py-10 overflow-y-scroll hide-scroll">
        <h2 className="text-[1.9rem] font-bold">Extractions</h2>
        <div className="mt-12">
          <table className="w-full recent-extractions">
            {extractionData?.map((d) => {
              return (
                <tr key={d?.id} className="grid grid-cols-5 gap-3 text-slate-200 border-t-2 border-solid border-slate-200 py-3">
                  <td className="text-primary font-semibold">#{d?.id}</td>
                  <td className="text-slate-500 font-medium">{d?.fileName}</td>
                  <td className="text-slate-500 font-medium">{d?.date}</td>
                  <td className="text-slate-500 font-medium">${d?.amount}</td>
                  <td className={`text-end font-medium ${d?.status}`}>{d?.status}</td>
                </tr>
              );
            })}
          </table>
        </div>
      </div>
      <div className="h-screen w-4/12 px-16 py-10 bg-[#F9F8FD] overflow-y-scroll hide-scroll">
        <h2 className="text-[1.9rem] font-bold">Executions</h2>
        <div className="relative w-[92%] bg-white rounded-2xl px-6 py-4 my-10">
          <p className="m-0 font-medium">Total Invoices Processed</p>
          <p className="my-7 text-1xl font-bold">
            <i className="fa-solid fa-file-lines mr-3"></i>4235
          </p>
          <div className="flex">
            <div className="w-1/2 text-[0.85rem] font-medium flex items-center">
              <i className="fa-solid fa-file-lines mr-1"></i> 650 <i className="fa-solid fa-caret-up text-base ml-1 text-[#3AAD87]"></i>
            </div>
            <div className="w-1/2 text-[0.85rem] font-medium flex items-center">
              <i className="fa-solid fa-file-lines mr-1"></i> 420 <i className="fa-solid fa-caret-down text-base ml-1 text-[#E7375E]"></i>
            </div>
          </div>
          <button className="rounded-full flex items-center justify-center text-white w-[40px] h-[40px] bg-[#FE384F] text-xs absolute top-[50%] right-0 translate-x-[50%] -translate-y-[50%]">
            <i className="fa-solid fa-plus"></i>
          </button>
        </div>
        <div className="flex flex-col">
          <h3 className="font-bold text-[1.1rem] mb-3">Processes</h3>
          <div className="grid grid-cols-2 gap-5">
            <div className="bg-[#E1F2EC] flex flex-col rounded-xl py-5 px-6">
              <i className="fa-solid fa-check text-[1.5rem] text-[#2EB38B]"></i>
              <h5 className="font-semibold mt-6">Executed</h5>
              <p>2450</p>
            </div>
            <div className="bg-[#FFF3CB] flex flex-col rounded-xl py-5 px-6">
              <i className="fa-solid fa-microchip text-[1.5rem] text-[#FFC500]"></i>
              <h5 className="font-semibold mt-6">Running</h5>
              <p>450</p>
            </div>
            <div className="bg-[#ffeccb] flex flex-col rounded-xl py-5 px-6">
              <i className="fa-solid fa-shoe-prints text-[1.5rem] text-[#ffa600]"></i>
              <h5 className="font-semibold mt-6">Canceled</h5>
              <p>45</p>
            </div>
            <div className="bg-[#ffcbcb] flex flex-col rounded-xl py-5 px-6">
              <i className="fa-solid fa-triangle-exclamation text-[1.5rem] text-[#ff1100]"></i>
              <h5 className="font-semibold mt-6">Failed</h5>
              <p>14</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Extractions;
