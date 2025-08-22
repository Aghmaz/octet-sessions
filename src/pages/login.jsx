import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid Email").required("Email Required"),
    password: Yup.string()
      .min(6, "Minimum 6 characters ")
      .required("Password Required"),
  });

  const handleSubmit = async (values, { setError }) => {
    try {
      setLoading(true);
      debugger;
      const response = await axios.post(
        "https://jsonplaceholder.typicode.com/users",
        values
      );
      console.log(response, "response");
      if (response?.data?.id) {
        navigate(`/home/${response.data.id}`);
      }
    } catch (error) {
      setLoading(false);
      setError({ password: "invalid credientials" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>Login</h1>
      {loading ? (
        " API is calling.. "
      ) : (
        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          {({ errors, touched }) => (
            <Form>
              <div>
                <label htmlFor="email">Email</label>
                <Field
                  id="email"
                  name="email"
                  placeholder="jane@acme.com"
                  type="email"
                />
                {touched.email && errors.email && (
                  <div style={{ color: "red" }}>{errors.email}</div>
                )}
                {/* <ErrorMessage
                  name="email"
                  component="div"
                  style={{ color: "red" }}
                /> */}
              </div>
              <div>
                <label htmlFor="password">password</label>
                <Field
                  id="password"
                  name="password"
                  placeholder="please enter your password"
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="error"
                />
              </div>

              <button type="submit">Submit</button>
            </Form>
          )}
        </Formik>
      )}
    </div>
  );
};

export default Login;
