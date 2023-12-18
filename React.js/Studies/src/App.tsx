import Formulario from "./components/Formulario";
import Lista from "./components/Lista";
import FormProvider from "./components/contexts/Formulario";
import styles from './App.module.css';
import IsActiveProvider from "./components/contexts/IsActive";
import Cronometro from "./components/Cronometro";
import TimerProvider from "./components/contexts/Timer";

function App() {
	return (
		<div className={styles.appContainer}>
			<FormProvider>
				<IsActiveProvider>
					<div className={styles.formContainer}>
						<Formulario />
						<TimerProvider>
							<Cronometro />
						</TimerProvider>
					</div>
					<Lista />
				</IsActiveProvider>
			</FormProvider>
		</div>
	);
}

export default App;
