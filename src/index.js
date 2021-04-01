import { useFormik } from "formik";
import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";

const SignupForm = () => {
  const formik = useFormik({
    initialValues: { email: "" },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    }
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <input
        id="email"
        name="email"
        type="email"
        placeholder="Email"
        onChange={formik.handleChange}
        value={formik.values.email}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

function App() {
  return <SignupForm />;
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
