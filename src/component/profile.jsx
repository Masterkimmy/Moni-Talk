import React from "react";
import Props from "../component/props";

const Profile = () => {
  return  (
    <div className="flex items-center justify-around bg-slate-300 h-[70vh] w-[100%] max-sm:flex-col  max-sm:h-[200vh] max-sm:justify-center gap-12">
      <Props
        paragraphstyle="font-bold text-blue-500"
        paragraph="Freebies"
        headingstyle="font-bold w-[18vw] max-sm:w-[60vw]"
        heading="Avacoin Token Allocation: Changes To Note Ahead Of Listing"
        paragraph2style="text-blue-700 font-medium"
        paragraph2="ErickssonDGreat / May 29, 2024"
        heading2style=" text-gray-500 w-[17.7vw] max-sm:w-[60vw]"
        heading2="Avacoin Token Allocation has taken place alongside many other features such as staking, a dedicated tasks page, reforms in referral"
        paragraph3style="text-blue-600 font-medium"
        paragraph3="Read Post »"
      />

      <Props
        paragraphstyle="font-bold text-blue-500"
        paragraph="Freebies"
        headingstyle="font-bold w-[17vw] max-sm:w-[67vw]"
        heading="W-Coin Mining: What to Know About The Clicker Game"
        paragraph2style="text-blue-700 font-medium"
        paragraph2="ErickssonDGreat / May 29, 2024"
        heading2style=" text-gray-700 w-[17.7vw] max-sm:w-[60vw]"
        heading2="W-Coin is a new clicker game that still claims to be offering what we’ve seen on Notcoin and many other"
        paragraph3style="text-blue-600 font-medium"
        paragraph3="Read Post »"
      />

      <Props
        paragraphstyle="font-bold text-blue-500"
        paragraph="Online Reviews"
        headingstyle="font-bold w-[17vw] max-sm:w-[50vw]"
        heading="Cex.io Power Tap: The Part No One Talks About"
        paragraph2style="text-blue-700 font-medium"
        paragraph2="ErickssonDGreat /May 29, 2024"
        heading2style=" text-gray-500 w-[17.7vw] max-sm:w-[56vw]"
        heading2="Cex.io Power Tap In A Nutshell  Cex power tapping is a great looking clicker game on telegram and lots of"
        paragraph3style="text-blue-600 font-medium"
        paragraph3="Read Post »"
      />
    </div>
  );
};

export default Profile;
