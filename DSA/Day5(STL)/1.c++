//pairs
#include <utility>
#include <iostream>
using namespace std;

void ExplainPair() {
    pair<int,int> p = {1,3};
    cout<< p.first <<" "<<p.second;
    cout<<endl;
    pair<int,pair<int,int>> pp = {1,{3,4}};
    cout<<p.first<<" "<< pp.second.first<<" "<< pp.second.second;
    cout<<endl;
    pair<int,int> arr[] = {{ 1,2},{2,5},{5,1}};
    cout << arr[1].second;
}
int main() {
    ExplainPair();
    return 0;
}