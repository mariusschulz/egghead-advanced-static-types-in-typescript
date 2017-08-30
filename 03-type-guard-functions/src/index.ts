const numbers = [0, 1, 2, [3, 4], 5, [6], [7], 8, [9]];

function isFlat<T>(array: (T | T[])[]): array is T[] {
    return !array.some(Array.isArray);
}

if (isFlat(numbers)) {
    numbers;
}
