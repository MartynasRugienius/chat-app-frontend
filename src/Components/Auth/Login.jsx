import { Field, Form, Formik } from "formik";
import * as Yup from "yup";

const SignupSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().required("Required"),
});

export const Login = () => {
  return (
    <div className="flex justify-center items-center h-screen font-mono bg-gray-900">
      <div className="md:h-2/4 md:w-1/4 flex flex-col items-center h-screen justify-center bg-slate-800 drop-shadow-lg rounded border-2 border-slate-700">
        <div className="flex items-center justify-center mb-12">
          <h1 className="text-slate-200 text-5xl">Login</h1>
        </div>
        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={SignupSchema}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          {({ errors, touched }) => (
            <Form>
              <Field
                type="email"
                name="email"
                placeholder="Email"
                className="border-2 md:py-2 md:px-1 md:mb-4 py-3 px-2 mb-6 text-white autofill:bg-slate-600 rounded-md bg-slate-600 border-slate-500 w-full"
              />

              {errors.email && touched.email ? (
                <div className="text-red-500 w-full">{errors.email}</div>
              ) : null}

              <Field
                type="password"
                name="password"
                placeholder="Password"
                className="border-2 text-white md:py-2 md:px-1 md:mb-4 py-3 px-2 mb-6 rounded-md autofill:bg-slate-600 bg-slate-600 border-slate-500 w-full"
              />

              {errors.password && touched.password ? (
                <div className="text-red-500 w-full">{errors.password}</div>
              ) : null}

              <button
                type="submit"
                className="border-2 border-slate-500 bg-slate-600 rounded-md text-slate-200 md:py-2 md:px-1 md:mb-4 py-3 px-2 mb-6 hover:bg-slate-500 transition-colors w-full"
              >
                Login
              </button>
            </Form>
          )}
        </Formik>
        <div className="flex items-center justify-center">
          <div className="flex md:mt-5 mt-8 md:mr-8 mr-2">
            <a
              href="/forgotpass"
              className="text-white hover:text-slate-500 transition-colors"
            >
              Forgot password?
            </a>
          </div>

          <div className="flex md:mt-5 mt-8 md:ml-8 ml-2">
            <a
              href="/register"
              className="text-white hover:text-slate-500 transition-colors"
            >
              Don't have account?
            </a>
          </div>
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
