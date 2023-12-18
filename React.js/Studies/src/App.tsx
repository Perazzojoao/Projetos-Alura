import Formulario from "./components/Formulario";
import Lista from "./components/Lista";
import FormProvider from "./components/contexts/Formulario";
import styles from './App.module.css';
import IsActiveProvider from "./components/contexts/IsActive";
import Cronometro from "./components/Cronometro";

function App() {
	return (
		<div className={styles.appContainer}>
			<FormProvider>
				<div className={styles.formContainer}>
					<Formulario />
					<Cronometro />
				</div>
				<IsActiveProvider>
					<Lista />
				</IsActiveProvider>
			</FormProvider>
		</div>
	);
}

export default App;
