import Logo from "../assets/logo.svg";

export function Nav() {
  return (
    <nav className="border-b-2 border-[#EAEAEA] h-14 bg-white fixed left-0 right-0 flex justify-between">
      <div className="flex items-center pl-2 pr-2">
        <Logo width={31} height={31} className="mr-1" />
        <span className="font-bold">TimeKeeper</span>
      </div>
    </nav>
  );
}
