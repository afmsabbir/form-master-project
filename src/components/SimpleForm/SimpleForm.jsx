const SimpleForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submit click this");
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default SimpleForm;
