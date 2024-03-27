import { useContext } from "react";
import Cousin from "../Cousin/Cousin";
import { MoneyContext } from "../Grandpa/Grandpa";

const Aunty = () => {
  const [money, setMoney] = useContext(MoneyContext);
  return (
    <div>
      <h2>This is Aunty</h2>
      <section className="flex">
        <Cousin name={"marsha"}></Cousin>
        <Cousin name={"rabia"}></Cousin>
        <p>Money: {money}</p>
        <button onClick={() => setMoney(money + 100)}>Add</button>
      </section>
    </div>
  );
};

export default Aunty;
