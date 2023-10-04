export default function bfs(graph: WeightedAdjacencyMatrix, source: number, needle: number): number[] | null {
    const seen = new Array(graph.length).fill(false);
    const prev = new Array(graph.length).fill(-1);

    seen[source] = true;
    const q: number[] = [source];

    // find needle
    do {
        const curr = q.shift() as number;
        if (curr === needle) {
            break;
        }
        const adjacencies = graph[curr];
        for (let i = 0; i < adjacencies.length; i++) {
            if (adjacencies[i] === 0) {
                continue;
            }
            if (seen[i]) {
                continue;
            }
            prev[i] = curr;
            seen[i] = true;
            q.push(i);
        }
    } while (q.length);

    // build path backwards
    let curr = needle;
    const out: number[] = [];
    while (prev[curr] !== -1) {
        out.push(curr);
        curr = prev[curr];
    }

    if (out.length) {
        out.push(source);
        return out.reverse();
    }
    return null;
}
