function qs(arr: number[], lo: number, hi: number): void {
    if (lo >= hi) {
        return;
    }

    // 1 - move the pivot
    const pivot = partition(arr, lo, hi);

    // 2 - recurse lower side
    qs(arr, lo, pivot - 1);

    // 3 - recurse upper side
    qs(arr, pivot + 1, hi);
}

function partition(arr: number[], lo: number, hi: number) {
    const pivot = arr[hi];
    let idx = lo - 1;
    for (let i = lo; i < hi; i++) {
        if (arr[i] <= pivot) {
            idx++;
            // swap low items to the front of the array
            const tmp = arr[i];
            arr[i] = arr[idx];
            arr[idx] = tmp;
        }
    }
    // swap the pivot to next place after all the low items
    // (Everything to the left of the pivot, is now small than the pivot)
    idx++;
    arr[hi] = arr[idx];
    arr[idx] = pivot;

    return idx;
}

export default function quick_sort(arr: number[]): void {
    qs(arr, 0, arr.length - 1);
}
