const username = document.getElementById('input-user');
const password = document.getElementById('input-password');

const shutdown = document.getElementById('shutdown');
const restart = document.getElementById('restart');
const suspend = document.getElementById('suspend');

/* const battery_display = document.getElementById('battery_display');
const battery_parts = battery_display.getElementsByTagName('div');
const battery_part = document.createElement('div');
const battery_percentage = document.getElementById('battery_percentage');
battery_part.classList.add('battery--part');


navigator.getBattery().then((battery) => {
    let level = Math.ceil(battery.level*10);
    battery_percentage.innerHTML = battery.level*100+'%';
    for(let i = 0; i < level; i++) {
	let part = battery_part.cloneNode(true);
	battery_display.appendChild(part);
    }    
    battery.addEventListener('levelchange', () => {
	let _level = Math.ceil(battery.level*10);
	if (level > _level) {
	    battery_display.removeChild(battery_parts[0]);
	} else if (level < _level) {
	    let part = battery_part.cloneNode(true);
	    battery_display.appendChild(part);
	}
	level = _level;
	battery_percentage.innerHTML = battery.level*100+'%';
    });
}); */

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
