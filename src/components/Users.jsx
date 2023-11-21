import { usersData } from "../constants";

const Users = () => {
  return (
    <div className="flex flex-1">
      <div className="h-screen w-8/12 px-14 py-10 overflow-y-scroll hide-scroll">
        <h2 className="text-[1.9rem] font-bold">Users</h2>
        <div className="mt-12">
          <table className="w-full recent-extractions">
            {usersData?.map((d) => {
              return (
                <tr key={d?.id} className="grid grid-cols-4 gap-3 text-slate-200 border-t-2 border-solid border-slate-200 py-3">
                  <td className="text-primary font-semibold">#{d?.id}</td>
                  <td className="text-slate-500 font-medium">{d?.username}</td>
                  <td className="text-slate-500 font-medium">{d?.mobile}</td>
                  <td className="text-slate-500 font-medium">{d?.lastActive}</td>
                </tr>
              );
            })}
          </table>
        </div>
      </div>
      <div className="h-screen w-4/12 px-16 py-10 bg-[#F9F8FD] overflow-y-scroll hide-scroll">
        <h2 className="text-[1.9rem] font-bold">User Summary</h2>
        <div className="relative w-[92%] bg-white rounded-2xl px-6 py-4 my-10">
          <p className="m-0 font-medium">Total Users</p>
          <p className="my-7 text-1xl font-bold">4235</p>
          <div className="flex">
            <div className="w-1/2 text-[0.85rem] font-medium flex items-center">
              <i className="fa-solid fa-caret-up text-base mr-1 text-[#3AAD87]"></i> 10
            </div>
            <div className="w-1/2 text-[0.85rem] font-medium flex items-center">
              <i className="fa-solid fa-caret-down text-base mr-1 text-[#E7375E]"></i> 15
            </div>
          </div>
          <button className="rounded-full flex items-center justify-center text-white w-[40px] h-[40px] bg-[#FE384F] text-xs absolute top-[50%] right-0 translate-x-[50%] -translate-y-[50%]">
            <i className="fa-solid fa-plus"></i>
          </button>
        </div>
        <div className="flex flex-col">
          <h3 className="font-bold text-[1.1rem] mb-3">Stats</h3>
          <div className="grid grid-cols-2 gap-5">
            <div className="bg-[#E1F2EC] flex flex-col rounded-xl py-5 px-6">
              <i className="fa-solid fa-check text-[1.5rem] text-[#2EB38B]"></i>
              <h5 className="font-semibold mt-6">Active</h5>
              <p>1524</p>
            </div>
            <div className="bg-[#FFF3CB] flex flex-col rounded-xl py-5 px-6">
              <i className="fa-solid fa-microchip text-[1.5rem] text-[#FFC500]"></i>
              <h5 className="font-semibold mt-6">Deactivated</h5>
              <p>27</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Users;
