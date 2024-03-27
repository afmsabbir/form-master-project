import Cousin from "../Cousin/Cousin";

const Aunty = () => {
  return (
    <div>
      <h2>This is Aunty</h2>
      <section className="flex">
        <Cousin name={"marsha"}></Cousin>
        <Cousin name={"rabia"}></Cousin>
      </section>
    </div>
  );
};

export default Aunty;
