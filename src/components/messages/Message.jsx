
const Message = () => {
  return (
    <div className="chat chat-end">
      <div className="avatar chat-image">
        <div className="w-10 rounded-full">
          <img src="" alt="img" />
        </div>
      </div>
      <div className={"chat-bubble text-white bg-blue-500"}>
        Hi ! What is Up{" "}
      </div>
      <div className="chat-footer opacity-50 text-xs flex gap-1 items-center">10:30 PM</div>
    </div>
  );
};

export default Message;
