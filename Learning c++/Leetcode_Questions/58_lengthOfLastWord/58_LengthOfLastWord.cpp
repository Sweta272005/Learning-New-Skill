#include <iostream>
#include <string>
using namespace std;

int lengthOfLastWord(string s) {
    int i = s.length() - 1;
    int length = 0;

    // Skip trailing spaces
    while (i >= 0 && s[i] == ' ') i--;

    // Count characters of the last word
    while (i >= 0 && s[i] != ' ') {
        length++;
        i--;
    }

    return length;
}

int main() {
    string s;
    cout << "Enter a string: ";
    getline(cin, s);

    cout << "Length of last word: " << lengthOfLastWord(s) << endl;

    return 0;
}
//output
/*
Enter a string: sweta yadav
Length of last word: 5
*/