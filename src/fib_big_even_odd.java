public class fib_big_even_odd {
    public static String fib_eo(int n) {
        int a = 0;
        int b = 1;

        for (int i = 2; i <= n; i++) {
            int temp = (a + b) % 10;
            a = b;
            b = temp;
        }

        if (b % 2 == 0) {
            return "even";
        } else {
            return "odd";
        }
    }

    public static void main(String[] args) {
        int n = 841646;
        String result = fib_eo(n);
        System.out.println(result);
    }
}
