import Cousin from "../Cousin/Cousin";

const Uncle = () => {
  return (
    <div>
      <h2>This is Uncle</h2>
      <section className="flex">
        <Cousin name={"Ratan"}></Cousin>
        <Cousin name={"Sana"}></Cousin>
      </section>
    </div>
  );
};

export default Uncle;
