import { useState } from "react";

const StateForm = () => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [name, setName] = useState(null);
  const [error, setError] = useState('')
  const handleSubmit = (e) => {
    e.preventDefault();
    if(password.length < 8){
        setError('must be 8 character')
    }
    else{
        setError('')
    }
    console.log(email, password, name);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePassChange = (e) => {
    setPassword(e.target.value);
  };
  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input onChange={handleNameChange} type="text" name="name" />
        <br />
        <input onChange={handleEmailChange} type="email" name="email" id="" />
        <br />
        <input onChange={handlePassChange} type="password" name="password" required/>
        <br />
        <input type="submit" value="Submit" />
        {
            error && <p>{error}</p>
        }
      </form>
    </div>
  );
};

export default StateForm;
