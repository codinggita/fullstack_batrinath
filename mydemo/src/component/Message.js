import React, { useState } from "react";



function Message(props) {
    
  let [msg ,setmsg] = useState(`Hi ${props.name}`);
  return (
    <div>
      <h1>{msg}</h1>
      <button onClick={()=>{setmsg(`Thanks for effort ${props.name}`)}}>Welcome {props.name}</button>
    </div>
  );
}

export default Message;
