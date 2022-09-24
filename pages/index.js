import React, { useState, useEffect } from "react";
import Head from "next/head";
import HomePage from "../components/HomePage";
import { useRecoilState } from "recoil";
import { searchState } from "../Atoms/searchAtom";
import Elements from "../components/Elements";

export default function Home() {
  const [query, setQuery] = useRecoilState(searchState);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`https://api.github.com/users/${query}`)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [query]);
  console.log(query);
  console.log(data);
  return (
    <div className="bg-[#F6F8FF]">
      <Head>
        <title>Developer Finder - therogersak</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        ></meta>
        <meta
          name="keywords"
          content="dev, developer, developers, developer finder, dev finder, github user finder, github, therogersak, rogers, rogersak, programmers, corders, code, coding"
        />
        <meta property="og:title" content="Developer Finder - therogersak" />
        <meta property="og:type" content="developers.txt" />
        <meta property="og:url" content="http://developerfinder.vercel.app/" />
        <meta
          property="og:image"
          content="https://github.com/therogersak/portfolie-using-next-js/raw/main/portfolio.png"
        />
        <meta charSet="utf-8"></meta>
        <link rel="icon" href="/favicon.ico"></link>
      </Head>
      <HomePage data={data} />
      <Elements />
    </div>
  );
}
