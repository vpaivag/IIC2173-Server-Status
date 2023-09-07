type StatusInfoProps = {
  lastChecked: string;
  pings: number;
  isTesteable?: boolean;
};

function StatusInfo({ lastChecked, pings, isTesteable }: StatusInfoProps) {
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
    </div>
  );
}

export default StatusInfo;
