#include <iostream>
#include <algorithm> // for sort

using namespace std;

void merge(int nums1[], int m, int nums2[], int n) {
    int i = m; // Start inserting at index m

    // Insert elements of nums2 into nums1
    for(int j = 0; j < n; j++) {
        nums1[i] = nums2[j];
        i++;
    }

    // Sort the combined array
    sort(nums1, nums1 + m + n);
}

int main() {
    int nums1[6] = {1, 2, 3, 0, 0, 0};
    int m = 3;

    int nums2[3] = {2, 5, 6};
    int n = 3;

    merge(nums1, m, nums2, n);

    cout << "Merged Array: ";
    for(int i = 0; i < m + n; i++) {
        cout << nums1[i] << " ";
    }
    cout << endl;

    return 0;
}
