public class fib_recursive {
    public static int fib(int n) {
        // Базовый случай: если n равно 0, верните 0.
        if (n == 0) {
            return 0;
        }
        // Базовый случай: если n равно 1, верните 1.
        if (n == 1) {
            return 1;
        }
        // Рекурсивный случай: вызываем функцию fib для (n-1) и (n-2) и складываем результаты.
        return fib(n - 1) + fib(n - 2);
    }

    public static void main(String[] args) {
        int n = 20; // Измените n на нужное вам значение.
        int result = fib(n);
        System.out.println("fib(" + n + ") = " + result);
    }
}