import java.util.Scanner;

public class App {
	public static void main(String[] args) throws Exception {
		Cliente cliente = new Cliente();
		Operacoes operacoes = new Operacoes();

		cliente.inserirDados();
		cliente.mostrarDados();
		
		int opcao = 4;
		try (Scanner scan = new Scanner(System.in)) {
			do {
				operacoes.mostrarOperacoes();
				scan.nextLine();
				opcao = scan.nextInt();

				if (opcao == 4) break;

				switch (opcao) {
					case 1:
						operacoes.consultarSaldo(cliente.saldoInicial);
						break;
					case 2:
						
						break;
					case 3:
						
						break;
					default:
						System.out.println("Operação inválida!");
						break;
				}

			} while (opcao != 4);
		}
	}
}
