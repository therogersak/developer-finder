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
    <div className="bg-[#F6F8FF] h-screen overflow-hidden">
      <Head>
        <title>Find Developers - therogersak</title>
        <meta name="description" content="find any developer therogersak " />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HomePage data={data} />
      <Elements />
    </div>
  );
}
