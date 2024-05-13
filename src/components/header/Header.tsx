type Props = {
  children?: JSX.Element | JSX.Element[] | string;
};

export default function Header(props: Props) {
  return (
    <div className="flex flex-row justify-between p-4 items-center bg-cyan-600 dark:bg-slate-800 text-slate-200 rounded-b-lg">
      <a href="/">
        <img src="/src/assets/logo.png" className="w-[50%] h-auto" />
      </a>
      <div className="flex flex-row gap-4 p-2 md:p-4">
        <p>React tutorial</p>
        {props.children}
      </div>
    </div>
  );
}
