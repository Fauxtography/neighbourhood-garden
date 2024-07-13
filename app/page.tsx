import { superPencilFont } from "./ui/fonts";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <header className="px-6 py-4 border-8 border-yellow-950 bg-yellow-500/75 shadow-lg rounded">
        <h1 className={`${superPencilFont.className} text  text-green-900 text-5xl first-letter:text-7xl`}>
          Neighbourhood Gardening
        </h1>
      </header>
    </main>
  );
}
