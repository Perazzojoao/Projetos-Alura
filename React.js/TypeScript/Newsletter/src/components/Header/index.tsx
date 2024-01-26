import ToggleTheme from "../ToggleTheme";


const Header = () => {
	return (
		<div className='flex h-20 justify-between items-center bg-gray-500 px-5 font-bold iPhone:rounded-xl iPhone:m-5'>
			<span className='text-gray-200'>Olá, usuário</span>
			<h1 className='text-gray-200 text-xl'>Alura NewsLetter</h1>
      <ToggleTheme />      
		</div>
	);
};

export default Header;
