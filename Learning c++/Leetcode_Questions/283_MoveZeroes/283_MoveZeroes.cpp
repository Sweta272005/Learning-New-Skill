#include <iostream>
#include <vector>
using namespace std;

class Solution {
public:
    void moveZeroes(vector<int>& nums) {
        int count = 0;
        for(int i=0;i<nums.size();i++){
            if(nums[i]!=0){
                nums[count]=nums[i];
                count++;
            }
            
        }
        while(count<nums.size()){
            nums[count]=0;
            count++;
        }
          
    }
};

int main() {
    // Input vector
    vector<int> nums = {1,0,2,0,5,7,0,9,0};

    // Create object of Solution class
    Solution sol;

    // Call the moveZeroes function
    sol.moveZeroes(nums);

    // Print the result
    for (int num : nums) {
        cout << num << " ";
    }
    cout << endl;

    return 0;
}
/*
//leetcode solution submitted by me - respect phle se hai
class Solution {
public:
    void moveZeroes(vector<int>& nums) {
        int count = 0;
        for(int i=0;i<nums.size();i++){
            if(nums[i]!=0){
                nums[count]=nums[i];
                count++;
            }
            
        }
        while(count<nums.size()){
            nums[count]=0;
            count++;
        }
          
    }
};
*/

/*
//leetcode solution
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
    
        
    };
}*/
