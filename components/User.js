import {
  LocationMarkerIcon,
  MailIcon,
  LinkIcon,
  FireIcon,
} from "@heroicons/react/outline";
import Image from "next/image";
import Link from "next/link";
import { useRecoilState } from "recoil";
import { searchState } from "../Atoms/searchAtom";

function User({ data }) {
  const [username, setusername] = useRecoilState(searchState);

  const date = new Date(data?.created_at);
  const newDate = date.toDateString(4, 10).slice(4, 15);
  return (
    <>
      <div className="w-full h-[80vh] sm:h-auto sd2 rounded-lg p-5 ">
        <div className="flex items-center w-full flex-col sm:flex-row space-y-2 sm:space-y-0">
          <div className="border-4 border-[#FA932C] p-[2px] rounded-full w-[100px] h-[100px]">
            <Image
              src={data?.avatar_url}
              alt="therogersak"
              width={1000}
              height={1000}
              objectFit="contain"
              className="rounded-full"
            />
          </div>
          <div className="flex-1 pl-5">
            <h3 className="text-xl font-bold">{data?.name}</h3>
            <p className="text-gray-600 text-[15px]">@{username}</p>
          </div>
          <div className="font-bold">Joined {newDate}</div>
        </div>

        <div className="flex items-center justify-center flex-col text-center space-y-5 max-w-[500px] ml-auto mt-5 sm:mt-0">
          <div>
            <p>{data?.bio}</p>
          </div>
          <div className="flex items-center justify-evenly space-x-10 bg-[#F9FAFF] w-full max-w-[400px] marker:sd3 border border-gray-200 rounded-md py-2">
            <div className="statis">
              <h3 className="s-name">Repos</h3>
              <p className="s-number">{data?.public_repos}</p>
            </div>

            <div className="statis">
              <h3 className="s-name">Followers</h3>
              <p className="s-number">{data?.followers}</p>
            </div>

            <div className="statis">
              <h3 className="s-name">Following</h3>
              <p className="s-number">{data?.following}</p>
            </div>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-2 sm:flex   sm:items-center sm:justify-evenly space-y-3 sm:space-y-0">
          <div className="div-last">
            <LocationMarkerIcon className="h-6" />
            <p>{data?.location || "Earth"}</p>
          </div>

          <Link
            href={
              !data?.twitter_username
                ? "#"
                : `https://twitter.com/${data?.twitter_username}`
            }
          >
            <a target="_blank" rel="noopener noreferrer" className="div-last">
              <FireIcon className="h-6" />
              Twitter
            </a>
          </Link>

          <Link href={!data?.blog ? "#" : data?.blog}>
            <a target="_blank" rel="noopener noreferrer" className="div-last">
              <LinkIcon className="h-6" />
              <p>Website</p>
            </a>
          </Link>

          <Link href={!data.email ? "#" : `mailto:${data?.email}`}>
            <a target="_blank" rel="noopener noreferrer" className="div-last">
              <MailIcon className="h-6" />
              <p>Email</p>
            </a>
          </Link>
        </div>
      </div>
    </>
  );
}

export default User;
