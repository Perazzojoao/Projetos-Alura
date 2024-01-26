type ArticleProps = {
	title: string;
	text: string[];
	tags: string[];
	image?: string;
	alt?: string;
};

const Article = ({ title, text, tags }: ArticleProps) => {
	return (
		<div className='p-5 bg-gray-300 dark:bg-dark-200 sm:rounded-xl sm:shadow-lg'>
			<h2 className='text-xl font-bold text-alura-200 dark:text-gray-200'>{title}</h2>
			<div className='flex flex-row justify-start gap-2 py-2'>
				{tags.map((tag, index) => (
					<span key={index} className='font-semibold text-gray-200 bg-alura-100 dark:bg-dark-100 px-3 py-1 rounded-xl text-xs uppercase hidden sm:block'>
						{tag}
					</span>
				))}
			</div>
			<div className='grid gap-1'>
				{text.map((paragrafo, i) => (
					<p key={i} className='text-justify text-alura-200 dark:text-gray-300'>
						{paragrafo}
					</p>
				))}
			</div>
		</div>
	);
};

export default Article;
