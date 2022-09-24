import React from "react";
import Image from "next/image";
function Elements() {
  return (
    <>
      <div className="hidden lgnpm run:block">
        <div className="fixed top-[10%] left-[5%] w-[10vw]">
          <Image src="/emoji-1.png" alt="emoji" width={1000} height={1000} />
        </div>

        <div className="fixed top-[5%] right-20 w-[10vw]">
          <Image src="/emoji-2.png" alt="emoji" width={1000} height={1000} />
        </div>

        <div className="fixed bottom-10 left-20 w-[10vw]">
          <Image src="/emoji-3.png" alt="emoji" width={1000} height={1000} />
        </div>

        <div className="fixed bottom-[5%] right-[10%] w-[10vw]">
          <Image src="/emoji-4.png" alt="emoji" width={1000} height={1000} />
        </div>
      </div>
    </>
  );
}

export default Elements;
