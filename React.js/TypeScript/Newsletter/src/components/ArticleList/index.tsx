import articlesList from '../../../articles.json';
import Article from './Article';

const ArticleList = () => {
	return (
		<div className='my-5 sm:my-0 sm:px-16 grid gap-5 m-auto max-w-full sm:grid-cols-2 lg:grid-cols-3'>
			{articlesList.map((article, index) => (
				<Article key={index} {...article} />
			))}
		</div>
	);
};

export default ArticleList;
