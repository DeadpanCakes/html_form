import SignUpForm from "./components/SignUpForm/SignUpForm";
import PageFooter from "./components/PageFooter/PageFooter";
import PageHeader from "./components/PageHeader/PageHeader";
import "./App.css";

function App() {
  return (
    <div className="App">
      <PageHeader />
      <SignUpForm />
      <PageFooter />
    </div>
  );
}

export default App;
