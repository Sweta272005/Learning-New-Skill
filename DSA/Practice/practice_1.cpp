#include <iostream>
#include <vector>
using namespace std;
/*
//1.Pattern Print
int Pattern1(int n=4){
    //int n = 5;
    for(int i=1;i<=n;i++){
        for(int j=1;j<=i;j++){
            cout<<"*";
        }
        cout<<endl;
    }
    return 0;
}
int main(){
    int arr[5] = {5,6,7,8,9};
    //cout<<arr[1];
    Pattern1();
}*/

//2.vector (same like array except it is dynamic in terms of size)
/*
int Print_Value(vector<int>& nums){
    for(int i = 0;i<nums.size();i++) {
        if(i+1<nums.size()){
        cout<<nums[i]<<",";
        }
        else{
        cout<<nums[i];
        }
        //cout<<endl;
    }
    
    return 0;
}
int main(){
    vector<int> nums = {1,2,2,1,1,0};
    //int arr[5] = {5,6,7,8,9};
    //cout<<arr[1];
    //Pattern1(nums[2]);
    //Print_Value(nums);

}*/

//3.

class Solution {
public:
    int Pattern1(int n){
        //int n = 5;
        for(int i=1;i<=n;i++){
            for(int j=1;j<=i;j++){
                cout<<"*";
            }
            cout<<endl;
        }
        return 0;
    }
    int Print_Value(vector<int>& nums){
        for(int i = 0;i<nums.size();i++) {
            if(i+1<nums.size()){
            cout<<nums[i]<<",";
            }
            else{
            cout<<nums[i];
            }
            //cout<<endl;
        }
        
        return 0;
    }
};

int main() {
    // Input vector
    vector<int> nums = {1,2,2,1,1,0};

    // Create object of Solution class
    Solution sol;

    // Call the moveZeroes function
    sol.Pattern1(nums[2]);
    sol.Print_Value(nums);

    return 0;
}