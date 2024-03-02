import React from "react";

const Message = () => {
  return (
    <div className="my-5">
      <div className="flex items-center">
        <input
          type="text"
          className="messageInput w-[720px] -mr-5 border-none outline-none"
        />
      </div>
    </div>
  );
};

export default Message;
