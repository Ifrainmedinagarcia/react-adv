import { Formik, Form } from "formik"
import { MySelect, MyTextInput } from "../components"
import formJSON from "../data/customForm.json"
import * as Yup from 'yup';



const initialValues: { [x: string]: any } = {}
const requiredFields:  { [x: string]: any } = {}

for (const input of formJSON) {
  initialValues[input.name] = input.value
  
  if(!input.validations) continue

  let schema = Yup.string()

  for (const rule of input.validations) {
    if (rule.type === "required") {
      schema = schema.required("This field is required")
    }
    if (rule.type === "minLength") {
      schema = schema.min((rule as any).value, `The input must has as min ${(rule as any).value || 2} length`)
    }
    if (rule.type === "email") {
      schema = schema.email()
    }
  }

  requiredFields[input.name] = schema
  
}

const validationSchema = Yup.object({...requiredFields})


export const DynamicForm = () => {
  return (
    <div>
      <h1>Dynamic Form</h1>

      <Formik
        initialValues={initialValues}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        {
          () => (
            <Form noValidate>
              {formJSON.map(({ type, label, placeholder, name, options }) => {

                if (type === "input" || type === "password" || type === "email") {
                  return <MyTextInput
                    key={name}
                    name={name}
                    placeholder={placeholder}
                    label={label}
                    type={(type as any)}
                  />  
                }else if(type === "select"){
                  return(
                    <MySelect name={name} key={name} label={label}>
                     {options?.map(({ id, desc }) => (
                      <option key={id} value={id}>{desc !== "" ? desc : "Select and option" }</option>
                     ))}
                    </MySelect>                
                  ) 
                }
                throw new Error(`The type: ${type} isn't soported`)
              })}
              <button type="submit">Submit</button>
            </Form>
          )
        }
      </Formik>
    </div>
  )
}


