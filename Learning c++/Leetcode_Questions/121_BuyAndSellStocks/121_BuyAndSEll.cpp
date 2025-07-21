#include <iostream>
#include <vector>
#include <climits>
using namespace std;

int maxProfit(vector<int>& prices) {
    int minPrice = INT_MAX;
    int maxProfit = 0;

    for (int price : prices) {
        if (price < minPrice) {
            minPrice = price; // Update when a lower price is found
        } else if (price - minPrice > maxProfit) {
            maxProfit = price - minPrice; // Update when a higher profit is possible
        }
    }

    return maxProfit;
}

int main() {
    int n;
    cout << "Enter number of days: ";
    cin >> n;

    vector<int> prices(n);
    cout << "Enter prices: ";
    for (int i = 0; i < n; i++) {
        cin >> prices[i];
    }

    int profit = maxProfit(prices);
    cout << "Maximum Profit: " << profit << endl;

    return 0;
}

//my logic
/*
class Solution {
public:
    int maxProfit(vector<int>& prices) {
        int n = prices.size();
        int maxProfit = 0;

        for (int i = 0; i < n - 1; i++) {
            int buyPrice = prices[i];

            // Check selling prices on the right of buyPrice
            for (int j = i + 1; j < n; j++) {
                int sellPrice = prices[j];
                if (sellPrice - buyPrice > maxProfit) {
                    maxProfit = sellPrice - buyPrice;
                }
            }
        }

        return maxProfit;
    }
};

*/