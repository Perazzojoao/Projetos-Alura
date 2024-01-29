import { TUser } from 'types/TUser';
import ToggleTheme from '../ToggleTheme';

type HeaderProps = {
	user: TUser;
};

const Header = ({ user }: HeaderProps) => {
	return (
		<div className='flex h-20 justify-between items-center bg-alura-200 dark:bg-dark-200 px-5 font-bold sm:rounded-xl sm:m-5 shadow-lg shadow-zinc-400 dark:shadow-black'>
			<span className='text-gray-200'>{`Olá, ${user.name || 'usuário'}`}</span>
			<h1 className='text-gray-200 text-xl'>Alura NewsLetter</h1>
			<ToggleTheme />
		</div>
	);
};

export default Header;
