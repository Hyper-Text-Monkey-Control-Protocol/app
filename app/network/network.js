let host = 'http://seadog007.party/api';

export async function uploadImg(base64) {
	var req = new Request(host+'/test.php', {
		method: 'POST',
		body: JSON.stringify({
			'img': base64
		})
	});
	fetch(req).then(function(response) {
		return response;
	})
}

export async function sendVerCode(phone) {
	var req = new Request(host+'/send.php', {
		method: 'POST',
		body: JSON.stringify({
			to: phone
		})
	});
	var response = await fetch(req);
	return response.json();
}

export async function register(phone, phone_code, name, password, birth, nationality, position, photo, sex) {
	var req = new Request(host+'/register.php', {
		method: 'POST',
		body: JSON.stringify({
			phone: phone,
			phone_code: phone_code,
			name: name,
			password: password,
			birth: birth,
			nationality: nationality,
			position: 'OAO',
			photo: photo,
			sex: sex
		})
	});
	var response = await fetch(req);
	return response.json();
}

export async function login(phone, password) {
	var req = new Request(host+'/login.php', {
		method: 'POST',
		body: JSON.stringify({
			phone: phone,
			password: password
		})
	});
	var response = await fetch(req);
	return response.json();
}

export async function userStatus() {
	return {status: 200};
}