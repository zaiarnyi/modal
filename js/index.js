const modales = () => {
	const triggers = document.querySelectorAll('.popup__link'),
		popup = document.querySelectorAll('.popup');

	function getTrigger() {
		triggers.forEach((item) => {
			const el = item.dataset.popup;
			item.addEventListener('click', () => {
				showModal(el);
			});
		});
	}
	function getPopup() {
		popup.forEach((item) => {
			item.addEventListener('click', (e) => {
				if (
					e.target &&
					(e.target === item ||
						e.target === item.firstElementChild ||
						e.target === item.querySelector('.popup__close'))
				) {
					closeModal(item);
				}
			});
			window.addEventListener('keydown', (e) => {
				if(item.classList.contains('show') && e.key === 'Escape'){
					closeModal(item);
				}
			});
		});
	}

	function showModal(item) {
		document.body.style.overflow = 'hidden';
		popup.forEach((el) => {
			if (el.classList.contains(`popup_${item}`)) {
				el.classList.add('show');
			}
		});
	}

	function closeModal(item) {
		document.body.style.overflow = 'auto';
		item.classList.remove('show');
	}

	getTrigger();
	getPopup();
};

modales();
