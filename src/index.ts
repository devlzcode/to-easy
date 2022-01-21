type ToResult<T, U = Error> = [undefined, T] | [U, undefined]

/**
 * @param { Promise } asyncFn The asynchronous function
 */
export const asyncTo = <T, U = Error>(
    asyncFn: Promise<T>
): Promise<ToResult<T, U>> => asyncFn
    .then<[undefined, T]>((result: T) => [undefined, result])
    .catch<[U, undefined]>((e: U) => [e, undefined])

/**
 * @param { Function } syncFn The synchronous function
 */
export const syncTo = <T, U = Error>(
    syncFn: (...rest: unknown[]) => T,
    ...rest: unknown[]
): ToResult<T, U> => {
    try {
        const result = syncFn(...rest)
        return [undefined, result]
    } catch(e) {
        return [<U>e, undefined]
    }
}
