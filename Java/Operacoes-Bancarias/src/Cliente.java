import java.util.Scanner;

public class Cliente {
  String nome;
  String tipoConta;
  float saldoInicial;

  public void inserirDados() {
    try (Scanner scann = new Scanner(System.in)) {
      System.out.println("----- Insira seus dados -----\n");

      System.out.println("Nome: ");
      nome = scann.nextLine();

      System.out.println("Tipo Conta: ");
      tipoConta = scann.nextLine();

      System.out.println("Saldo inicial: ");
      saldoInicial = scann.nextFloat();
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