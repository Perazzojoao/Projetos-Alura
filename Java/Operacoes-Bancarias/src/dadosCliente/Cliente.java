package dadosCliente;

import java.util.Scanner;

public class Cliente {
  String nome;
  String tipoConta;
  int saldoInicial;

  public void InserirDados() {
    try (Scanner scann = new Scanner(System.in)) {
      System.out.println("----- Insira seus dados -----\n");

      System.out.println("Nome: ");
      nome = scann.nextLine();

      System.out.println("Tipo Conta: ");
      tipoConta = scann.nextLine();

      System.out.println("Saldo inicial: ");
      saldoInicial = scann.nextInt();
    }
  }
}