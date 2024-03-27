import Special from "../Special/Special";

const Myself = ({asset}) => {
  return (
    <div>
      <p>Myself</p>
      <section className="flex">
        <Special asset={asset}></Special>
      </section>
    </div>
  );
};

export default Myself;
