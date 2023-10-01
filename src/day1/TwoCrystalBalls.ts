export default function two_crystal_balls(breaks: boolean[]): number {
    const stepSize = Math.floor(Math.sqrt(breaks.length));
    for (let i = 0; i < breaks.length; i += stepSize) {
        if (breaks[i]) {
            i -= stepSize;
            for (i; i < breaks.length; i++) {
                if (breaks[i]) {
                    return i;
                }
            }
        }
    }
    return -1;
}
