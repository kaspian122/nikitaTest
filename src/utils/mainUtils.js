const generateKey = pre => {
    return `${pre}_${new Date().getTime()}`;
};

const MainUtils = {
    generateKey,
};

export default MainUtils;