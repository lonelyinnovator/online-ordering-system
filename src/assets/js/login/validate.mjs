/**
 * 验证用户名
 * @param {String} str 
 * @returns 
 */
function validateUserName(str) {
    var pattern = /^.{3,16}$/;
    return pattern.test(str);
}

/**
 * 验证密码
 * @param {String} str 
 * @returns 
 */
function validatePassword(str) {
    var pattern = /^.{8,255}$/;
    return pattern.test(str);
}

/**
 * 验证邮箱
 * @param {String} str 
 * @returns
 */
function validateEmail(str) {
    var pattern = /^\w+@{1}\w+\.*\w+$/;
    return pattern.test(str);
}


/**
 * 验证用户提交的表单是否正确
 * @param {String} type 
 * @param {String} str 
 * @returns 
 */
export function validate(type, str) {
    if (type === "username") {
        return validateUserName(str);
    }
    else if (type === "password") {
        return validatePassword(str);
    }
    else if (type === "email") {
        return validateEmail(str);
    }
    return false;
}