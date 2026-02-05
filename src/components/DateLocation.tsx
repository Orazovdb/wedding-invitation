import { motion } from 'framer-motion';
import { weddingData } from '../data/wedding';
import './DateLocation.css';

const dateStr = weddingData.weddingDate.toLocaleDateString('ru-RU', {
  day: 'numeric',
  month: 'long',
  year: 'numeric',
});
const parts = dateStr.split(/\s+/);
const dateDisplay = parts.length >= 3
  ? `${parts[0]} ${parts[1].toUpperCase()} ${parts[2]}`
  : dateStr;

export function DateLocation() {
  return (
    <section className="date-location-section">
      <motion.div
        className="date-intro-block"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <p className="date-intro-text">
          Мы будем счастливы разделить с вами радость события
        </p>
        <p className="date-main">{dateDisplay}</p>
        <p className="date-occasion">По случаю нашей свадьбы</p>
      </motion.div>

      <motion.div
        className="location-block"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <h2 className="location-title">LOCATION</h2>
        <div className="location-venue">
          <p className="location-name">Ресторан «{weddingData.venue}»</p>
          {weddingData.venueAddress && (
            <p className="location-address">{weddingData.venueAddress}</p>
          )}
          {weddingData.mapUrl && (
            <a
              href={weddingData.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="location-route-btn"
            >
              Посмотреть на карте
            </a>
          )}
        </div>
      </motion.div>
    </section>
  );
}
