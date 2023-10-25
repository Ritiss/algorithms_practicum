public class fib_binet {
    public static double fib(int n) {
        double a = (1 + Math.sqrt(5)) / 2;
        double b = (1 - Math.sqrt(5)) / 2;
        return (Math.pow(a, n) - Math.pow(b, n)) / Math.sqrt(5);
    }

    public static void main(String[] args) {
        int n = 10; // Измените n на нужное вам значение.
        double result = fib(n);
        long roundedResult = Math.round(result); // Округляем результат до ближайшего целого числа
        System.out.println("fib(" + n + ") = " + roundedResult);
    }
}
