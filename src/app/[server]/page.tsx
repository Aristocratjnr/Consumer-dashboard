interface ServerPageProps {
  params: { server: string };
}

export default async function ServerPage({ params }: ServerPageProps) {
  const { server } = params;

  if (!server || server !== "valid-server-name") {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-center">
        <h1 className="text-9xl font-extrabold text-gray-800">404</h1>
        <p className="text-2xl font-semibold text-gray-600 mt-4">
          The server you’re looking for doesn’t exist.
        </p>
        <a
          href="/"
          className="mt-6 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-500"
        >
          Go to Homepage
        </a>
      </div>
    );
  }

  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold">Welcome to Server: {server}</h1>
      <p className="mt-4 text-gray-600">
        This is the page for the server: {server}.
      </p>
    </div>
  );
}
