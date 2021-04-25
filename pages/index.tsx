import Head from "next/head";
import { Nav } from "../components/Nav";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Nav />
    </div>
  );
}
