function setCookie(cname, cvalue, exdays) {
	const d = new Date()
	d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000)
	let expires = 'expires=' + d.toUTCString()
	document.cookie = cname + '=' + cvalue + ';' + expires + ';path=/'
}

function getCookie(cname) {
	let name = cname + '='
	let ca = document.cookie.split(';')
	for (let i = 0; i < ca.length; i++) {
		let c = ca[i]
		while (c.charAt(0) == ' ') {
			c = c.substring(1)
		}
		if (c.indexOf(name) == 0) {
			return c.substring(name.length, c.length)
		}
	}
	return ''
}

function checkCookie() {
	let user = getCookie('username')
	if (user != '') {
		alert('Welcome again ' + user)
	} else {
		user = prompt('Please enter your name:', '')
		if (user != '' && user != null) {
			setCookie('username', user, 365)
		}
	}
}

class Cookie {
	constructor(name, value, days) {
		this.name = name
		this.value = value
		this.days = days
        this.set()
	}

	set() {
		const d = new Date()
		d.setTime(d.getTime() + this.days * 24 * 60 * 60 * 1000)
		let expires = `expires=${d.toUTCString()}`
		document.cookie = `${this.name}=${this.value}; ${expires}; path=/`
	}

	static get(cookieName) {
		let name = cookieName + '='
		let ca = document.cookie.split(';')
		for (let i = 0; i < ca.length; i++) {
			let c = ca[i]
			while (c.charAt(0) == ' ') {
				c = c.substring(1)
			}
			if (c.indexOf(name) == 0) {
				return c.substring(name.length, c.length)
			}
		}
		return ''
	}

	update(name, newName, newValue, newDays) {}

	static remove(name) {
		let cookie = this.get(name)
		console.log(cookie)
	}

	static check(name) {
		let cookie = this.get(name)
		if (cookie != '') {
			return true
		}
		return false
	}
}

const user = new Cookie('username', 'Jane Doe', 45)

console.log(Cookie.get('username'));
console.log(Cookie.check('username'));
console.log(Cookie.remove('username'));

