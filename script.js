gsap.registerPlugin(ScrollTrigger);

const nav = document.querySelector('.nav');
const navList = document.querySelectorAll('.nav-list');
const logo = document.querySelector('.nav-logo');

window.addEventListener('scroll', sizeNav);

function sizeNav() {
	if (window.scrollY > nav.offsetHeight - 30) {
		nav.classList.add('active');
		logo.style.width = '150px';
		logo.classList.add('active');
	} else {
		nav.classList.remove('active');
		logo.classList.remove('active');
		logo.style.width = '220px';
	}
}

//~ mobile nav
const navSlide = () => {
	const burger = document.querySelector('.burger');
	const navList = document.querySelector('.nav-list');
	const navItem = document.querySelectorAll('.nav-list a');

	burger.addEventListener('click', () => {
		navList.classList.toggle('open');
		burger.classList.toggle('toggle');
	});
	//close mobile nav when nav-link clicked
	for (let i = 0; i < navItem.length; i++) {
		let closeNav = navItem[i];

		closeNav.addEventListener('click', () => {
			navList.classList.toggle('open');
			burger.classList.toggle('toggle');
		});
	}
};
navSlide();

//~ mobile vh toolbar fix
let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);

window.addEventListener('resize', () => {
	let vh = window.innerHeight * 0.01;
	document.documentElement.style.setProperty('--vh', `${vh}px`);
});

// FAQ Accordion
const accordion = document.querySelectorAll('.question-btn');
const icon = document.querySelectorAll('.fa-angle-down');
const answer = document.querySelectorAll('.answer');
let i;

for (i = 0; i < accordion.length; i++) {
	let acc = accordion[i];

	acc.addEventListener('click', function () {
		this.classList.toggle('faq-active');

		let panel = this.nextElementSibling;
		if (panel.style.display == 'block') {
			panel.style.display = 'none';

			acc.style.backgroundColor = '#f2f2f2';
			acc.style.color = 'var(--dark-blue)';
		} else {
			panel.style.display = 'block';

			acc.style.backgroundColor = 'var(--dark-blue)';
			acc.style.color = '#f2f2f2';
		}
	});
}

//~========== BLOG =============
const blogPosts = [];

//! Tab icon???

//*~~~* GSAP
gsap.to('.nav a', {
	x: 0,
	duration: 0.5,
	ease: 'power2.out',
	opacity: 1,
	stagger: 0.08,
});
const btns = document.querySelectorAll('.btn');
for (let i = 0; i < btns.length; i++) {
	let btn = btns[i];

	gsap.from(btn, {
		scrollTrigger: {
			trigger: btn,
			start: '10px 90%',
		},
		opacity: 0,
		duration: 0.4,
	});
}

const zoomIn = gsap.utils.toArray('.zoom-in');
for (let i = 0; i < zoomIn.length; i++) {
	let zoom = zoomIn[i];

	gsap.from(zoom, {
		scrollTrigger: {
			trigger: zoom,
			start: '10px 90%',
		},
		scale: 0.1,
		opacity: 0,
		duration: 1.3,
		ease: 'power2.out',
	});
}

gsap.from('.aff-box', {
	scrollTrigger: {
		trigger: '.aff-box',
		start: '10px 90%',
	},
	opacity: 0,
	x: -200,
	duration: 0.8,
});

const stars = gsap.utils.toArray('.fa-star');
gsap.from(stars, {
	scrollTrigger: {
		trigger: stars,
		start: '5px 90%',
	},
	stagger: 0.09,
	opacity: 0.5,
	scale: 0.5,
	// delay: 1,
});
