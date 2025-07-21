#include <iostream>
#include <vector>
using namespace std;

class Solution {
    public:
        vector<int> applyOperations(vector<int>& nums) {
            for(int i = 0; i < nums.size() - 1; i++) {
                if(nums[i] == nums[i + 1]) {
                    nums[i] = nums[i] * 2;
                    nums[i + 1] = 0;
                }
            }
            int count = 0;
            for(int i = 0; i < nums.size(); i++) {
                if(nums[i] != 0) {
                    nums[count] = nums[i];
                    count++;
                }
            }
            while(count < nums.size()) {
                nums[count] = 0;
                count++;
            }
            return nums;   
        }      
    };

int main() {
    // Input vector
    vector<int> nums = {1,0,2,0,0,1};

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