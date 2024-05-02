// BEGIN
const bind = (obj, fn) => {
    return function(...argument) {
        return fn.call(obj, ...argument);
    }
}
export default bind;
// END