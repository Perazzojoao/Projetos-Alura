public class Operacoes {
  public void mostrarOperacoes() {
    System.out.println("""
      
      Operações:

      1- Consultar saldo
      2- Receber valor
      3- Transferir valor
      4- Sair

      """);
  }

  public void consultarSaldo(float saldo) {
    System.out.printf("Saldo atual: R$ %.2f", saldo);
    mostrarOperacoes();
  }
}
