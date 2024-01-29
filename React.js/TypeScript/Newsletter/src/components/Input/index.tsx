type InputProps = {
	type: string;
	placeholder: string;
};

const Input = ({ type, placeholder }: InputProps) => {
	return (
		<input
			type={type}
			className='
        py-2 px-5 pl-3
        sm:w-full
        sm:max-w-xl
        dark:bg-dark-200 text-dark-200 dark:text-gray-200 dark:placeholder:text-gray-300 
        focus:border-2 focus:border-alura-200 dark:focus:border-alura-100
        text-lg 
        rounded-md outline-none
        shadow-lg dark:shadow-black
      '
			placeholder={placeholder}
			required
		/>
	);
};

export default Input;
