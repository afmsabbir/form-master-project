import "./App.css";
import Grandpa from "./components/Grandpa/Grandpa";
// import ReuseableForm from "./components/ReuseableForm/ReuseableForm";
// import HookForm from "./components/HookForm/HookForm";
// import RefForm from "./components/RefForm/RefForm";
// import StateForm from './components/StateForm/StateForm'
// import SimpleForm from './components/SimpleForm/SimpleForm'

function App() {
  // const handleSingUpSubmit = (data) => {
  //   console.log("sing up ", data);
  // };
  // const handleUpdateProfile = (data) => {
  //   console.log("Update Profile ", data);
  // };
  return (
    <div>
      <Grandpa></Grandpa>
      {/* <h1>Vite + React</h1> */}
      {/* <SimpleForm></SimpleForm> */}
      {/* <StateForm></StateForm> */}
      {/* <RefForm></RefForm> */}
      {/* <HookForm></HookForm> */}
      {/* <ReuseableForm formTitle={"Sign Up"} handleSubmit={handleSingUpSubmit}>
        <div>
          <h2>Sign Up</h2>
          <p>Please sing up.</p>
        </div>
      </ReuseableForm>
      <ReuseableForm
        formTitle={"Update Profile"}
        submitBtnText={"Update"}
        handleSubmit={handleUpdateProfile}
      >
        <div>
          <h2>Profile Update</h2>
          <p>Please Update profile always</p>
        </div>
      </ReuseableForm> */}
    </div>
  );
}

export default App;
