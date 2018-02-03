let host = 'http://seadog007.party/api/test.php';

export async function uploadImg(base64) {
	var req = new Request(host, {
		method: 'POST',
		body: JSON.stringify({
			'img': base64
		})
	});
	fetch(req).then(function(response) {
		return response;	
	})
}