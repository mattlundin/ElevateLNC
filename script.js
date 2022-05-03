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

//*~~~* GSAP REUSABLES;
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
		duration: 0.3,
	});
}

const fadeBackground = document.querySelectorAll('.fade-background');
for (let i = 0; i < fadeBackground.length; i++) {
	let fadeBack = fadeBackground[i];

	gsap.from(fadeBack, {
		scrollTrigger: {
			trigger: fadeBack,
		},
		opacity: 0,
		start: '10px 90%',
		duration: 0.7,
	});
}

const slideRight = gsap.utils.toArray('.slide-right');
for (let i = 0; i < slideRight.length; i++) {
	let slideR = slideRight[i];
	gsap.from(slideR, {
		scrollTrigger: {
			trigger: slideR,
			start: '10px 90%',
		},
		stagger: 0.5,
		opacity: 0,
		x: -200,
		duration: 0.8,
	});
}

const slideUp = gsap.utils.toArray('.slide-up');
for (let i = 0; i < slideUp.length; i++) {
	let slide = slideUp[i];

	gsap.from(slide, {
		scrollTrigger: {
			trigger: slide,
			start: '10px 90%',
		},
		y: 100,
		opacity: 0,
		stagger: 0.5,
		duration: 0.8,
	});
}

const clipRight = gsap.utils.toArray('.clip-right');
for (let i = 0; i < clipRight.length; i++) {
	let clipR = clipRight[i];

	gsap.to(clipR, {
		scrollTrigger: {
			trigger: clipR,
			start: '10px 90%',
		},
		delay: 0.5,
		duration: 0.8,
		stagger: 0.9,
		'clip-path': 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
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

// * ===== HOME =====

if (document.body.classList == 'home-page') {
	// gsap.delayedCall(4, () => slideIt());

	const homeCol = gsap.utils.toArray('.home-column');
	for (let i = 0; i < homeCol.length; i++) {
		let hCol = homeCol[i];

		gsap.to(hCol, {
			scrollTrigger: {
				trigger: hCol,
				start: '10px 90%',
			},
			opacity: 1,
			stagger: 0.8,
			duration: 0.8,
			'clip-path': 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
		});
	}

	const stars = gsap.utils.toArray('.fa-star');
	gsap.from(stars, {
		scrollTrigger: {
			trigger: stars,
			start: '10px 90%',
		},
		stagger: 0.09,
		opacity: 0.5,
		scale: 0.5,
		delay: 1,
	});
}

const largeMedia = window.matchMedia('(min-width: 956px)');
const smallMedia = window.matchMedia('(max-width: 955px)');

//* ===== SERVICES =====

if (document.body.classList == 'services-page') {
	// * LARGER SCREENS FOR .BOX ELEMENTS

	// if (largeMedia.matches) {
	// 	gsap.to('.top-box', {
	// 		scrollTrigger: {
	// 			trigger: '.top-box',
	// 			start: '10px 90%',
	// 		},
	// 		delay: 0.4,
	// 		stagger: 0.5,
	// 		duration: 0.8,
	// 		'clip-path': 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
	// 		boxShadow: '5px 15px 20px rgba(0, 0, 0, 0.464)',
	// 	});
	// 	gsap.to('.top-box h4', {
	// 		scrollTrigger: {
	// 			trigger: '.top-box h4',
	// 			start: '10px 90%',
	// 		},
	// 		y: 0,
	// 		opacity: 1,
	// 		delay: 0.4,
	// 		stagger: 0.5,
	// 		duration: 0.9,
	// 	});
	// 	gsap.to(
	// 		'.top-box p',
	// 		{
	// 			scrollTrigger: {
	// 				trigger: '.top-box p',
	// 			},
	// 			y: 0,
	// 			opacity: 1,
	// 			delay: 0.5,
	// 			stagger: 0.5,
	// 			duration: 0.5,
	// 		},
	// 		'-=.3'
	// 	);
	// 	gsap.to('.mid-box', {
	// 		scrollTrigger: {
	// 			trigger: '.mid-box',
	// 			start: '10px 90%',
	// 		},
	// 		delay: 0.4,
	// 		stagger: 0.5,
	// 		duration: 0.8,
	// 		'clip-path': 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
	// 	});
	// 	gsap.to('.mid-box h4', {
	// 		scrollTrigger: {
	// 			trigger: '.mid-box h4',
	// 			start: '10px 90%',
	// 		},
	// 		y: 0,
	// 		opacity: 1,
	// 		delay: 0.4,
	// 		stagger: 0.5,
	// 		duration: 0.5,
	// 	});
	// 	gsap.to(
	// 		'.mid-box p',
	// 		{
	// 			scrollTrigger: {
	// 				trigger: '.mid-box p',
	// 			},
	// 			y: 0,
	// 			opacity: 1,
	// 			delay: 0.5,
	// 			stagger: 0.5,
	// 			duration: 0.5,
	// 		},
	// 		'-=.3'
	// 	);
	// 	gsap.to('.bottom-box', {
	// 		scrollTrigger: {
	// 			trigger: '.bottom-box',
	// 			start: '10px 90%',
	// 		},
	// 		delay: 0.4,
	// 		stagger: 0.5,
	// 		duration: 0.8,
	// 		'clip-path': 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
	// 	});
	// 	gsap.to('.bottom-box h4', {
	// 		scrollTrigger: {
	// 			trigger: '.bottom-box h4',
	// 			start: '10px 90%',
	// 		},
	// 		y: 0,
	// 		opacity: 1,
	// 		delay: 0.4,
	// 		stagger: 0.5,
	// 		duration: 0.5,
	// 	});
	// 	gsap.to(
	// 		'.bottom-box p',
	// 		{
	// 			scrollTrigger: {
	// 				trigger: '.bottom-box p',
	// 			},
	// 			y: 0,
	// 			opacity: 1,
	// 			delay: 0.5,
	// 			stagger: 0.5,
	// 			duration: 0.5,
	// 		},
	// 		'-=.3'
	// 	);
	// }
	//*  SMALLER SCREENS FOR .BOX ELEMENTS

	const boxes = gsap.utils.toArray('.box-img-box img');
	const boxHeaders = gsap.utils.toArray('.box h4');
	const boxPs = gsap.utils.toArray('.box p');

	for (let i = 0; i < boxes.length; i++) {
		let box = boxes[i];

		// if (smallMedia.matches) {
		gsap.to(box, {
			scrollTrigger: {
				trigger: box,
			},
			// delay: 0.4,
			duration: 1.5,
			// 'clip-path': 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
			opacity: 1,
		});
	}
	// }
	for (let i = 0; i < boxHeaders.length; i++) {
		let boxHeader = boxHeaders[i];

		// if (smallMedia.matches) {
		gsap.to(boxHeader, {
			scrollTrigger: {
				trigger: boxHeader,
				start: '10px 90%',
			},
			y: 0,
			opacity: 1,
			delay: 0.4,
			duration: 0.5,
		});
	}
	// }
	for (let i = 0; i < boxPs.length; i++) {
		let boxP = boxPs[i];

		// if (smallMedia.matches) {
		gsap.to(boxP, {
			scrollTrigger: {
				trigger: boxP,
			},
			y: 0,
			opacity: 1,
			delay: 0.5,
			// stagger: 0.6,
			duration: 0.5,
		});
	}
	// }
}

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

//* ===== ABOUT =====

if (document.body.classList == 'about-page') {
	let tlAbout = gsap.timeline({
		defaults: {
			ease: 'power2.out',
			opacity: 1,
			duration: 0.5,
		},
	});
	tlAbout
		.from('.top p', {
			y: 200,
			opacity: 0,
			duration: 0.8,
			stagger: 0.14,
		})
		.to('.about-line:first-of-type', {
			x: -2000,
			duration: 2,
		})
		.to(
			'.about-line:last-of-type',
			{
				x: 2000,
				duration: 2,
			},
			'-=1.5'
		);
}
//* About and why
if (document.body.classList == 'about-page' || 'sub-page') {
	const abouts = gsap.utils.toArray('.about-desc h4, .about-desc p');
	abouts.forEach((about) => {
		gsap.from(about, {
			scrollTrigger: {
				trigger: about,
				start: '10px 90%',
			},
			x: -200,
			opacity: 0,
			stagger: 1,
			duration: 1,
		});
	});
}

//* ===== WHY WORK WITH LNC =====
if (document.body.classList == 'sub-page') {
	let tlWhy = gsap.timeline({
		defaults: {
			ease: 'power3.out',
			opacity: 1,
		},
	});
	tlWhy
		.to('.img-box', {
			duration: 1,
			'clip-path': 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)',
		})
		.to('.block', {
			duration: 2.6,
			delay: 2.2,
			'clip-path': 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)',
		});

	// SMALL MEDIA

	gsap.to('.block', {
		scrollTrigger: {
			trigger: '.block',
			start: '10px 90%',
		},
		opacity: 1,
		duration: 1.3,
		x: 1,
		ease: 'none',
		'clip-path': 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)',
	});

	const tlDif = gsap.timeline({
		scrollTrigger: {
			trigger: '#different',
			start: '10px 90%',
		},
	});
	tlDif
		.to('.fade', {
			opacity: 1,
			duration: 2,
		})
		.to(
			'.clip-right',
			{
				duration: 0.5,
				stagger: 0.4,
				'clip-path': 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
			},
			'-=.5'
		);
}

//* ===== CONTACT =====
if (document.body.classList == 'contact-page') {
	gsap.from('.form-container h3', {
		scrollTrigger: {
			trigger: '.form-container h3',
			start: '10px 90%',
		},
		y: -100,
		duration: 1.3,
		opacity: 0,
		ease: 'power3.out',
	});
	gsap.to('.clip-right', {
		scrollTrigger: {
			trigger: '.form-container',
			start: '10px 90%',
		},
		duration: 1.5,
		stagger: 0.4,
		'clip-path': 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
	});
	const infos = gsap.utils.toArray('.info-work p');
	infos.forEach((info) => {
		gsap.from(info, {
			scrollTrigger: {
				trigger: info,
				start: '10px 90%',
			},
			x: -200,
			opacity: 0,
			stagger: 4,
			duration: 1,
		});
	});
}
