// app/not-found.tsx
export default function NotFound() {
  return (
    <div className="bg-[--dark] text-[--light] flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold">404 - Page Not Found</h1>
      <p className="mt-4 text-lg">
        Sorry, the page you&rsquo;re looking for doesn&rsquo;t exist.
      </p>
      <a href="/" className="mt-6 px-4 py-2 bg-blue-500 text-white rounded-lg">
        Go back to Home
      </a>
    </div>
  );
}
