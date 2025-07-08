#include <iostream> // Includes the input/output stream library
using namespace std;
int n =4;
int Pattern1() {
    int num=1;
    for(int i =1;i<=n;i++){
        //for(int j=1;j<=n;j++){
        //for(int j=1;j<=n-i+1;j++){
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

int Pattern2() {
    
    for(int i =1;i<=n;i++){
        int num=1;
        
        for(int j=1;j<=n;j++){
            cout<<num <<" ";
            num++;
        }
        
        cout<<endl;
    }
    return 0;
}
/*
1 2 3 4 
1 2 3 4 
1 2 3 4 
1 2 3 4 
*/

int Pattern3() {
    
    for(int i =1;i<=n;i++){
        for(int j=1;j<=i;j++){
            cout<<i;
        
        }
        
        cout<<endl;
    }
    return 0;
}
/*
1
22
333
4444
*/

int Pattern4() {
    
    for(int i =1;i<=n;i++){
        for(int j=i;j>=1;j--){
            cout<<j;
        
        }
        
        cout<<endl;
    }
    return 0;
}
/*
1
21
321
4321
*/

int Pattern5() {
    
    for(int i =1;i<=n;i++){
        for(int j=n-i+1;j>=1;j--){
            cout<<j;
        
        }
        
        cout<<endl;
    }
    return 0;
}
/*
4321
321
21
1
*/

int Pattern6() {
    
    for(int i =1;i<=n;i++){
        for(int j=1;j<=i-1;j++){
            cout<<" ";
        }
        for(int j=1;j<=n-i+1;j++){
            cout<<i;
        }
        
        cout<<endl;
    }
    return 0;
}
/*
1111
 222
  33
   4
*/
int main(){
    int n =4;
    Pattern6();
return 0;
}