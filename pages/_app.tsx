import "tailwindcss/tailwind.css";
import { NextSeo } from "next-seo";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <NextSeo
        title="TimeKeeper"
        description="Track time passed or time left for things that are important to you!"
        canonical="https://timekeeper-beta.vercel.app/"
        openGraph={{
          url: "https://timekeeper-beta.vercel.app/",
          title: "TimeKeeper",
          type: "content",
          description:
            "Track time passed or time left for things that are important to you!",
          images: [
            {
              url: `https://timekeeper-beta.vercel.app/site-img.png`,
              width: 1200,
              height: 628,
              alt: "TimeKeeper site image",
            },
          ],
          site_name: "TimeKeeper",
        }}
        twitter={{
          cardType: "summary_large_image",
        }}
      />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
