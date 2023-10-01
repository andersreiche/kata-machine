export default function bs_list(haystack: number[], needle: number): boolean {
    let low = 0;
    let high = haystack.length;

    do {
        let midpoint = Math.floor(low + (high - low) / 2);
        let val = haystack[midpoint];
        if (val === needle) {
            return true;
        } else if (val < needle) {
            low = midpoint + 1;
        } else {
            high = midpoint;
        }
    } while (low < high);
    return false;
}
