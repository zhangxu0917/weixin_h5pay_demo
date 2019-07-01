let btn = document.getElementById('pay-button');

btn.addEventListener('click', callpay, false);

function callpay(){
	if (typeof WeixinJSBridge == "undefined"){
		if( document.addEventListener ){
			document.addEventListener('WeixinJSBridgeReady', onBridgeReady, false);
		}else if (document.attachEvent){
			document.attachEvent('WeixinJSBridgeReady', onBridgeReady);
			document.attachEvent('onWeixinJSBridgeReady', onBridgeReady);
		}
	}else{
		onBridgeReady();
	}
}

function onBridgeReady(){
	axios.get('/pay', {}).then(res => {
		console.log(res)
	})
}
