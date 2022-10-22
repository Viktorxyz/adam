const username = document.getElementById('input-user');
const password = document.getElementById('input-password');

const shutdown = document.getElementById('shutdown');
const restart = document.getElementById('restart');
const suspend = document.getElementById('suspend');

function start_authentication() {
    console.log(lightdm.is_authenticated);
    console.log(lightdm.users);
    console.log(lightdm.sessions);
    console.log(lightdm.authentication_user);
    console.log(lightdm.authentication_user);
    console.log(password.value);
    lightdm.respond(password.value);
}

function authenticate() {
    console.log(username.value);
    console.log(lightdm.users, lightdm.sessions);
    lightdm.authenticate(username.value);
}

function show_prompt(text, type) {
    console.log(text, type);
    if(type === 'password') {
		password.focus();
    }
}
function show_message(text, type) {
    console.log(text, type);
}
function authentication_complete() {
    lightdm.start_session_sync();
}

shutdown.addEventListener('click', () => { window.lightdm.shutdown(); });
restart.addEventListener('click', () => { window.lightdm.restart(); });
suspend.addEventListener('click', () => { window.lightdm.hibernate(); });

password.addEventListener('focus', () => { authenticate(); });
password.addEventListener('keypress', (e) => {
    if(e.key === 'Enter'){
	lightdm.respond(password.value);
	if(!lightdm.is_authenticated) {
	    password.value = '';
	    username.value = '';
	    username.focus();
	}
    }
});

// ligthdm.respond(passwd);
// ligthdm.authenticate(user_id);
// start_authentication();
// ligthdm.sessions;
// ligthdm.users;
// _util
// ligthdm.is_authenticated()
// ligthdm.authentication_user
