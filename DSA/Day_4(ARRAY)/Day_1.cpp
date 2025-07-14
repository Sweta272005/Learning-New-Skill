//largest element in the array
#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;



int main() {
    vector<int> nums = {3, 1, 5, 2, 4};
    sort(nums.begin(), nums.end());

    cout << "Sorted numbers: ";
    for (int n : nums) {
        cout << n << " ";
    }
    cout << endl;

    return 0;
}

