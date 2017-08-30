/**
 * Reverses the given string.
 * @param string The string to reverse.
 */
function reverse(string: string): string;

/**
 * Reverses the given array.
 * @param array The array to reverse.
 */
function reverse<T>(array: T[]): T[];

function reverse(stringOrArray: string | any[]) {
    return typeof stringOrArray === "string"
        ? [...stringOrArray].reverse().join("")
        : stringOrArray.slice().reverse();
}

const reversedString = reverse("TypeScript");
const reversedArray = reverse([4, 8, 15, 16, 23, 42]);
