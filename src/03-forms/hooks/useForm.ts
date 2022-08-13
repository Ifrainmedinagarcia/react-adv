import { useState, ChangeEvent } from 'react';


export const useForm = <T>(initialState: T) => {

	const [formData, setFromData] = useState(initialState)

	const onChangeForm = (e: ChangeEvent<HTMLInputElement>): void => {
		const { name: inputName, value } = e.target
		setFromData((prev) => ({ ...prev, [inputName]: value }))
	}

	const resetForm = () => {
		setFromData({ ...initialState })
	}

	const isValidEmail = (email: string) => {
		const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		return regex.test(email);
	}

	return { ...formData, formData, onChangeForm, resetForm, isValidEmail }
}


