import { useMemo } from "react";
import { superPencilFont } from "./ui/fonts";
import dynamic from "next/dynamic";


export default function Home() {
  const Map = useMemo(() => dynamic(
    () => import('./ui/map.component'),
    { 
      loading: () => <p>A map is loading</p>,
      ssr: false
    }
  ), [])

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <header className="px-6 py-4 border-8 border-yellow-950 bg-yellow-500/75 shadow-lg rounded">
        <h1 className={`${superPencilFont.className} text  text-green-900 text-5xl first-letter:text-7xl`}>
          Neighbourhood Gardening
        </h1>
      </header>
      <div className="bg-white-700 mx-auto my-5 w-[98%] h-[480px]">
        <Map posix={[4.79029, -75.69003]}/>
      </div>
    </main>
  );
}
