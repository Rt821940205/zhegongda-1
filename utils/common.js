export function keyWordTran(data) {
	return data.replace(/;|,/g, " ")
}

//校验邮箱格式
export function checkEmail(email) {
	return RegExp(
		/^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/
	).test(email);
}