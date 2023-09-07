import { json, redirect, type V2_MetaFunction } from '@remix-run/node';
import { Form, useLoaderData, useNavigation } from '@remix-run/react';
import ElementStatus from '~/components/ElementStatus';

export const meta: V2_MetaFunction = () => {
  return [
    { title: 'IIC2173 Status' },
    {
      name: 'description',
      content: 'Check available services status like, MQTT, APIs, etc.',
    },
  ];
};

type LoaderData = {
  id: number;
  type: string;
  name: string;
  isTesteable: boolean;
  status: 'online' | 'offline' | 'checking';
  url: string | null;
  updatedAt: string;
  messages: {
    id: number;
    content: string;
    serviceId: number;
    createdAt: string;
  }[];
  _count: {
    messages: number;
  };
};

export const action = async () => {
  const pingResponse = await fetch(`${process.env.API_URL}/ping`);
  if (!pingResponse.ok) {
    throw new Response('server offline', { status: 500 });
  }

  await new Promise((resolve) => setTimeout(resolve, 1000));

  return redirect('/');
};

export const loader = async () => {
  const servicesResponse = await fetch(`${process.env.API_URL}`);
  if (!servicesResponse.ok) {
    throw new Response('server offline', { status: 500 });
  }

  const services = await servicesResponse.json();

  return json(services);
};

export default function Index() {
  const data = useLoaderData<LoaderData[]>();
  const navigation = useNavigation();

  return (
    <main className="p-8">
      <h1 className="text-white font-poppins text-6xl text-center mb-10">
        IIC2173
      </h1>
      <Form
        className="w-full flex mb-10 items-center justify-center"
        method="post"
      >
        <div className="bg-gradient-to-br from-g to-b p-[1px] rounded-lg relative">
          <div className="absolute left-0 top-0 bg-sky-800 w-full h-full blur-xl -z-10"></div>
          <button
            type="submit"
            disabled={
              navigation.state === 'submitting' ||
              navigation.state === 'loading'
            }
            className="disabled:text-slate-600 disabled:cursor-not-allowed disabled:bg-slate-800 mx-auto bg-black px-6 py-3 rounded-lg hover:bg-transparent hover:text-black transition-all duration-500 ease-in-out text-white font-semibold"
          >
            Update
          </button>
        </div>
      </Form>
      <div className="flex flex-col gap-5">
        {data.map((element) => (
          <ElementStatus
            key={element.id}
            pings={element._count.messages}
            status={
              navigation.state === 'submitting' ||
              navigation.state === 'loading'
                ? 'checking'
                : element.status
            }
            lastChecked={element.updatedAt}
            elementName={element.type}
            description={element.name}
            isTesteable={element.isTesteable}
          />
        ))}
      </div>
    </main>
  );
}

export function ErrorBoundary() {
  return (
    <main className="p-8">
      <h1 className="text-white font-poppins text-6xl text-center mb-10">
        IIC2173
      </h1>
      <Form className="w-full flex mb-10 items-center justify-center">
        <div className="bg-gradient-to-br from-g to-b p-[1px] rounded-lg relative">
          <div className="absolute left-0 top-0 bg-sky-800 w-full h-full blur-xl -z-10"></div>
          <button
            type="submit"
            className="disabled:text-slate-600 disabled:bg-slate-800 mx-auto bg-black px-6 py-3 rounded-lg hover:bg-transparent hover:text-black transition-all duration-500 ease-in-out text-white font-semibold"
          >
            Update
          </button>
        </div>
      </Form>

      <ElementStatus
        pings={0}
        status={'offline'}
        lastChecked={new Date().toISOString()}
        elementName={'IIC2173 Server'}
        description={'Server is offline'}
        isTesteable={false}
      />
    </main>
  );
}
