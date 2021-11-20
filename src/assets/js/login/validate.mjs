/**
 * 验证用户名
 * @param {String} str
 * @returns
 */
function validateUserName(str) {
    var pattern = /^[\w\!\`\.\@\#\$\^\&\*\(\)\-\+\=\'\"\:\;\?\\\/\,\[\]\<\>\|\%]{3,16}$/;
    // console.log("test:", pattern.test(str));
    return pattern.test(str);
}

/**
 * 验证密码
 * @param {String} str
 * @returns
 */
function validatePassword(str) {
    // var pattern = /^.{8,255}$/;
    var pattern = /^.{3,255}$/;
    return pattern.test(str);
}

/**
 * 验证手机号
 * @param {String} str
 * @returns
 */
function validatePhone(str) {
    var pattern = /^[\d\-]{3,255}$/;
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
    else if (type === "phone") {
        return validatePhone(str);
    }
    return false;
}

