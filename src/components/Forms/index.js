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
    <h4 class= "text-forms">Envie-nos uma mensagem pelo formulário abaixo</h4>
      <Formik
        initialValues={{
          nome: "",
          email: "",
          numero: "",
          mensagem: "" 
        }}
        validationSchema={Yup.object({
          nome: Yup.string()
            .required("Campo obrigatório"),
          email: Yup.string()
            .required("Campo obrigatório")
            .email("Endereço de e-mail inválido"),
          numero: Yup.string()
            .required("Campo obrigatório"),
          mensagem: Yup.string()
            .required("Campo Obrigatório"),
        })}
        onSubmit={async (values, { setSubmitting }) => {
          await new Promise(r => setTimeout(r, 500));
          setSubmitting(false);
        }}
      >
        <Form>
          <MyTextInput
            //label="Nome"
            name="nome"
            type="text"
            placeholder="Nome:"
          />
          <MyTextInput
            //label="Email"
            name="email"
            type="text"
            placeholder="Email:"
          />
          <MyTextInput
            //label="Número"
            name="numero"
            type="text"
            placeholder="Telefone:"
          />

          <MyTextInput
            //label="Mensagem"
            name="mensagem"
            rows="6"
            type="text"
            placeholder="Digite sua mensagem aqui..."
          />
          

          <button type="submit">Enviar Mensagem</button>
        </Form>
      </Formik>
    </>
  );
};

export default SignupForm;
