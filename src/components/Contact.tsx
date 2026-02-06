import { motion } from "framer-motion";
import { weddingData } from "../data/wedding";
import "./Contact.css";

export function Contact() {
	if (!weddingData.groomPhone && !weddingData.bridePhone) {
		return null;
	}

	return (
		<motion.div
			className="contact-block"
			initial={{ opacity: 0, y: 24 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true }}
			transition={{ duration: 0.5 }}
		>
			<h2 className="contact-title">CONTACT</h2>
			<div className="contact-list">
				{weddingData.groomPhone && (
					<div className="contact-item">
						<span className="contact-label">{weddingData.groomName}</span>
						<a
							href={`tel:${weddingData.groomPhone.replace(/\s/g, "")}`}
							className="contact-phone"
						>
							{weddingData.groomPhone}
						</a>
					</div>
				)}
				{weddingData.bridePhone && (
					<div className="contact-item">
						<span className="contact-label">{weddingData.brideName}</span>
						<a
							href={`tel:${weddingData.bridePhone.replace(/\s/g, "")}`}
							className="contact-phone"
						>
							{weddingData.bridePhone}
						</a>
					</div>
				)}
			</div>
		</motion.div>
	);
}
