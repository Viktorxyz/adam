const username = document.getElementById('username');
const password = document.getElementById('password');

const shutdown = document.getElementById('shutdown');
const restart = document.getElementById('restart');
const suspend = document.getElementById('suspend');
const debug = document.getElementById('debug');
const login = document.getElementById('login');

function start_authentication() {
	console.log('start_authentication()');
}

function users() {
	for(let user of ligthdm.users) {
		debug.appendChild(user);
	}
}
// users();

shutdown.addEventListener('click', () => { ligthdm.shutdown(); });
restart.addEventListener('click', () => { ligthdm.restart(); });
suspend.addEventListener('click', () => { ligthdm.hibernate(); });

login.addEventListener('click', () => { start_authentication() });

// 
// ligthdm.respond(passwd);
// ligthdm.authenticate(user_id);
// start_authentication();
// ligthdm.sessions;
// ligthdm.users;
// _util
// ligthdm.is_authenticated()
// ligthdm.authentication_user
