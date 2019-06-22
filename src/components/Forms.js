import React from "react";
import { Form, Field, FormSpy } from "react-final-form";
import createDecorator from "final-form-focus";

const focusOnError = createDecorator();
const Forms = () => {
  // const handleSubmit
  const required = value => (value ? undefined : "Required");
  return (
    <>
      <p>Forms</p>
      <Form
        decorators={[focusOnError]}
        onSubmit={values => console.log(values)}
        // subscription={{ submitting: true, values: true }}
        //rerenderuje sie gdy jest submit i zmienia sie wartosc
        subscription={{ submitting: true }}
        //rerenderujes ie tylko przy submicie
        // validate={values => {}} walidacja typu wyslij ajaxem do backendu
        render={({ handleSubmit, submitting, values, pristine, invalid }) => (
          <form onSubmit={handleSubmit}>
            {/* <div>
              <label>First Name</label>
              <Field
                name="firstName"
                component="input"
                placeholder="First Name"
                validate={required}
              />
            </div> */}
            <div>
              {/* <Field
                name="firstName"
                placeholder="First Name"
                validate={required}
              >
                {fieldState => (
                  <pre>{JSON.stringify(fieldState, undefined, 2)}</pre>
                )}
              </Field> */}
              <Field
                name="firstName"
                placeholder="First Name"
                validate={required}
              >
                {({ input, meta, placeholder }) => (
                  <div className={meta.active ? "active" : ""}>
                    <label>First Name</label>
                    <input {...input} placeholder={placeholder} />
                    {meta.error && meta.touched && <span>{meta.error}</span>}
                    {/* gdy jest blad i gdy uzytkownik pisale i poszedl i gdy zrobi submit a pola nie tkiente to zmiena na touch i wtedy tez da blad*/}
                  </div>
                )}
              </Field>
            </div>
            <div>
              <Field
                name="lastName"
                placeholder="Last Name"
                validate={required}
              >
                {({ input, meta, placeholder }) => (
                  <div>
                    <label>Last Name</label>
                    <input {...input} placeholder={placeholder} />
                    {meta.error && meta.touched && <span>{meta.error}</span>}
                    {/* gdy jest blad i gdy uzytkownik pisale i poszedl */}
                  </div>
                )}
              </Field>
            </div>
            <button type="submit" disabled={submitting}>
              submit
            </button>
            {/* działa gdy nie ma subskrypcji wlaczanej, albo jest wlaczana do values  */}
            {/* {zeby  z subskrypcja dzialalo trzeba uzyc formSpy} */}
            {/* <pre>{JSON.stringify(values, undefined, 2)}</pre> */}
            <FormSpy subscription={{ values: true }}>
              {({ values }) => (
                <pre>{JSON.stringify(values, undefined, 2)}</pre>
              )}
            </FormSpy>
            <p>Forms</p>
          </form>
        )}
      />
    </>
  );
};

export default Forms;
