type PingProps = {
  type?: 'success' | 'error' | 'warning' | 'info';
  size?: 'sm' | 'md' | 'lg';
};

function Ping({ type, size }: PingProps) {
  const types = new Map([
    ['success', ' bg-green-500'],
    ['error', ' bg-red-500'],
    ['warning', ' bg-yellow-500'],
    ['info', ' bg-blue-500'],
  ]);

  const sizes = new Map([
    ['sm', ' h-3 w-3'],
    ['md', ' h-4 w-4'],
    ['lg', ' h-5 w-5'],
  ]);

  if (!size) {
    size = 'md';
  }

  if (!type) {
    type = 'success';
  }

  const color = types.get(type);
  const dimensions = sizes.get(size);

  return (
    <span className={'relative flex' + dimensions}>
      <span
        className={
          ' absolute animate-ping inline-flex h-full w-full rounded-full opacity-75' +
          color
        }
      ></span>
      <span
        className={'relative inline-flex rounded-full' + color + dimensions}
      ></span>
    </span>
  );
}

export default Ping;
