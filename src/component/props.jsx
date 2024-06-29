import React from 'react'

const props = (props) => {
  return (
    <div className="bg-white gap-4 p-12 h-[60vh] flex flex-col justify-center rounded-br-[20%] max-sm:w-[85%]">
    <p className={props.paragraphstyle}>{props.paragraph}</p>
      <h1 className={props.headingstyle}>{props.heading}</h1>
      <p className={props.paragraph2style}>{props.paragraph2}</p>
      <h1 className={props.heading2style}>{props.heading2}</h1>
      <p className={props.paragraph3style}>{props.paragraph3}</p>
    </div> 
  );
};

export default props
