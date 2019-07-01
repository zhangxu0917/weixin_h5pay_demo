function randomStr() {
	var str = "";
	var arr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
	for (var i = 1; i <= 32; i++) {
		var random = Math.floor(Math.random() * arr.length);
		str += arr[random];
	}
	return str;
}


//签名算法（把所有的非空的参数，按字典顺序组合起来+key,然后md5加密，再把加密结果都转成大写的即可）
function createSign(obj) {
	var stringA = 'appid=' + obj.appid + '&body=' + obj.body + '&mch_id=' + obj.mch_id + '&nonce_str=' + obj.nonce_str + '&notify_url=' + obj.notify_url + '&openid=' + obj.openid + '&out_trade_no=' + obj.out_trade_no + '&spbill_create_ip=' + obj.spbill_create_ip + '&total_fee=' + obj.total_fee + '&trade_type=' + obj.trade_type;
	var stringSignTemp = stringA + '&key=' + global.mch_key;
	var hash = crypto.createHash('md5');
	stringSignTemp = hash.update(stringSignTemp);
	var signValue = hash.digest('hex');
	return signValue.toUpperCase();
}
