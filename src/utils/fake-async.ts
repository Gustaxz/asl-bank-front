export function fakeAsync<T>(value: T): Promise<T> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(value);
        }, 1000);
    });
}