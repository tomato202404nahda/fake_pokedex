type Props = {
  title: string;
  children: string | JSX.Element | JSX.Element[];
};

export default function Card(props: Props) {
  return (
    <div className="max-w-full md:max-w-[20vw] max-h-[30vh] w-full box-border overflow-y-auto mx-auto rounded-lg border shadow-md shadow-black border-blue-500">
      <div className="bg-black py-4 text-white rounded-t-lg ">
        <h2 className="text-xl text-center">{props.title.toUpperCase()}</h2>
      </div>
      {props.children}
    </div>
  );
}
