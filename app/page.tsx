export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-6 sm:p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Welcome to my portfolio
        </p>
      </div>

      <div className="relative flex place-items-center my-8">
        <h1 className="text-3xl sm:text-4xl font-bold">Dylan Owens</h1>
      </div>

      <div className="mb-8 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-2 lg:text-left gap-8">
        <div className="group rounded-lg border border-transparent px-5 py-4">
          <h2 className="mb-3 text-2xl font-semibold">About Me</h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            I make maps. I make things.
          </p>
        </div>

        <div className="group rounded-lg border border-transparent px-5 py-4">
          <h2 className="mb-3 text-2xl font-semibold">My YouTube Videos</h2>
          <ul className="list-disc pl-5">
            <li><a href="https://youtu.be/Y87dnJ2YoJA" className="text-blue-500 hover:underline">Route Youtube video</a></li>
            <li><a href="https://www.youtube.com/watch?v=iMJURZL6OyY&t=22s" className="text-blue-500 hover:underline">Italy Zoom video</a></li>
            <li><a href="https://youtube.com/your-video-3" className="text-blue-500 hover:underline">Video 3 Title</a></li>
          </ul>

          <h2 className="mb-3 text-2xl font-semibold mt-6">My 3D Models</h2>
          <ul className="list-disc pl-5">
            <li><a href="https://your-3d-model-link-1" className="text-blue-500 hover:underline">Model 1 Title</a></li>
            <li><a href="https://your-3d-model-link-2" className="text-blue-500 hover:underline">Model 2 Title</a></li>
            <li><a href="https://your-3d-model-link-3" className="text-blue-500 hover:underline">Model 3 Title</a></li>
          </ul>
          <h2 className="mb-3 text-2xl font-semibold mt-6">My Maps</h2>
          <ul className="list-disc pl-5">
            <li>
              <a href="/Map-gifs/blueberry_page.tsx" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                Blueberry U.S.
              </a>
            </li>
            <li><a href="/Map-gifs/abbasid_caliphate_page.tsx" className="text-blue-500 hover:underline">Abbasid Caliphate_1200AD</a></li>
            <li><a href="https://your-map-link-3" className="text-blue-500 hover:underline">Map 3 Title</a></li>
          </ul>
        </div>
      </div>
    </main>
  );
}