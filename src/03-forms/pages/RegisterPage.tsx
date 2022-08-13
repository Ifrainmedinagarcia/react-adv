import { FormEvent } from 'react';
import { useForm } from "../hooks/useForm";
import "../styles/styles.css"


interface StateForm {
	name: string;
	email: string;
	password: string;
	passwordRepeat: string
}

export const RegisterPage = (): JSX.Element => {

	const initialStateForm = {
		name: "",
		email: "",
		password: "",
		passwordRepeat: ""
	}

	const {
		onChangeForm,
		formData,
		name,
		password,
		email,
		passwordRepeat,
		resetForm,
		isValidEmail
	} = useForm<StateForm>(initialStateForm)

	const onSubmitFrom = (e: FormEvent<HTMLFormElement>): void => {
		e.preventDefault()
		console.log(formData);
	}

	return (
		<div>
			<h1>Register page</h1>
			<form noValidate onSubmit={onSubmitFrom}>
				<input
					onChange={onChangeForm}
					type="text"
					placeholder="Name"
					value={name}
					name="name"
					className={`${name.trim().length <= 0 && "has-error"}`} />
				{name.trim().length <= 0 && <span>This field is required</span>}
				<input
					onChange={onChangeForm}
					type="email"
					placeholder="Email"
					value={email}
					name="email"
					className={`${!isValidEmail(email) && "has-error"}`} />
				{!isValidEmail(email) && <span>Email isn't valid</span>}
				<input
					onChange={onChangeForm}
					type="password"
					placeholder="Password"
					value={password}
					name="password" />
				{password.trim().length <= 0 && <span>This field is required</span>}
				{password.trim().length < 6 && password.trim().length > 0 && <span>Password must have 6 characters</span>}
				<input
					onChange={onChangeForm}
					type="password"
					placeholder="Repeat Password"
					value={passwordRepeat}
					name="passwordRepeat" />
				{passwordRepeat.trim().length <= 0 && <span>This field is required</span>}
				{passwordRepeat.trim().length > 0 && password !== passwordRepeat && <span>The password must be equeals</span>}
				<button type="submit">Create</button>
				<button type="button" onClick={() => resetForm()}>Reset Form</button>
			</form>
		</div>
	)
}
