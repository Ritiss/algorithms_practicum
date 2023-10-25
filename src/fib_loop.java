public class fib_loop {
    public static int fib(int n) {
        if (n == 1) {
            return 1;
        }

        int prev = 0;
        int current = 1;

        for (int i = 2; i <= n; i++) {
            int next = prev + current;
            prev = current;
            current = next;
        }

        return current;
    }

    public static void main(String[] args) {
        int n = 7; // Измените n на нужное вам значение.
        int result = fib(n);
        System.out.println("fib(" + n + ") = " + result);
    }
}
