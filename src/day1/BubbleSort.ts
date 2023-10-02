export default function bubble_sort(arr: number[]): void {
    let len = arr.length;

    while (len > 1) {
        for (let i = 0; i < len - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                // swap
                const tmp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = tmp;
            }
        }
        len--;
    }
}
