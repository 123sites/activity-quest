import React, { useEffect, useRef, useState } from "react";
import Layout from "../MyLayout";
import { Link } from "react-router-dom";
import CheckButton from "react-validation/build/button";
import Input from "react-validation/build/input";
import Form from "react-validation/build/form";
import AuthService from "../../services/auth.service";
import { isEmail } from "validator";

const required = (value) => {
  if (!value) {
    return (
      <span style={{ display: "block" }} className="form-inlineMessage error">
        This field is required!
      </span>
    );
  }
};
const vemail = (value) => {
  if (!isEmail(value)) {
    return (
      <span style={{ display: "block" }} className="form-inlineMessage error">
        Please use a valid email address, such as user@example.com.
      </span>
    );
  }
};
function ForgotPassword(props) {
  const form = useRef();
  const checkBtn = useRef();
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const onChangeUsername = (e) => {
    const email = e.target.value;
    setEmail(email);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage("");
    setLoading(true);
    form.current.validateAll();
    if (checkBtn.current.context._errors.length === 0) {
      AuthService.forgotPassword(email).then(
        (response) => {
          setMessage(response.message);
          setLoading(false);
          // props.history.push("/login");
        },
        (error) => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();
          setLoading(false);
          setMessage(resMessage);
        }
      );
    } else {
      setLoading(false);
    }
  };
  return (
    <Layout>
      <section className="breadcrumbs">
        <div className="container">
          <div className="breadcrumb">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>Reset Password</li>
            </ul>
          </div>
        </div>
      </section>
      <section className="forget_page_Mn">
        <div className="container">
          <div className="page_heading text-center">
            <h1>Reset your password</h1>
          </div>
          <div className="form-content_text text-center">
            <p>We will send you an email to reset your password.</p>
          </div>
          <div className="forget_page_wrapper">
            <Form onSubmit={handleSubmit} ref={form}>
              <div className="forget_form form_Mn">
                <div className="form-field">
                  <label className="form-label" htmlFor="reset_email">
                    Email Address<span className="required">*</span>
                  </label>
                  <Input
                    type="text"
                    className="form-input"
                    name="email"
                    value={email}
                    onChange={onChangeUsername}
                    validations={[required, vemail]}
                  />
                </div>
                <div className="form-actions text-center">
                  <button
                    className="button btn-secondry"
                    name="button"
                    disabled={loading}
                  >
                    {loading && (
                      <i className="fa fa-spinner fa-spin" aria-hidden="true" />
                    )}
                    <span>Submit</span>
                  </button>
                </div>
                {message && (
                  <div className="form-group">
                    <span
                      style={{ display: "block" }}
                      className="form-inlineMessage error text-center"
                    >
                      {message}
                    </span>
                  </div>
                )}
                <CheckButton style={{ display: "none" }} ref={checkBtn} />
                <div className="form-actions-alredy-customer text-center">
                  <p className="alredy-customer-link">
                    Already have an account? <Link to="/login">Log In</Link>
                  </p>
                </div>
              </div>
            </Form>
          </div>
        </div>
      </section>
    </Layout>
  );
}
export default ForgotPassword;
