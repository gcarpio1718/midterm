// Please include the correct number of parameters in each function!
// Make sure every function returns something
// You can console.log() the functions with test input to test your functions in the space provided
// Read each question carefully
// Good luck!

/*
Write a function called sumOfOdds that takes in 2 numbers as parameters and sums the odd numbers between them.
This function is inclusive so please include your two parameters in your calculation.
After summing the numbers, return the sum.
You can assume that the 2nd number passed in will always be greater than the first and that the two numbers will not be the same
Note: This problem should account for negative number input
*/

function sumOfOdds(a, b){
    console.log("Enter a Number: ");
    int numA = input.nextInt();
    int a = numA;

    console.log("Enter another number: ");
    int numB = input.nexInt();

    int oddSum = 0;
    
    while (numA <= numB){

        if ((numA%2) > 0){
            oddSum += numA;
        }
            numA++;
    }

return sumOfOdds;

}

/* console.logs to test */
console.log("sumOfOdds");
console.log("The sum of all odd numbers between " + a + " and " + numB + " is " + oddSum);
//Add console.logs here to test!  Feel free to format this section however you like

console.log("\n////////////////////////////////////////////////////////////////////////////\n");

/*
Write a function arraySubtract that takes in 2 arrays of numbers and subtracts the item in each index at array 1 with its respective item in each index at array 2.
The result of each calculation should be placed in a new array and that array should be returned when the calculations are complete.
For exmaple arraySubtract([7,9],[2,6]) should return [5,3]
You can assume the arrays that are being input are of the same length
*/

const arr1 = [2,3];
const arr2 = [6,5];

function arraySubtract(arr1, arr2){
    const res =[];
    for (let i=0; i<arr1.length; i++){
        const el = Math.abs((arr1[i] || 0) - (arr2[i] || 0));
        res[i] = el;
    };
    return res;
       
};


/* console.logs to test */
console.log("arraySubtract");
console.log(console.log(absDifference(arr1, arr2)));
//Add console.logs here to test!  Feel free to format this section however you like

console.log("\n////////////////////////////////////////////////////////////////////////////\n");


/*
Write a function that takes in 3 parameters in this order: 1 array, 1 string, and then another string.
Add the first string to the beginning of the array
Add the second string to the end of the array
Return the modified array
*/

function surroundArray(string1, string2, array, newArray){
    const string1 = [];
    const array = [];
    const string2 = [];
    const newArray = [string1].concat(array);

}
return newArray; 

/* console.logs to test */
console.log("surroundArray");
console.log(newArray);
//Add console.logs here to test!  Feel free to format this section however you like

console.log("\n////////////////////////////////////////////////////////////////////////////\n");


/*
Write a function longestString that takes in an array of strings as a parameter and returns the longest string in the array.
If there is nothing in the array, return an empty string ('')
You can assume that no two strings will have the same length in the array
*/

function longestString(arr){
    var arr = [];

    var lgth = 0;
    var longest;

    for (var i =0; i<arr.length; i++){
        if (arr[i].length>lgth){
            var lgth = arr[i].length;
            longest = arr[i];
        }
    }
}

/* console.logs to test */
console.log("longestString");
console.log(longest);
//Add console.logs here to test!  Feel free to format this section however you like

console.log("\n////////////////////////////////////////////////////////////////////////////\n");


/*
Write a function sToR that replaces every 's' character in the string with an 'r' AND every 'r' character in the string with an 's'
If the letter in the original string is uppercase the letter in the output string should be as well
Do NOT use replaceAll or similar string methods.  If you are unsure what that means, ask before you use a string method!  (toUpperCase() and toLowerCase() should be all you need if anything)
*/

function sToR(s, r){
    for (int i=1; i<str.length; i++){

        if (str[i-1]=='r' && str[i] == s){

            str[i-1] = 's';
            int j;
            for (j =i; j<str.length -1; j++)
                str[j] = str[j+1];
                str[j] = ' ';
        }
    }
    return

}

/* console.logs to test */
console.log("sToR");
console.log("The fixed code is: ");
console.log(str);

//Add console.logs here to test!  Feel free to format this section however you like

console.log("\n////////////////////////////////////////////////////////////////////////////\n");


/*
Write a function divisibleBy4And7 that takes in a number and returns true if it is divisble by both 4 and 7.
If it is not, return false.
*/

function divisibleBy4And7(x){
    console.log("Enter an integer number:");
        
        int x;
        x = input.nextInt();
         if (x % 4==0){
             console.log("The integer number you entered is divisible by 4");
         }
         else{
             console.log("The integer number you entered is not divisible by 4");
             if(x % 7==0){
                 console.log("The integer number you entered is divisible by 7");
             } 
             else{
                 console.log("The interger number you entered is not divisible by 7");
             }
        }

    }
}

/* console.logs to test */
console.log("divisibleBy4And7");
console.log("////////////////////////////////////////////////////////////////////////////\n");
//Add console.logs here to test!  Feel free to format this section however you like

console.log("\n////////////////////////////////////////////////////////////////////////////\n");


/*
Write a function exclamationAndQuestion that takes in a string
return true if the string contains both an exclamation point (!) AND a question mark (?)
Return false if otherwise
*/

function exclamationAndQuestion(_input){
    if (string.length === 1 && str.match(/[!,?]/i))
        return true;
    }else{
        return false;
    }
    
}

/* console.logs to test */
console.log("exclamationAndQuestion");
console.log("////////////////////////////////////////////////////////////////////////////\n");
//Add console.logs here to test!  Feel free to format this section however you like

console.log("\n////////////////////////////////////////////////////////////////////////////\n");


/*
Write a function called countAB that takes in a single string and returns an array of length two.  The first item in the array should be the count of every A character in the array.  The 2nd item should be the count of every B character in the array.  
No need to add the count of A and B together.  Again, we want an array with the separate counts of each
Your function should account for both cases (upper and lower) of each letter.
*/

function countAB(arr){
   arr=[A,A,b,b,c,c]

   for (int i =0;i<n; i++){

    if(a[i]==true)
        continue;

        int count = 1;
        for (int j = i+1; j<n;j++){
            if (arr[i] == arr[j]){
                a[j]=true;
                count++;
            }
        }
   }
    }
return count;

}

/* console.logs to test */
console.log("countAB");
console.log(arr[i] + " " + count);
//Add console.logs here to test!  Feel free to format this section however you like

console.log("\n////////////////////////////////////////////////////////////////////////////\n");


/* 
Write a function called addStringIfLastS() that takes in two parameters.  First, an array of strings and second a single string.  
Go through each string in the array.  If the string ends in the letter 's' (either case), append your string input to that string in the array.
Finally, return your modified array.
Example: addStringIfLastS(['test', 'testing', 'testings'], 'TEST') => ['test', 'testing', 'testingsTEST']
*/

function addStringIfLastS(c,d){
    c = addStringIfLastS(test, testing, tests, "TEST");
    d = a.join("+");
}

return a;

/* console.logs to test */
console.log("addStringIfLastS");
console.log("Final product: ");
//Add console.logs here to test!  Feel free to format this section however you like

console.log("\n////////////////////////////////////////////////////////////////////////////\n");


/* 
Write a function called twoSmallest that takes in a single array of numbers as a parameter and returns the smallest two numbers in the following array format where the smallest number always comes before the 2nd smallest number (ie, the bigger number should come second): 
[smallestNumber, secondSmallestNumber]
If the array is shorter than length 2, return undefined to the user
You can assume that every number in the array will be unique
*/

function twoSmallest(int, arrA){

    if (arrA.length<2){
        console.log("Array size less than 2. Try again.");
    }

    int first = Integer.MAX_VALUE;
    int second = Integer.MAX_VALUE;

    for (int i =0; i < arrA.length; i++){
        int current = arrA[i];
        if(first>current){
            second=first;
            first=current;
        }else if (second = current){
            second = current;
        }
    }
return current;
}

/* console.logs to test */
console.log("twoSmallest");
console.log("Smallest and 2nd smallest numbers are: ["+first+","+second]"");
//Add console.logs here to test!  Feel free to format this section however you like

console.log("\n////////////////////////////////////////////////////////////////////////////\n");

