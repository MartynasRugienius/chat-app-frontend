import { Field, Form, Formik } from "formik";
import * as Yup from "yup";

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too short!")
    .max(50, "Too long!")
    .required("Required"),
  surname: Yup.string()
    .min(2, "Too short!")
    .max(50, "Too long!")
    .required("Required"),
  username: Yup.string()
    .min(2, "Too short!")
    .max(50, "Too long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().required("Required"),
  confirmpass: Yup.string()
    .required("Required")
    .when("password", {
      is: (val) => (val && val.length > 0 ? true : false),
      then: Yup.string().oneOf([Yup.ref("password")], "Passwords do not match"),
    }),
});

export const Register = () => {
  return (
    <div className="flex justify-center items-center h-screen font-mono bg-gray-900">
      <div className="md:h-3/4 md:w-1/4 flex flex-col items-center h-screen justify-center p-2 bg-slate-800 drop-shadow-lg rounded border-2 border-slate-700">
        <div className="flex items-center justify-center mb-12">
          <h1 className="text-slate-200 text-5xl">Register</h1>
        </div>
        <Formik
          initialValues={{
            name: "",
            surname: "",
            username: "",
            email: "",
            password: "",
            confirmpass: "",
          }}
          validationSchema={SignupSchema}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          {({ errors, touched }) => (
            <Form>
              <div className="flex">
                <Field
                  type="text"
                  name="name"
                  placeholder="First name"
                  className="border-2 md:py-2 md:px-1 md:mb-4 py-3 px-2 mb-6 mr-2 text-white autofill:bg-slate-600 rounded-md bg-slate-600 border-slate-500 w-full"
                />
                {errors.name && touched.name ? (
                  <div className="text-red-500">{errors.name}</div>
                ) : null}

                <Field
                  type="text"
                  name="surname"
                  placeholder="Last name"
                  className="border-2 md:py-2 md:px-1 md:mb-4 py-3 px-2 mb-6 ml-2 text-white autofill:bg-slate-600 rounded-md bg-slate-600 border-slate-500 w-full"
                />

                {errors.surname && touched.surname ? (
                  <div className="text-red-500">{errors.surname}</div>
                ) : null}
              </div>
              <Field
                type="text"
                name="username"
                placeholder="Username"
                className="border-2 md:py-2 md:px-1 md:mb-4 py-3 px-2 mb-6 text-white autofill:bg-slate-600 rounded-md bg-slate-600 border-slate-500 w-full"
              />

              {errors.username && touched.username ? (
                <div className="text-red-500">{errors.username}</div>
              ) : null}

              <Field
                type="email"
                name="email"
                placeholder="Email"
                className="border-2 md:py-2 md:px-1 md:mb-4 py-3 px-2 mb-6 text-white autofill:bg-slate-600 rounded-md bg-slate-600 border-slate-500 w-full"
              />

              {errors.email && touched.email ? (
                <div className="text-red-500">{errors.email}</div>
              ) : null}

              <Field
                type="password"
                name="password"
                placeholder="Password"
                className="border-2 text-white py-2 px-1 mb-4 rounded-md autofill:bg-slate-600 bg-slate-600 border-slate-500 w-full"
              />

              {errors.password && touched.password ? (
                <div className="text-red-500">{errors.password}</div>
              ) : null}

              <Field
                type="password"
                name="confirmpass"
                placeholder="Confirm Password"
                className="border-2 text-white py-2 px-1 mb-4 rounded-md autofill:bg-slate-600 bg-slate-600 border-slate-500 w-full"
              />

              {errors.confirmpass && touched.confirmpass ? (
                <div className="text-red-500">{errors.confirmpass}</div>
              ) : null}

              <button
                type="submit"
                className="border-2 border-slate-500 bg-slate-600 rounded-md text-slate-200 md:py-2 md:px-1 md:mb-4 py-3 px-2 mb-6 hover:bg-slate-500 transition-colors w-full"
              >
                Register
              </button>
            </Form>
          )}
        </Formik>
        <div className="flex md:mt-5 mt-8">
          <a
            href="/login"
            className="text-white hover:text-slate-500 transition-colors"
          >
            Already have account?
          </a>
        </div>
        <button className="flex md:m-6 mt-8 bg-slate-600 rounded-md md:p-2 p-4 border-2 border-slate-500 hover:bg-slate-500 transition-colors">
          <div className="bg-slate-500 rounded-md md:p-2 p-4">
            <img
              className=""
              src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
            />
          </div>
          <p className=" text-slate-200 md:p-2 p-4">
            <b>Sign in with google</b>
          </p>
        </button>
      </div>
    </div>
  );
};
