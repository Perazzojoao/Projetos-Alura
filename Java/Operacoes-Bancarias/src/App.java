import java.util.Scanner;

public class App {
	public static void main(String[] args) throws Exception {
		Cliente cliente = new Cliente();
		Operacoes operacoes = new Operacoes();

		cliente.inserirDados();
		cliente.mostrarDados();
		
		int opcao = 0;
		try (Scanner scann = new Scanner(System.in)) {
			do {
				operacoes.mostrarOperacoes();
				opcao = scann.nextInt();

				if (opcao == 4) break;

				switch (opcao) {
					case 1:
						operacoes.consultarSaldo(cliente.saldoInicial);
						break;
					case 2:
						
						break;
					case 3:
						
						break;
					case 4:
						System.out.println("Saindo!");
						break;
					default:
						break;
				}

			} while (opcao != 4);
		}
	}
}
