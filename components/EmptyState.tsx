import PlusIcon from "../assets/plus.svg";
import EmptyPlaceholderSVG from "../assets/empty-placeholder.svg";

interface IEmptyState {
  onCreateButtonClick: () => void;
}
export function EmptyState({ onCreateButtonClick }: IEmptyState) {
  return (
    <div className="flex flex-col items-center mt-16 mb-16">
      <EmptyPlaceholderSVG />
      <p className="font-medium text-center text-xl">
        Create a time <br /> card
      </p>
      <p className="text-center mt-4 max-w-xs">
        Time Cards can track <span className="font-bold">time passed</span> or
        <span className="font-bold"> time left</span> for any thing important to
        you
      </p>
      <button
        onClick={onCreateButtonClick}
        className="mt-11  pl-5 pr-5 bg-[#476D1A]  h-[44px] rounded-[10px] text-white flex justify-center items-center  text-[16px] "
      >
        <PlusIcon className="mr-3" />
        <span>Add Card</span>
      </button>
    </div>
  );
}
