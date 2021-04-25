import Head from "next/head";

import { Footer } from "../components/Footer";
import { Form } from "../components/Form";
import { Grid } from "../components/Grid";
import { Nav } from "../components/Nav";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col ">
      <Nav />
      <main className="pt-20 pl-5 pr-5 flex-1 w-full md:max-w-6xl md:mx-auto">
        <Form />
        <Grid />
      </main>
      <Footer />
    </div>
  );
}
