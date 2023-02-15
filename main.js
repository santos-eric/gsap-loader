import { gsap } from 'gsap';
import imagesLoaded from 'imagesloaded';

const content = document.querySelector('section');

// get all images
const imgLoad = imagesLoaded(content);

// after images are done loading the loader disappears
imgLoad.on('done', (instance) => {
	// gsap can be used with gsap.to/.from or creating the timeline below
	// hide icon
	gsap.to('svg', {
		scale: 0,
	});

	// load the blinder divs up the Y axis, staggered by 3s, with ease
	gsap.to('.blinder', {
		scaleY: 0,
		stagger: 0.3,
		ease: 'power3.out',
	});

	// setting up timeline
	const tl = gsap.timeline();

	// creates a stagger animation on h1, and p
	tl.to(
		['h1', 'p'],
		{
			y: 0,
			stagger: 0.3,
			duration: 2,
			ease: 'power4.out',
		},
		0
	);
});
