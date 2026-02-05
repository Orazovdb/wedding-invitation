/** Путь к аудио в public/. Положите файл "I Think They Call This Love" как i-think-they-call-this-love.mp3 */
export const weddingData = {
	musicUrl: "/forever-young.mp3",
	/** Фото пары на первом экране (при клике открывается приглашение) */
	couplePhotoUrl: "rh.jpeg",
	groomName: "Rovshen",
	brideName: "Hanum",
	weddingDate: new Date("2026-04-04T18:00:00"),
	venue: "Gülzaman",
	venueAddress: "",
	/** Фото ресторана (URL или путь в public/) */
	venuePhotoUrl: "https://picsum.photos/800/450?random=venue",
	/** Ссылка на карту (Google Maps и т.д.) */
	mapUrl:
		"https://www.google.com/maps/place/%D0%93%D1%83%D0%BB%D1%8C+%D0%B7%D0%B0%D0%BC%D0%B0%D0%BD,+%D1%83%D0%BB.+%D0%9E%D0%B3%D1%83%D0%B7%D1%85%D0%B0%D0%BD%D0%B0,+A%C5%9Fgabat,+%D0%A2%D1%83%D1%80%D0%BA%D0%BC%D0%B5%D0%BD%D0%B8%D1%81%D1%82%D0%B0%D0%BD/@37.9124155,58.3438763,144m/data=!3m1!1e3!4m6!3m5!1s0x3f70023ea9690633:0xb54a0a0303d503ae!8m2!3d37.9125344!4d58.3436165!16s%2Fg%2F11b6_9pfqn?entry=ttu&g_ep=EgoyMDI2MDIwMS4wIKXMDSoASAFQAw%3D%3D",
	schedule: [
		{ time: "18:00", title: "Прибытие гостей", description: "Встреча гостей, welcome-напитки и лёгкая атмосфера" },
		{ time: "18:30", title: "Начало банкета", description: "Торжественный ужин в ресторане Gülzaman" },
		{ time: "21:00", title: "Самый сладкий момент вечера", description: "Свадебный торт и поздравления" },
		{ time: "22:00", title: "Сияющий финал", description: "Танцы и развлечения" },
		{ time: "23:00", title: "Завершение вечера", description: "Прощание с гостями" }
	],
	photos: [
		"https://picsum.photos/400/500?random=1",
		"https://picsum.photos/400/500?random=2",
		"https://picsum.photos/400/500?random=3",
		"https://picsum.photos/400/500?random=4",
		"https://picsum.photos/400/500?random=5",
		"https://picsum.photos/400/500?random=6"
	]
} as const;
