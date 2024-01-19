import java.util.Random;
import java.util.Scanner;

public class JogoAdivinhacao {
  public static void main(String[] args) {
    System.out.println("""
          ----- Jogo da Adivinhação -----

          Adivinhe o número aleatório, entre 0 a 100, em até 5 tentativas!

        """);

    int TENTATIVAS_TOTAIS = 5;
    boolean acertou = false;
    int numero = new Random().nextInt(101);
    try (Scanner input = new Scanner(System.in)) {

      for (int i = 1; i <= TENTATIVAS_TOTAIS; i++) {
        System.out.printf("Tentativa %d: ", i);
        int tentativa = input.nextInt();

        if (tentativa == numero) {
          acertou = true;
          System.out.println("""

                Parabéns! Você acertou o número secreto.
              """);
          break;
        }

        if (tentativa < numero) {
          if (i == 5) continue;
          System.out.printf("""

              O número %d é menor que o número secreto! Tente novamente.

              """, tentativa);

        } else if (tentativa > numero) {
          if (i == 5) continue;
          System.out.printf("""

              O número %d é maior que o número secreto! Tente novamente.

              """, tentativa);
        }
      }
      if (!acertou) {
        System.out.printf("\nVocê perdeu! O número secreto era %d", numero);
      }
    }
  }
}
