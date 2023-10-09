export function isNodeError(err) {
    return err && err.stack && err.message;
}
