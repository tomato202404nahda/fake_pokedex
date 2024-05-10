type Props = {
  number?: string;
  title: string;
  children: string | JSX.Element | JSX.Element[];
};

export default function Card(props: Props) {
  return (
    <div className="max-w-full md:max-w-[20vw]  w-full box-border mx-auto rounded-lg border shadow-md shadow-black border-blue-500">
      <div className="bg-black py-4  text-white rounded-t-lg ">
        <div className="flex flex-col text-xl text-center">
          <p>{props.number}</p>
          <h2>{props.title.toUpperCase()}</h2>
        </div>
      </div>
      {props.children}
    </div>
  );
}
