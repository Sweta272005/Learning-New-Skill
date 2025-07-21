#include <iostream>
#include <vector>
#include <unordered_map>
using namespace std;

// Function to find the single number using hash map toggle method
int singleNumber(vector<int>& nums) {
    unordered_map<int, bool> hash;  // Map to store number and its toggle state

    // Loop through each number in the array
    for (int num : nums) {
        // Toggle the boolean value for each occurrence of num
        // First time → false (default) → toggle to true
        // Second time → true → toggle to false
        // Works like ON/OFF switch
        hash[num] = !hash[num];
    }

    // Now, only the number that appeared once will have hash[num] = true
    for (auto& p : hash) {
        if (p.second)  // If the value is true (appeared odd number of times)
            return p.first;  // Return the unique number
    }

    return -1;  // This should never happen if input is valid
}
/*
//leeetcode answer
int singleNumber(vector<int>& nums) {
    int result = 0;
    for (int num : nums) {
        result ^= num;
    }
    return result;
}
*/

int main() {
    vector<int> nums = {4, 1, 2, 1, 2};  
    int result = singleNumber(nums);     
    cout << "Single number is: " << result << endl;  // Output the result
    return 0;
}
