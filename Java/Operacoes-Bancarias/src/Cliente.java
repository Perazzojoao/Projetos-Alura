import java.util.Scanner;

public class Cliente {
  String nome;
  String tipoConta;
  float saldoInicial;

  public void inserirDados() {
    try (Scanner scan = new Scanner(System.in)) {
      System.out.println("----- Insira seus dados -----\n");

      System.out.println("Nome: ");
      nome = scan.nextLine();

      System.out.println("Tipo Conta: ");
      tipoConta = scan.nextLine();

      System.out.println("Saldo inicial: ");
      saldoInicial = scan.nextFloat();

      scan.close();
    }
  }

  public void mostrarDados() {
    System.out.printf("""

      *********************************
       -------- Dados Cliente --------
       Nome:            %s
       Tipo de conta:   %s
       Saldo inicial:   R$ %.2f
      *********************************

      """, nome, tipoConta, saldoInicial);
  }
}