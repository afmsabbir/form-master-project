import Friend from "../Friend/Friend";

const Cousin = ({ name }) => {
  return (
    <div>
      <p>{name}</p>
      {name === "Sana" && <Friend></Friend>}
    </div>
  );
};

export default Cousin;
