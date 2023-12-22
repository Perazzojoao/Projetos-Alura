import CarrinhoProvider from "./CarrinhoContext";

const ContextProvider = ({ children }) => {
  return ( 
    <CarrinhoProvider>
      {children}
    </CarrinhoProvider>
  );
}
 
export default ContextProvider;