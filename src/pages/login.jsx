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
  //   sm md lg xl 2xl 3xl 4xl .....
  //  px py p ps pe pt pb   , mx my ms me mt mb
  return (
    <div className="container mx-auto bg-[#3e95b0]">
      <h1 className="textTransform: uppercase text-[256px]">Login</h1>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-col-1  gap-4">
        <div>
          <p className="border text-red-400 rounded-lg ">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias
            a, placeat architecto modi eaque minus ratione nemo et eligendi.
            Ducimus quasi minima numquam voluptate quaerat officia fuga odio
            dolorum at. Iure debitis officiis aliquam qui itaque, magnam aut
            unde. Cum iste eum rerum recusandae vitae laborum ducimus error
            ipsum maiores, distinctio illum, expedita voluptate nihil molestias?
          </p>
        </div>
        <div>
          <p className="border text-red-400 rounded-3xl shadow-2xl">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias
            a, placeat architecto modi eaque minus ratione nemo et eligendi.
            Ducimus quasi minima numquam voluptate quaerat officia fuga odio
            dolorum at. Iure debitis officiis aliquam qui itaque, magnam aut
            unde. Cum iste eum rerum recusandae vitae laborum ducimus error
            ipsum maiores, distinctio illum, expedita voluptate nihil molestias?
          </p>
        </div>
        <div>
          <p className="border text-red-400 rounded-full">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias
            a, placeat architecto modi eaque minus ratione nemo et eligendi.
            Ducimus quasi minima numquam voluptate quaerat officia fuga odio
            dolorum at. Iure debitis officiis aliquam qui itaque, magnam aut
            unde. Cum iste eum rerum recusandae vitae laborum ducimus error
            ipsum maiores, distinctio illum, expedita voluptate nihil molestias?
          </p>
        </div>
        <div>
          <p className="border text-red-400 rounded-e-xl">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias
            a, placeat architecto modi eaque minus ratione nemo et eligendi.
            Ducimus quasi minima numquam voluptate quaerat officia fuga odio
            dolorum at. Iure debitis officiis aliquam qui itaque, magnam aut
            unde. Cum iste eum rerum recusandae vitae laborum ducimus error
            ipsum maiores, distinctio illum, expedita voluptate nihil molestias?
          </p>
        </div>
      </div>

      {loading ? (
        " API is calling.. "
      ) : (
        <div className="w-[460px]">
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
        </div>
      )}
    </div>
  );
};

export default Login;
