import React, { useState } from "react";
import { SearchIcon } from "@heroicons/react/solid";
import { useRecoilState } from "recoil";
import { searchState } from "../Atoms/searchAtom";
function Search() {
  const [query, setQuery] = useState("");
  const [sendQ, setSendQ] = useRecoilState(searchState);

  const searchHandler = (e) => {
    e.preventDefault();
    setSendQ(query);
  };
  return (
    <>
      <form onSubmit={(e) => {searchHandler(e)}} className="flex items-center px-3 sm:px-5 w-full  h-[60px] rounded-md sd  space-x-3 sm:space-x-5 border border-gray-300">
        <SearchIcon className="h-6" />
        <input
          type="text"
          placeholder="search github username"
          className="flex-1 h-full outline-none"
          spellCheck="true"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button
          onClick={(e) => {
            searchHandler(e);
          }}
          type="submit"
          className="bg-[#FA932C] p-2 px-5 rounded-lg text-white font-bold"
        >
          Search
        </button>
      </form>
    </>
  );
}

export default Search;
