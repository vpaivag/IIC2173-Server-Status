import { useState } from 'react';
import Status from './Status';
import StatusInfo from './StatusInfo';

type ElementStatusProps = {
  status: 'online' | 'offline' | 'checking';
  elementName: string;
  description?: string;
  lastChecked: string;
  pings: number;
  isTesteable?: boolean;
};

function ElementStatus({
  status,
  description,
  elementName,
  lastChecked,
  pings,
  isTesteable,
}: ElementStatusProps) {
  const [isMenu, setIsMenu] = useState(false);

  const handleClick = () => {
    setIsMenu(!isMenu);
  };

  return (
    // <div className=" bg-gradient-to-r from-cyan-300 to-sky-700 p-[1px] w-[90%] md:w-3/5 mx-auto rounded-lg transition-all">
    <button
      onClick={handleClick}
      className="bg-black flex flex-col gap-3 items-center justify-between  px-5 py-3 border rounded-lg border-slate-600 w-[95%] md:w-3/5 mx-auto hover:border-slate-300 duration-300 transition-colors ease-in-out relative"
    >
      <div className="absolute left-0 top-0 bg-slate-800 w-full h-full blur-xl -z-10"></div>
      <div className="flex items-center justify-between w-full">
        <div className="flex gap-5 items-center">
          <h1 className="text-lg font-semibold flex items-center">
            <span className="material-symbols-rounded">
              {isMenu ? 'expand_more' : 'chevron_right'}
            </span>
            {elementName}
          </h1>
          <p className="text-slate-400 italic">{description}</p>
        </div>
        <Status status={status} />
      </div>
      {isMenu && (
        <StatusInfo
          lastChecked={lastChecked}
          pings={pings}
          isTesteable={isTesteable}
        />
      )}
    </button>
    // </div>
  );
}

export default ElementStatus;
