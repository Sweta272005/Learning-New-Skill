#include <iostream> // Includes the input/output stream library
using namespace std;
int n =5;
int Pattern1() {
    
    for(int i =1;i<=n;i++){
        for(int j=1;j<=n-i;j++){
            cout<<" ";
        }
        for(int j=1;j<=i;j++){
            cout<<j;
        }
        for(int j=i-1;j>=1;j--){
            cout<<j;
        
        }
        
        cout<<endl;
    }
    return 0;
}
/*
   1
  121
 12321
1234321
*/


//hollow diamond pattern
int Pattern2(){
    for(int i=1; i<=n; i++){
        //spaces1
        for (int j=1;j<=(n-i); j++){
            cout<<" ";
        }
        cout<<"*";
        //spaces2
        if(i!=1) {
        for(int j=1;j<=2*(i-1)-1; j++){
            cout<<" ";
        }
        cout<<"*";
        }
        cout << endl;
    }
    /*
       *
      * *
     *   *
    *     *
    */

    //bottom part
    for(int i = 1;i<=n-1;i++){
        //spaces1
        for(int j=1;j<=i;j++){
            cout<<" ";
        }
        cout << "*";
        //spaces2
        if(i!=n-1){
            for (int j=1;j<=(n+1)-2*i; j++){
                cout<<" ";
            }
            cout<<"*";
        }
        cout<<endl;
    }
    /*
     *   *
      * *
       *
    */
    return 0;
}
/*
   *
  * *
 *   *
*     *
 *   *
  * *
   *
*/
int Pattern3(){
    for(int i=1;i<=n;i++){
        for(int j=1;j<=i-1;j++){
            cout<<n+1-j;
        }
        for(int j=1;j<=2*(n-i)+1;j++){
            cout<<n-i+1;
        }
        if(i!=1){
        for(int j=i-1;j>=1;j--){
            cout<<n+1-j;
        }
        }
        cout<<endl;
    }
    for(int i=1;i<=n-1;i++){
        for(int j=1;j<=n-i;j++){
            cout<<n-j+1;
        }
        for(int j=1;j<=2*i-1;j++){
            cout<<i+1;
        }
        for(int j=1;j<=n-i;j++){
            cout<<i+j;
        }
        cout<<endl;
    }
    return 0;
}
int main(){
    int n =4;
    Pattern3();
return 0;
}