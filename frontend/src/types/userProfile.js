const userRoleEnum = Object.freeze({
    NONE: 0,
    SELLER: 1,
    BUYER: 2,
});
const convertIntoToUserRole = function (i) {
    for (var p in userRoleEnum) {
        if (p === i || userRoleEnum[p] === i) {
            return p;
        }
    }
    return userRoleEnum.NONE
}
export { userRoleEnum, convertIntoToUserRole }