import Logo from "../assets/logo.svg";
import GithubIcon from "../assets/github.svg";
import LinkedinIcon from "../assets/linkedin.svg";
import DevToIcon from "../assets/devto.svg";
import { useMediaQuery } from "react-responsive";

export function Footer() {
  const isTabletSize = useMediaQuery({ query: "(min-width: 892px)" });

  if (isTabletSize) {
    return (
      <footer className="bg-[#476D1A] p-10">
        <div className="flex md:max-w-7xl md:mx-auto">
          <div className="mr-7">
            <div className="inline-flex items-center self-start p-2 pl-4 pr-4 bg-white rounded-[5px] mb-2">
              <Logo width={30} height={30} className="mr-2" />
              <span className="font-bold text-base ">TimeKeeper</span>
            </div>
            <p className="text-white font-semibold">
              Organize your future plans
            </p>
          </div>
          <div className="flex-1 flex flex-col">
            <div className="flex items-center justify-between mb-4">
              <p className="text-white font-medium  ">
                Designed and developed in Islamabad by Ahmed Rafiullah
              </p>
              <div className="space-x-4 flex items-center">
                <DevToIcon />
                <LinkedinIcon />
                <GithubIcon />
              </div>
            </div>
            <div className="flex">
              <iframe
                src="https://ghbtns.com/github-btn.html?user=AhmedKhattak&repo=covid-19-dashboard-react&type=star&count=true"
                frameBorder="0"
                scrolling="0"
                width="80"
                height="20"
                title="GitHub"
              ></iframe>

              <iframe
                style={{ marginLeft: "15px" }}
                src="https://ghbtns.com/github-btn.html?user=AhmedKhattak&repo=covid-19-dashboard-react&type=watch&count=true&v=2"
                frameBorder="0"
                scrolling="0"
                width="120"
                height="20"
                title="GitHub"
              ></iframe>
            </div>
          </div>
        </div>
      </footer>
    );
  }

  return (
    <footer className="bg-[#476D1A] p-5">
      <div className="flex">
        <div className="flex-1 mr-7">
          <div className="inline-flex items-center self-start p-1 pl-2 pr-2 bg-white rounded-[5px] mb-2">
            <Logo width={20} height={20} className="mr-2" />
            <span className="font-bold text-xs">TimeKeeper</span>
          </div>
          <p className="text-xs text-white font-semibold">
            Organize your future plans
          </p>
        </div>
        <div className="flex-1 flex  space-x-4 items-start justify-end">
          <DevToIcon />
          <LinkedinIcon />
          <GithubIcon />
        </div>
      </div>
      <p className="text-white font-medium text-sm mt-4">
        Designed and developed in Islamabad by Ahmed Rafiullah
      </p>
      <div className="flex items-center mt-5">
        <iframe
          src="https://ghbtns.com/github-btn.html?user=AhmedKhattak&repo=covid-19-dashboard-react&type=star&count=true"
          frameBorder="0"
          scrolling="0"
          width="80"
          height="20"
          title="GitHub"
        ></iframe>

        <iframe
          style={{ marginLeft: "15px" }}
          src="https://ghbtns.com/github-btn.html?user=AhmedKhattak&repo=covid-19-dashboard-react&type=watch&count=true&v=2"
          frameBorder="0"
          scrolling="0"
          width="120"
          height="20"
          title="GitHub"
        ></iframe>
      </div>
    </footer>
  );
}
