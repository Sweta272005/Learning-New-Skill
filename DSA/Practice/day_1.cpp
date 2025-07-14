#include <iostream>
#include <vector>
using namespace std;

class Solution {
public:
    void moveZeroes(vector<int>& nums) {
        int lastNonZero = 0;
        for (int i = 0; i < nums.size(); i++) {
            if (nums[i] != 0) {
                swap(nums[lastNonZero++], nums[i]);
            }
        }
    }

    void applyOperations(vector<int>& nums) {
        for(int i = 0; i < nums.size() - 1; i++){
            if (nums[i] == nums[i + 1]){
                nums[i] *= 2;
                nums[i + 1] = 0;
            }
            else{
                continue;
            }
        }
        moveZeroes(nums);
    }
};

int main() {
    // Input vector
    vector<int> nums = {1,2,2,1,1,0};

    // Create object of Solution class
    Solution sol;

    // Call the moveZeroes function
    sol.applyOperations(nums);

    // Print the result
    for (int num : nums) {
        cout << num << " ";
    }
    cout << endl;

    return 0;
}