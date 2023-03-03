import { useState } from 'react';

///Este seria un customhook de un formulario, tratando de extraer la logica del componente.
export const useForm = ( initialForm = {} ) => {
  
	const [formState, setFormState] = useState(initialForm);

	
	const HandleInputChange = ({target}) => {
		const { name, value } = target;

		setFormState({
			...formState,
			[name] : value //like assosiative array php 
		});
	};

	const HandleResetForm = () => {
		setFormState(initialForm);
	};

	return {
		// tip de fernando donde dice que extraigamos aqui las props de una
		...formState,
		formState,
		HandleInputChange,
		HandleResetForm
	};
}
