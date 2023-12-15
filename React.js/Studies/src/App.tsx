import Formulario from "./components/Formulario";
import Lista from "./components/Lista";
import FormProvider from "./components/contexts/Formulario";
import styles from './App.module.css';

function App() {
	return (
		<div className={styles.appContainer}>
			<FormProvider>
      	<Formulario />
				<Lista />
			</FormProvider>
		</div>
	);
}

export default App;
