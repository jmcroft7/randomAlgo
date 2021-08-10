public class BasicsTest {
    public static void main(String[] args) {

        // 1-255
        Basics.PrintToTwoFiftyFive();
        System.out.println("===========");

        // odds 1-255
        Basics.OddsToTwoFiftyFive();
        System.out.println("===========");

        // sigma 255
        Basics.SigmaTwoFiftyFive();


        // Iterate an array
        int[] arr1 = {1,2,3,4,5,6,7};
        Basics.IterateArray(arr1);


        System.out.println("===========");
        // Max Value in array
        Basics.FindMax(arr1);


        Basics.OddArray(255);
    }
}