export async function fetchName() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("Ghost Code Night");
        }, 10);
    })
}
