import Head from "next/head";
import { useState } from "react";
import { AddCardDialog } from "../components/AddCardDialog";

import { Footer } from "../components/Footer";
import { Form } from "../components/Form";
import { Grid } from "../components/Grid";
import { Nav } from "../components/Nav";

export default function Home() {
  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false);
  const openDialog = () => {
    setIsCreateDialogOpen(true);
  };

  const closeDialog = () => {
    setIsCreateDialogOpen(false);
  };
  return (
    <>
      <AddCardDialog isOpen={isCreateDialogOpen} onDialogClose={closeDialog} />
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
      </Head>
      <div className="flex min-h-screen flex-col ">
        <Nav />
        <main className="pt-20 pl-5 pr-5 flex-1 w-full md:max-w-6xl md:mx-auto">
          <Form onCreateButtonClick={openDialog} />
          <Grid onCreateButtonClick={openDialog} />
        </main>

        <Footer />
      </div>
    </>
  );
}
