import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="mx-auto max-w-[1200px] flex justify-between">
      <Link href="/" className="">
        logo here
      </Link>
      <div className="">navbar here</div>
      <div className="">account here</div>
    </div>
  );
};

export default Header;
