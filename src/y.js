import React, { useEffect } from "react";
// import X from "./x";
// import App from "./App";

const Y = ({ textCom }) => {

  useEffect(() => {
    
    console.log(textCom)

  }, [ textCom ]);

  return (
    <div>
    <div className="right">
      { textCom }
      </div>
    </div>
  );
};

export default Y;
