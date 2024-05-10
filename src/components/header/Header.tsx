export default function Header() {
  return (
    <div className="flex flex-row justify-between p-4 items-center bg-cyan-600 text-slate-200 rounded-b-lg">
      <a href="/">
        <img src="/src/assets/logo.png" className="w-[50%] h-auto" />
      </a>
      <p>React tutorial</p>
    </div>
  );
}
