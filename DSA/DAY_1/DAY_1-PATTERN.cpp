#include <iostream> // Includes the input/output stream library
using namespace std;
int n =4;
int pattern1() {
    for(int i =1;i<=n;i++){
        for(int j=1;j<=n;j++){
            if(j%2==0){
                cout<<'A';
            }
            else{
                cout<<'*';
            }
        }
        cout<<endl;
    }
    return 0;
}
/*
*A*A
*A*A
*A*A
*A*A
*/

int pattern2() {
    for(int i =1;i<=n;i++){
        for(int j=1;j<=n-i+1;j++){
            if(j%2==0){
                cout<<'A';
            }
            else{
                cout<<'*';
            }
        }
        cout<<endl;
    }
    return 0;
}/*
*A*A
*A*
*A
*
*/

int pattern3() {
    for(int i =1;i<=n;i++){
        for(int j=1;j<=i;j++){
            if(j%2==0){
                cout<<'A';
            }
            else{
                cout<<'*';
            }
        }
        cout<<endl;
    }
    return 0;
}
/*
*
*A
*A*
*A*A
*/

int pattern4() {
    for(int i =1;i<=n;i++){
        for(int j=1;j<=i;j++){
            cout<<'*';
        }
        cout<<endl;
    }
    return 0;
}
/*
*
**
***
****
*/

int pattern5() {
    int num=10;
    for(int i =1;i<=n;i++){
        for(int j=1;j<=i;j++){
            cout<<num <<" ";
            num--;
        }
        
        cout<<endl;
    }
    return 0;
}
/*
10 
9 8 
7 6 5 
4 3 2 1 
*/


int pattern6() {
    int num=1;
    for(int i =1;i<=n;i++){
        for(int j=1;j<=n-i+1;j++){
            cout<<num <<" ";
            num++;
        }
        
        cout<<endl;
    }
    return 0;
}
/*
1 2 3 4 
5 6 7 
8 9 
10
*/


int main(){
    int n = 4;
    pattern2();
    return 0;

}