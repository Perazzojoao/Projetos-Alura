import Formulario from "./components/Formulario";
import FormProvider from "./components/contexts/Formulario";

function App() {
	return (
		<div className='App'>
			<FormProvider>
      	<Formulario />
			</FormProvider>
		</div>
	);
}

export default App;
