class Solution {
  /**
   * @param {character[][]} board
   * @return {boolean}
   */
  isValidSudoku(board) {
    /***
     * 9 columns that need to be unique
     * 9 rows that need to be unqiue
     * 9 sub boxes that need to be uique
     *
     * Set for each of them 
     * columnArray = [Set, Set ...]
     * rowArray = [Set, Set ...]
     * subBoxArray = [Set, Set ...]
     *
     * column = x
     * row = y
     *
     * determineSubBox? 
     *  - math.floor(x / 3) + Math.floor(y / 3) * 3
     * [y][x]
     * 
     *   [1, 2, . ]
     */

    const subBoxArray = [];
    const columnArray = [];
    const rowArray = [];

    const subBoxIndex = (x, y) => { return (Math.floor(x / 3) + (Math.floor(y / 3) * 3)); }

    for (let i = 0; i < 9; i++) {
      subBoxArray[i] = new Set();
      columnArray[i] = new Set();
      rowArray[i] = new Set();
    }

    for (let y = 0; y < 9; y++) {
      for (let x = 0; x < 9; x++) {
        const val = board[y][x];
        if (val === '.') {
          continue;
        } else {
          if (columnArray[x].has(val) || rowArray[y].has(val) || subBoxArray[subBoxIndex(x, y)].has(val)) {
            return false;
          }
          columnArray[x].add(val);
          rowArray[y].add(val);
          subBoxArray[subBoxIndex(x, y)].add(val);
        }
      }
    }

    return true;

  }
}

