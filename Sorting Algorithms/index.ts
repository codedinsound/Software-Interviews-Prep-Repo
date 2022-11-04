import { SortType } from '../Data Types';

const bubbleSort = (array) => {};

class SortingAlgorithmsUtil {
  // MARK: Swap Function
  private static swap(array, i, j) {
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }

  // MARK: Numerical Sort Ascending using JavaScript .sort
  numericalSortAscending(array: number[]): void {
    array.sort((a, b) => a - b);
  }

  localeSort(array: string[]): void {
    const spanish = ['Único', 'árbol', 'cosas', 'fútbol'];

    spanish.sort((a, b) => a.localeCompare(b));
  }

  // ====================================================================================
  // MARK: Bubble Sort
  // Time: O(N^2)
  // Space: O(1)
  // ====================
  static bubbleSort(array: number[]): void {
    console.log('Bubble Sort');
    const length = array.length;

    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length; j++) {
        if (array[j] > array[j + 1]) this.swap(array, j, j + 1);
      }
    }
  }

  // ====================================================================================
  // MARK: Selection Sort
  // Time: O(N^2)
  // Space: O(1)
  // ====================
  static selectionSort(array: number[]): void {
    console.log('Selection Sort');
    const length = array.length;

    for (let i = 0; i < length; i++) {
      let min = i;
      let temp = array[i];

      for (let j = i + 1; j < length; j++) {
        if (array[j] < array[min]) {
          min = j;
        }
      }

      array[i] = array[min];
      array[min] = temp;
    }
  }

  // ====================================================================================
  // MARK: Insertion Sort
  // Time: O(N^2)
  // Space: O(1)
  // ====================
  static insertionSort(array: number[]): void {}

  // ====================================================================================
  // MARK: Merge Sort
  // Time: O(n log(n))
  // Space: O(n)
  // Description: Stable Algorithm will maintain original order in array example 6, 6 will be same order.
  // ====================
  private static merge() {}

  static mergeSort(array: number[]): void {}

  // ====================================================================================
  // MARK: Quick Sort
  // Time:
  // Space:
  // Description:
  // ====================
  private static partitionArray(array, left, right) {
    const pivotElement = array[right];
    let partitionIndex = left; // n + n/2 + n/4 + n/8 ......................

    for (let j = left; j < right; j++) {
      if (array[j] < pivotElement) {
        this.swap(array, partitionIndex, j);
        partitionIndex++;
      }
    }
    this.swap(array, partitionIndex, right);
    return partitionIndex;
  }

  static quickSort(array, left, right) {
    if (left < right) {
      const partitionIndex = this.partitionArray(array, left, right);
      this.quickSort(array, left, partitionIndex - 1);
      this.quickSort(array, partitionIndex + 1, right);
    }
  }

  // ====================================================================================
  // MARK: Hoeres Quick Select Algorithm
  // Time:
  // Space:
  // Description:
  // ====================

  static quickSelect(array, left, right, indexToFind) {
    if (left < right) {
      const partitionIndex = this.partitionArray(array, left, right);

      if (partitionIndex === indexToFind) return array[partitionIndex];
      else if (indexToFind < partitionIndex)
        return this.quickSelect(array, left, partitionIndex - 1, indexToFind);
      else
        return this.quickSelect(array, partitionIndex + 1, right, indexToFind);
    }
  }
  // ====================================================================================
  // MARK: TEST

  static test(algorithm: SortType): any[] {
    const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

    switch (algorithm) {
      case 0:
        this.bubbleSort(numbers);
        break;
      case 1:
        this.selectionSort(numbers);
        break;
      default:
    }
    return numbers;
  }
}

// Resources:
// https://www.toptal.com/developers/sorting-algorithms

export default SortingAlgorithmsUtil;
