const viewport = document.getElementById('embla');
const prevBtn = document.getElementById('previousSlideBtn');
const nextBtn = document.getElementById('nextSlideBtn');

const emblaApi = EmblaCarousel(
	viewport,
	{
		loop: true,
		align: 'start',
		dragFree: false,
		skipSnaps: false,
	},
	[
		EmblaCarouselAutoplay({
			delay: 6000,
			stopOnInteraction: false,
			stopOnMouseEnter: true,
			stopOnFocusIn: true,
		}),
	],
);

prevBtn.addEventListener('click', () => emblaApi.scrollPrev());
nextBtn.addEventListener('click', () => emblaApi.scrollNext());
