export function findById(id, pianos) {
    for (let piano of pianos) {
        if (piano.id === id) {
            return piano;
        }
    }
}
