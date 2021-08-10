import java.util.*;

public class Basics {


    // Print 1-255
    public static void PrintToTwoFiftyFive() {
        int i = 1;
        while(i <= 255){
            System.out.println(i);
            i++;
        }
    }


    // Print odds 1-255
    public static void OddsToTwoFiftyFive() {
        int i = 1;
        while(i <= 255) {
            if (i % 2 != 0) {
                System.out.println(i);
            }
            i++;
        }
    }


    // Sigma of 255
    public static void SigmaTwoFiftyFive() {
        int sum = 0;

        for (int i=1; i <= 255; i++) {
            sum +=i;
        }
        System.out.println(sum);
    }


    // Iterating through an array
    public static void IterateArray(int[] inputArr) {
        for(int value: inputArr) {
            System.out.println(value);
        }
    }


    // Find max value in array
    public static void FindMax(int[] inputArr) {
        int maxVal = inputArr[0];
        for (int value: inputArr) {
            if(value > maxVal) {
                maxVal = value;
            }
        }
        System.out.println(maxVal);
    }


    // Create an array consisting of only odds.
    public static void OddArray(int num) {
        ArrayList<Integer> result = new ArrayList<Integer>();

        for(int i = 1; i <= num; i+=2) {
            result.add(i);
        }
        System.out.println(result);
    }






}