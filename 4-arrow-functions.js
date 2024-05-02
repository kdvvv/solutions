// BEGIN
const each = (objects, callback) => {
    for (let item of objects) {
        callback.apply(item);
    }
}
export default each;
// END
