import { useEffect, useRef, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { CouplePhoto } from "./components/CouplePhoto";
import { InvitationContent } from "./components/InvitationContent";
import { weddingData } from "./data/wedding";
import "./App.css";


function App() {
	const [isOpen, setIsOpen] = useState(false);
	const audioRef = useRef<HTMLAudioElement>(null);

	useEffect(() => {
		window.scrollTo(0, 0);
		document.documentElement.scrollTop = 0;
		document.body.scrollTop = 0;
	}, []);

	useEffect(() => {
		document.body.style.overflow = isOpen ? "" : "hidden";
		return () => {
			document.body.style.overflow = "";
		};
	}, [isOpen]);

	const handleOpenInvitation = () => {
		setIsOpen(true);
	};


	const unlockAudio = () => {
		setTimeout(() => {
			audioRef.current?.play().catch(() => {});
		}, 1500);
	};

	return (
		<div className="app">
			<Analytics />
			<SpeedInsights route="/" />
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
