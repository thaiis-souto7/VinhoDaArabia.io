import React from "react";
import ReactDOM from "react-dom";
import { Formik, Form, useField } from "formik";
import * as Yup from "yup";
import "./styles.css";
import "./styles-custom.css";

const MyTextInput = ({ label, ...props }) => {
  // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
  // which we can spread on <input> and alse replace ErrorMessage entirely.
  const [field, meta] = useField(props);
  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <input className="text-input" {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  );
};

const MyTextArea = ({ label, ...props }) => {
  // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
  // which we can spread on <input> and alse replace ErrorMessage entirely.
  const [field, meta] = useField(props);
  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <textarea className="text-area" {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  );
};

// And now we can use these
const SignupForm = () => {
  return (
    <>
      <Formik
        initialValues={{
          nome: "",
          email: "",
          mensagem: ""
        }}
        validationSchema={Yup.object({
          nome: Yup.string().required("Campo obrigatório"),
          email: Yup.string()
            .email("Endereço de e-mail inválido")
            .required("Campo obrigatório"),
          mensagem: Yup.string().required("Campo obrigatório")
        })}
        onSubmit={async (values, { setSubmitting }) => {
          await new Promise((r) => setTimeout(r, 500));
          setSubmitting(false);
        }}
      >
        <Form>
          <MyTextInput
            label="Nome Completo"
            name="nome"
            type="text"
            placeholder="Ex: Luís Inácio Lula da Silva"
          />
          <MyTextInput
            label="E-mail"
            name="email"
            type="email"
            placeholder="Ex: exemplo@exemplo.com"
          />
          <MyTextArea
            label="Mensagem"
            name="mensagem"
            rows="6"
            placeholder="Digite sua mensagem aqui..."
          />

          <button type="submit">Enviar</button>
        </Form>
      </Formik>
    </>
  );
};

function App() {
  return <SignupForm />;
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement)

export default App;
