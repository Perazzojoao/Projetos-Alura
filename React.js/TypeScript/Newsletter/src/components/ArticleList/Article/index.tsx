type ArticleProps = {
	title: string;
	text: string[];
	tags: string[];
  image?: string;
  alt?: string;
};

const Article = ({ title, text }: ArticleProps) => {
	return (
		<div className='p-5 bg-gray-300 dark:bg-dark-200 sm:rounded-xl sm:shadow-lg'>
			<h2 className='text-xl font-bold mb-2'>{title}</h2>
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
