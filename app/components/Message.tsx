// import { JsonView, allExpanded, darkStyles } from 'react-json-view-lite';
import JsonView from '@uiw/react-json-view';

type Message = {
  content: string;
};

const customTheme = {
  '--w-rjv-color': '#9cdcfe',
  '--w-rjv-key-string': '#9cdcfe',
  '--w-rjv-background-color': '#000000ff',
  '--w-rjv-line-color': '#36334280',
  '--w-rjv-arrow-color': '#838383',
  '--w-rjv-edit-color': '#9cdcfe',
  '--w-rjv-info-color': '#9c9c9c7a',
  '--w-rjv-update-color': '#9cdcfe',
  '--w-rjv-copied-color': '#9cdcfe',
  '--w-rjv-copied-success-color': '#28a745',
  '--w-rjv-curlybraces-color': '#d4d4d4',
  '--w-rjv-colon-color': '#d4d4d4',
  '--w-rjv-brackets-color': '#d4d4d4',
  '--w-rjv-quotes-color': '#9cdcfe',
  '--w-rjv-quotes-string-color': '#ce9178',
  '--w-rjv-type-string-color': '#ce9178',
  '--w-rjv-type-int-color': '#b5cea8',
  '--w-rjv-type-float-color': '#b5cea8',
  '--w-rjv-type-bigint-color': '#b5cea8',
  '--w-rjv-type-boolean-color': '#569cd6',
  '--w-rjv-type-date-color': '#b5cea8',
  '--w-rjv-type-url-color': '#3b89cf',
  '--w-rjv-type-null-color': '#569cd6',
  '--w-rjv-type-nan-color': '#859900',
  '--w-rjv-type-undefined-color': '#569cd6',
};

function MessageCard({ content }: Message) {
  const data = JSON.parse(content);
  if (data.stocks) {
    data.stocks = JSON.parse(data.stocks);
  }

  return (
    <div
      className="flex items-center justify-between w-full mt-2"
      onClick={(e) => e.stopPropagation()}
    >
      {/* <p className="text-slate-400 text-start">{content}</p> */}
      <JsonView
        value={data}
        style={{
          textAlign: 'start',
          flex: 1,
          overflow: 'auto',
          ...customTheme,
        }}
        collapsed={1}
        enableClipboard={false}
        displayDataTypes={false}
      />
    </div>
  );
}

export default MessageCard;
