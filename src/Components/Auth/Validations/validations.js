import * as Yup from "yup";

export const SignupSchema = Yup.object().shape({
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

export const SigninSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().required("Required"),
});
