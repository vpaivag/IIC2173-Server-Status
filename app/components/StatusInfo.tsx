import { useState } from 'react';
import MessageCard from './Message';

type StatusInfoProps = {
  lastChecked: string;
  pings: number;
  isTesteable?: boolean;
  lastMessage: {
    content: string;
    createdAt: string;
  };
};

function StatusInfo({
  lastChecked,
  pings,
  isTesteable,
  lastMessage,
}: StatusInfoProps) {
  const [isMenu, setIsMenu] = useState(false);

  const handleClick = (e: any) => {
    e.preventDefault();
    e.stopPropagation();

    setIsMenu(!isMenu);
  };

  return (
    <div className="flex flex-col gap-3 md:gap-0 items-center justify-between w-full border-t border-slate-600 pt-3">
      <div className="flex items-center justify-between w-full">
        <p className="text-slate-400 text-start">
          Last checked at{' '}
          <span className="font-bold">
            {new Date(lastChecked).toLocaleTimeString('es-CL') +
              ' ' +
              new Date(lastChecked).toLocaleDateString('es-CL')}
          </span>
        </p>
      </div>
      <div className="flex items-center justify-between w-full">
        <p className="text-slate-400">
          {isTesteable ? (
            <>
              Pinged <span className="font-bold">{pings}</span> times
            </>
          ) : (
            <>
              Saved messages <span className="font-bold">{pings}</span>
            </>
          )}
        </p>
      </div>
      <div className="flex items-center justify-between w-full">
        <p className="text-slate-400">
          {isTesteable ? (
            <></>
          ) : (
            <>
              Last message received at{' '}
              <span className="font-bold">
                {new Date(lastMessage?.createdAt).toLocaleTimeString('es-CL') +
                  ' ' +
                  new Date(lastMessage?.createdAt).toLocaleDateString('es-CL')}
              </span>
            </>
          )}
        </p>
      </div>
      <div className="flex items-center justify-between w-full">
        {isTesteable ? (
          <></>
        ) : (
          <>
            <button
              type="button"
              onClick={handleClick}
              className="text-slate-400 border border-slate-400 px-3 py-1 rounded-lg hover:bg-white hover:text-black group-hover:border-white transition-all duration-300 ease-in-out mt-2"
            >
              {!isMenu ? 'See last message' : 'Hide last message'}
            </button>
          </>
        )}
      </div>
      {isMenu ? <MessageCard content={lastMessage.content} /> : <></>}
    </div>
  );
}

export default StatusInfo;
