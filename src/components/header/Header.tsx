export default function Header() {
  return (
    <div className="flex flex-row justify-between p-4 items-center bg-cyan-600 text-slate-200 rounded-b-lg">
      <a href="/">
        <h1 className="text-2xl font-bold">Fake Pokedex</h1>
      </a>
      <p>React tutorial</p>
    </div>
  );
}
