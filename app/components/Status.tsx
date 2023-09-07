import Ping from './Ping';

type StatusProps = {
  status: 'online' | 'offline' | 'checking';
};

type StatusMap = {
  color: string;
  ping: 'success' | 'error' | 'warning' | 'info';
};

function Status({ status }: StatusProps) {
  const statusMap = new Map<StatusProps['status'], StatusMap>([
    ['online', { color: ' border-green-500', ping: 'success' }],
    ['offline', { color: ' border-red-500', ping: 'error' }],
    ['checking', { color: ' border-yellow-400', ping: 'warning' }],
  ]);
  return (
    <div
      className={
        'flex items-center gap-4 md:border-2 rounded-full md:px-4 md:py-2 ' +
        statusMap.get(status)?.color
      }
    >
      <Ping type={statusMap.get(status)?.ping} size="md" />
      <p className="text-sm text-slate-400 hidden md:block">{status}</p>
    </div>
  );
}

export default Status;
