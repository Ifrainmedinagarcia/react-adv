import {  Form, Formik } from "formik"
import * as Yup from 'yup';
import { MyTextInput } from "../components";
import "../styles/styles.css"


export const RegisterFormikPage = (): JSX.Element => {


	const validationSchema = () => {
		return Yup.object({
			name: Yup.string()
				.min(2, "The name must be 2 characters as min")
				.max(15, "The name must be 15 characters as max")
				.required(),
			email: Yup.string()
				.email()
				.required("The email is required"),
			password: Yup.string()
				.min(6, "The pasword must be 6 chracters as min")
				.required('Please Enter your password'),
			passwordRepeat: Yup.string()
				.required('Please Enter your password')
				.oneOf([Yup.ref('password')], 'Passwords must match')
		})
	}

	return (
		<div>
			<h1>Register Formik Page</h1>
			<Formik
				initialValues={{
					name: "",
					email: "",
					password: "",
					passwordRepeat: "",
				}}

				onSubmit={value => console.log(value)}
				validationSchema={validationSchema}
			>

				{
					({ handleReset }) => (
						<Form>

							<MyTextInput name="name" label="Name" placeholder="Name"/>

							<MyTextInput name="email" label="Email" placeholder="Email"/>

							<MyTextInput name="password" label="Passwors" placeholder="Password"/>

							<MyTextInput name="passwordRepeat" label="Confirm Passwors" placeholder="Password"/>

							<button type="submit">Submit</button>
							<button onClick={handleReset}>Reset Form</button>

						</Form>
					)
				}

			</Formik>
		</div>
	)
}
