const KeyMirror = arr => {
    const object = {};
    arr.forEach(item => {
        object[item] = item;
    });
    return object;
};

const generateKey = pre => {
    return `${pre}_${new Date().getTime()}`;
};

const MainUtils = {
    KeyMirror,
    generateKey,
};

export default MainUtils;