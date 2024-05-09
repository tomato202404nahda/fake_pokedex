export default function NameCard({ props }) {
  return (
    <>
      <div className="rounded-lg w-full md:w-1/4 md:hover:w-1/3 transition-all ease-in-out bg-black text-white px-4 py-2">
        <h1>
          {props.number}: {props.name}
        </h1>
      </div>
    </>
  );
}
