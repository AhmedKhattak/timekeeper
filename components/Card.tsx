import CardMenu from "../assets/card-menu.svg";

export function Card() {
  return (
    <div className="border-[3px] border-[#EAEAEA] rounded-[10px] p-5 bg-white mb-5 relative">
      <CardMenu className="absolute right-4" />
      <p className="text-sm font-bold line-clamp-2">
        Give Ielts Exam as soon as possible
      </p>
      <div className="flex mt-7">
        <div className="text-4xl font-bold mr-4">
          <span className="mr-[6px]">10</span>
          <span className="text-sm font-semibold">Years</span>
        </div>

        <p className="text-4xl font-bold">
          <span className="mr-[6px]">12</span>
          <span className="text-sm font-semibold">Months Left</span>
        </p>
      </div>
      <div className="flex justify-between mt-4 text-sm font-semibold text-[#5C5C5C]">
        <p className="text-center">
          7 <br /> days
        </p>
        <div className=" border-r-2 "></div>

        <p className="text-center">
          12 <br /> Hours
        </p>
        <div className=" border-r-2 "></div>
        <p className="text-center ">
          45 <br /> Minutes
        </p>
      </div>
    </div>
  );
}
