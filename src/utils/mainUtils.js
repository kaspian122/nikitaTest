function KeyMirror(arr) {
    const object = {};
    arr.forEach(item => {
        object[item] = item;
    });
    return object;
}

const MainUtils = {
    KeyMirror,
};

export default MainUtils;