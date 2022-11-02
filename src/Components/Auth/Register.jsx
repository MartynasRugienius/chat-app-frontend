import { Field, Form, Formik } from "formik";
import { SignupSchema } from "./Validations/validations";

export const Register = () => {
  return (
    <div className="flex justify-center items-center h-screen font-mono bg-gray-900">
      <div className="md:h-3/4 md:w-1/4 flex flex-col items-center h-screen justify-center bg-slate-800 drop-shadow-lg rounded border-2 border-slate-700">
        <p className="text-slate-200 text-5xl mb-6">Register</p>

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
            <Form className="mr-2 ml-2">
              <div className="flex">
                {errors.name && touched.name ? (
                  <div className="text-red-500 w-full mr-2">{errors.name}</div>
                ) : null}
                {errors.surname && touched.surname ? (
                  <div className="text-red-500 w-full ml-2">
                    {errors.surname}
                  </div>
                ) : null}
              </div>
              <div className="flex">
                <Field
                  type="text"
                  name="name"
                  placeholder="First name"
                  className="border-2 text-white md:mb-4 mb-6 mr-2 md:py-2 md:px-1 py-3 px-2 autofill:bg-slate-600 rounded-md bg-slate-600 border-slate-500 w-full"
                />

                <Field
                  type="text"
                  name="surname"
                  placeholder="Last name"
                  className="border-2 text-white md:mb-4 mb-6 ml-2 md:py-2 md:px-1 py-3 px-2 autofill:bg-slate-600 rounded-md bg-slate-600 border-slate-500 w-full"
                />
              </div>
              <div className="flex">
                {errors.username && touched.username ? (
                  <div className="text-red-500">{errors.username}</div>
                ) : null}
              </div>
              <Field
                type="text"
                name="username"
                placeholder="Username"
                className="border-2 md:py-2 md:px-1 md:mb-4 py-3 px-2 mb-6 text-white autofill:bg-slate-600 rounded-md bg-slate-600 border-slate-500 w-full"
              />
              <div className="flex">
                {errors.email && touched.email ? (
                  <div className="text-red-500">{errors.email}</div>
                ) : null}
              </div>
              <Field
                type="email"
                name="email"
                placeholder="Email"
                className="border-2 md:py-2 md:px-1 md:mb-4 py-3 px-2 mb-6 text-white autofill:bg-slate-600 rounded-md bg-slate-600 border-slate-500 w-full"
              />
              <div className="flex">
                {errors.password && touched.password ? (
                  <div className="text-red-500">{errors.password}</div>
                ) : null}
              </div>
              <Field
                type="password"
                name="password"
                placeholder="Password"
                className="border-2 md:py-2 md:px-1 md:mb-4 py-3 px-2 mb-6 text-white autofill:bg-slate-600 rounded-md bg-slate-600 border-slate-500 w-full"
              />
              <div className="flex">
                {errors.confirmpass && touched.confirmpass ? (
                  <div className="text-red-500">{errors.confirmpass}</div>
                ) : null}
              </div>
              <Field
                type="password"
                name="confirmpass"
                placeholder="Confirm Password"
                className="border-2 md:py-2 md:px-1 md:mb-4 py-3 px-2 mb-6 text-white autofill:bg-slate-600 rounded-md bg-slate-600 border-slate-500 w-full"
              />

              <button
                type="submit"
                className="border-2 border-slate-500 bg-slate-600 rounded-md text-slate-200 md:py-2 md:px-1 md:mb-4 py-3 px-2 mb-6 hover:bg-slate-500 transition-colors w-full"
              >
                Register
              </button>
            </Form>
          )}
        </Formik>
        <div className="flex md:mt-5 md:mt-8 mb-6">
          <a
            href="/login"
            className="text-white hover:text-slate-500 transition-colors"
          >
            Already have an account?
          </a>
        </div>
        <button className="flex md:m-6 md:mt-8 bg-slate-600 rounded-md md:p-2 p-3 border-2 border-slate-500 hover:bg-slate-500 transition-colors">
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
