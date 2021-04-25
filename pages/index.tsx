import Head from "next/head";
import { Card } from "../components/Card";
import { Form } from "../components/Form";
import { Nav } from "../components/Nav";
import Logo from "../assets/logo.svg";
import GithubIcon from "../assets/github.svg";
import LinkedinIcon from "../assets/linkedin.svg";
import DevToIcon from "../assets/devto.svg";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col ">
      <Nav />
      <main className="pt-16 pl-5 pr-5 flex-1">
        <Form />
        <div className="mt-5">
          {[1, 2].map(() => (
            <Card />
          ))}
        </div>
      </main>
      <footer className="bg-[#476D1A] p-5">
        <div className="flex">
          <div className="flex-1 mr-7">
            <div className="flex items-center p-1 pl-2 pr-2 bg-white rounded-[5px] mb-2">
              <Logo width={20} height={20} className="mr-2" />
              <span className="font-bold text-xs">TimeKeeper</span>
            </div>
            <p className="text-[10px] text-white font-semibold">
              Organize your future plans
            </p>
          </div>
          <div className="flex-1 flex  justify-between items-start">
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
    </div>
  );
}
