
const arrToObj = (array, key) => {
    const initial = {};
    return array.reduce((obj, item) => {
        return {
            ...obj,
            [item[key]]: item,
        };
    }, initial);
};

module.exports = arrToObj;