import React from 'react'
import Props from '../component/props'

const Section = () => {
  return (
    <div className="flex items-center justify-around bg-slate-300 h-[70vh] w-[100%] max-sm:flex-col max-sm:gap-10 max-sm:h-[200vh] max-sm:justify-center -z-10  ">
      <Props
        paragraphstyle="font-bold text-blue-500"
        paragraph="Freebies"
        headingstyle="font-bold w-[20vw] max-sm:w-[67vw]"
        heading="Explainer: Understanding What Catizen is All About (Review)"
        paragraph2style="text-blue-500 font-medium"
        paragraph2="ErickssonDGreat / June 16, 2024"
        heading2style=" text-gray-500 w-[17.7vw] max-sm:w-[67vw]"
        heading2="Catizen is a TON based game that allows players earn some in-game points that would be later used for airdrop […]"
        paragraph3style="text-blue-600 font-medium"
        paragraph3="Read Post »"
      />

      <Props
        paragraphstyle="font-bold text-blue-500"
        paragraph="Online Reviews"
        headingstyle="font-bold w-[17vw] max-sm:w-[67vw]"
        heading="Ember Fund: My Experience After 6 Months Of Mining"
        paragraph2style="text-blue-500 font-medium"
        paragraph2="ErickssonDGreat / June 16, 2024"
        heading2style=" text-gray-500 w-[17.7vw] max-sm:w-[68vw]"
        heading2="Ember Fund is a Bitcoin mining application that actually pays it’s users real money after every month of mining. It"
        paragraph3style="text-blue-600 font-medium"
        paragraph3="Read Post »"
      />

      <Props
        paragraphstyle="font-bold text-blue-500"
        paragraph="Freebies"
        headingstyle="font-bold w-[17vw] max-sm:w-[67vw]"
        heading="Pixeltap by Pixelverse: Worth Giving A Try? (Full Details)"
        paragraph2style="text-blue-500 font-medium"
        paragraph2="ErickssonDGreat / June 16, 2024"
        heading2style=" text-gray-500 w-[17.7vw] max-sm:w-[66vw]"
        heading2="Pixeltap by Pixelverse is a solid telegram clicker game I must confess and it’s interface is quite clean. Though there […]"
        paragraph3style="text-blue-600 font-medium"
        paragraph3="Read Post »"
      />
    </div>
  );
}

export default Section
