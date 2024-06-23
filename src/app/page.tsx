export default function Home() {
  return (
    <div className="h-screen dark:text-slate-100 dark:bg-slate-950 p-4 bg-slate-50 text-slate-900 flex flex-col items-center text-center">
      <h1 className="flex font-bold text-5xl sm:text-3xl lg:text-6xl">Hello Tailwind</h1>
      <h2>Rapidly build modern websites without ever leaving your HTML.</h2>
      <p className="p-2 mt-4 dark:text-slate-400">A utility-first CSS framework packed with classes like flex, pt-4, text-center and rotate-90 that can be composed to build any design, directly in your markup.</p>
      <button className="dark:bg-sky-400 bg-gray-700 text-white p-2 rounded font-medium mt-4 hover:bg-sky-600">
        Sign In
      </button>
    </div>
  );
}
