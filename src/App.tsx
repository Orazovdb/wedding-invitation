import { useEffect, useRef, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { Analytics } from "@vercel/analytics/react";
import { CouplePhoto } from "./components/CouplePhoto";
import { InvitationContent } from "./components/InvitationContent";
import { weddingData } from "./data/wedding";
import "./App.css";


function App() {
	const [isOpen, setIsOpen] = useState(false);
	const audioRef = useRef<HTMLAudioElement>(null);

	useEffect(() => {
		document.body.style.overflow = isOpen ? "" : "hidden";
		return () => {
			document.body.style.overflow = "";
		};
	}, [isOpen]);

	const handleOpenInvitation = () => {
		setIsOpen(true);
	};

	/** Вызывать только из обработчика клика пользователя — иначе браузеры (iOS Safari, Android) блокируют воспроизведение. */
	const unlockAudio = () => {
		audioRef.current?.play().catch(() => {});
	};

	return (
		<div className="app">
			<Analytics />
			<audio
				ref={audioRef}
				src={weddingData.musicUrl}
				loop
				preload="metadata"
				aria-label="Фоновая музыка приглашения"
			/>
			<AnimatePresence mode="wait">
				<CouplePhoto
					key="couple-photo"
					onOpen={handleOpenInvitation}
					onUnlockAudio={unlockAudio}
				/>
				<InvitationContent key="content" />
			</AnimatePresence>
		</div>
	);
}

export default App;
