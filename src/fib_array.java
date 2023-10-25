import java.util.Arrays;

public class fib_array {
    public static int[] fib(int n) {
        int[] fibArray = new int[n + 1];
        if (n >= 0) {
            fibArray[0] = 0;
        }
        if (n >= 1) {
            fibArray[1] = 1;
        }
        if (n <= 1) {
            return fibArray;
        }

        for (int i = 2; i <= n; i++) {
            fibArray[i] = fibArray[i - 1] + fibArray[i - 2];
        }

        return fibArray;
    }

    public static void main(String[] args) {
        int n = 12; // Замените n на нужное значение
        int[] fibArray = fib(n);
        System.out.println(Arrays.toString(fibArray));
    }
}