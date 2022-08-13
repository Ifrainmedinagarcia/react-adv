import { Form, Formik } from "formik"
import * as Yup from "yup"
import { MyCheckbook, MySelect, MyTextInput } from "../components/"
import "../styles/styles.css"



export const FormikAbstract = () => {

	return (
		<div>
			<h1>Formik Abstract</h1>
			<Formik
				initialValues={{
					firstName: "",
					lastName: "",
					email: "",
					terms: false,
					jobType: ""
				}}
				onSubmit={(values) => {
					console.log(values);
				}}
				validationSchema={Yup.object({
					firstName: Yup.string().max(15, "Must be 15 characters or less").required("This field is required"),
					lastName: Yup.string().max(15, "Must be 15 characters or less").required("This field is required"),
					email: Yup.string().email().required("The email is require"),
					terms: Yup.boolean().oneOf([true], "Should accept the conditions"),
					jobType: Yup.string().notOneOf(["it-jr"], "This option is not allowed").required("Required")
				})
				}
			>
				{
					(_formik) => (
						<Form >

							<MyTextInput label={"First Name"} name={"firstName"} placeholder="First Name" />

							<MyTextInput label={"Last Name"} name={"lastName"} placeholder="Last Name" />

							<MyTextInput label={"Email addres"} name={"email"} placeholder="Email addres" />

							<MySelect label="job Type" name="jobType" as="select">
								<option value={""}>Pick something</option>
								<option value={"Developer"}>Developer</option>
								<option value={"Designer"}>Designer</option>
								<option value={"it-senior"}>IT-senior</option>
								<option value={"it-jr"}>IT-jr</option>
							</MySelect>

							<MyCheckbook label="Termns & conditions" name="terms" />

							<button type="submit">Submit</button>

						</Form>

					)
				}
			</Formik>

		</div>
	)
}


