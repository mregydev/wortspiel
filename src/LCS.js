module.exports = function (S, T) {
    /*Fetched from github with some additions*/

    /*
	 Let D[i,j] be the length of the longest matching string suffix between S[1]..S[i] and a segment of T between T[1]..T[j]. 
	 If the ith character in S doesn’t match the jth character in T, 
     then D[i,j] is zero to indicate that there is no matching suffix
	 */

    if (!S || !T) {
        return 0;
    }
    
    let D = [];
    let LCS_len = 0;
    let LCS = [];

    for (let i = 0; i < S.length; i++) {
        D[i] = [];
        for (let j = 0; j < T.length; j++) {
            if (S[i] == T[j]) {
                if (i == 0 || j == 0) {
                    D[i][j] = 1;
                } else {
                    D[i][j] = D[i - 1][j - 1] + 1;
                }

                if (D[i][j] > LCS_len) {
                    LCS_len = D[i][j];
                }
            } else {
                D[i][j] = 0;
            }
        }
    }
    return LCS_len;
}