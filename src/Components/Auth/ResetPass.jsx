import { Field, Form, Formik } from "formik";

export const ResetPass = () => {
  return (
    <div className="flex justify-center items-center h-screen font-mono bg-gray-900">
      <div className="md:h-2/4 md:w-1/4 flex flex-col items-center h-screen justify-center p-2 bg-slate-800 drop-shadow-lg rounded border-2 border-slate-700">
        <div className="flex items-center justify-center mb-12">
          <h1 className="text-slate-200 text-5xl">Reset password</h1>
        </div>
        <Formik
          initialValues={{ email: "", password: "", passconfirm: "" }}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          {(props) => (
            <Form>
              <Field
                type="email"
                name="email"
                placeholder="Email"
                className="border-2 md:py-2 md:px-1 md:mb-4 py-3 px-2 mb-6 text-white autofill:bg-slate-600 rounded-md bg-slate-600 border-slate-500 w-full"
              />

              <Field
                type="password"
                name="password"
                placeholder="Password"
                className="border-2 md:py-2 md:px-1 md:mb-4 py-3 px-2 mb-6 text-white autofill:bg-slate-600 rounded-md bg-slate-600 border-slate-500 w-full"
              />

              <Field
                type="password"
                name="passconfirm"
                placeholder="Confirm password"
                className="border-2 md:py-2 md:px-1 md:mb-4 py-3 px-2 mb-6 text-white autofill:bg-slate-600 rounded-md bg-slate-600 border-slate-500 w-full"
              />
              <button
                type="submit"
                className="border-2 border-slate-500 bg-slate-600 rounded-md text-slate-200 md:py-2 md:px-1 md:mb-4 py-3 px-2 mb-6 hover:bg-slate-500 transition-colors w-full"
              >
                Reset password
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};
