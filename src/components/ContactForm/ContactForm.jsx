import { Formik, Form, Field } from 'formik';

export const ContactForm = ({ addContact }) => {
  return (
    <div>
      <h2>Name</h2>
      <Formik
        initialValues={{ name: '', number: '' }}
        onSubmit={(values, actions) => {
          addContact(values);
          actions.resetForm();
        }}
      >
        <Form>
          <Field name="name" type="text" />
          <Field name="number" type="tel" />
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
};
