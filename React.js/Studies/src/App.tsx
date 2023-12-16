import Formulario from "./components/Formulario";
import Lista from "./components/Lista";
import FormProvider from "./components/contexts/Formulario";
import styles from './App.module.css';
import IsActiveProvider from "./components/contexts/IsActive";

function App() {
	return (
		<div className={styles.appContainer}>
			<FormProvider>
      	<Formulario />
				<IsActiveProvider>
					<Lista />
				</IsActiveProvider>
			</FormProvider>
		</div>
	);
}

export default App;
