import SearchIcon from "../assets/search.svg";
import PlusIcon from "../assets/plus.svg";
import FilterIcon from "../assets/filter.svg";

export function Form() {
  return (
    <div>
      <p className="font-semibold mb-2">Timers</p>
      <form>
        <div className="w-full rounded-[10px] border-2 h-10 border-[#EAEAEA] text-sm relative">
          <input
            placeholder="Search Cards"
            type="text"
            className=" outline-none appearance-none w-full rounded-[10px] h-full  pl-2 pr-9 font-medium  transition border-transparent "
          />
          <SearchIcon className="absolute right-2 top-[7px]" />
        </div>
      </form>
      <div className="flex mt-3 pb-5 border-b-[1px] border-[#D3D3D3]">
        <button className="flex-1 bg-[#476D1A] h-10 rounded-[10px] text-white flex justify-center items-center mr-1 text-[14px] ">
          <PlusIcon className="mr-3" />
          <span>Add Card</span>
        </button>
        <button className="flex-1  h-10 ml-1 border-4 border-[#D3D3D3] rounded-[10px] flex justify-center items-center text-[14px]">
          <span>Filter</span>
          <FilterIcon className="ml-3" />
        </button>
      </div>
    </div>
  );
}
