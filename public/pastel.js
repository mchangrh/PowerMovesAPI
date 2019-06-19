function random_bg_color() {
    const hue = ~~(Math.random() * 360);
	const pastel = 'hsl('+hue+', 100%, 87.5%)';
	document.body.style.background = pastel;
}
random_bg_color();