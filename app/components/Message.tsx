type Message = {
  content: string;
};

function MessageCard({ content }: Message) {
  console.log(JSON.parse(content));

  return (
    <div className="flex items-center justify-between w-full mt-2">
      <p className="text-slate-400 text-start">{content}</p>
    </div>
  );
}

export default MessageCard;
