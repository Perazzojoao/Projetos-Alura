import Input from '../Input';
import { TUser } from 'types/TUser';

type FormProps = {
	setUser: React.Dispatch<React.SetStateAction<TUser>>;
};

const Form = ({ setUser }: FormProps) => {
	const safeSubmit = (event: any) => {
		event.preventDefault();
		event.stopPropagation();

		const name = event.target[0].value;
		const email = event.target[1].value;

		setUser({ name, email });
	};

	return (
		<form
			onSubmit={safeSubmit}
			className='flex flex-col items-center justify-center gap-6 h-full -mt-36'
		>
			<Input type='text' placeholder='Insira seu nome' />
			<Input type='email' placeholder='Insira seu e-mail' />
			<button
				type='submit'
				className='
          py-1 px-5 sm:py-2 sm:w-full sm:max-w-[120px] 
          bg-alura-100 dark:bg-dark-200 
          text-gray-200 sm:text-m
          rounded-lg uppercase outline-none
          hover:bg-opacity-90 dark:hover:bg-zinc-700
        '
			>
				Seguir
			</button>
		</form>
	);
};

export default Form;
