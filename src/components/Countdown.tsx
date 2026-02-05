import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { weddingData } from '../data/wedding';
import './Countdown.css';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function getTimeLeft(target: Date): TimeLeft {
  const now = new Date();
  const diff = target.getTime() - now.getTime();
  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
    seconds: Math.floor((diff % (1000 * 60)) / 1000),
  };
}

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

export function Countdown() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(() =>
    getTimeLeft(weddingData.weddingDate)
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft(weddingData.weddingDate));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const units: { key: keyof TimeLeft; label: string }[] = [
    { key: 'days', label: 'дней' },
    { key: 'hours', label: 'часов' },
    { key: 'minutes', label: 'минут' },
    { key: 'seconds', label: 'секунд' },
  ];

  const weddingDateStr = weddingData.weddingDate.toLocaleDateString('ru-RU', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });

  return (
    <section className="countdown-section">
      <motion.h2
        className="countdown-title"
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        До свадьбы осталось
      </motion.h2>
      <motion.p
        className="countdown-date"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        {weddingDateStr}
      </motion.p>
      <motion.div
        className="countdown-grid"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {units.map(({ key, label }) => (
          <motion.div key={key} className="countdown-unit" variants={item}>
            <span className="countdown-value">{timeLeft[key]}</span>
            <span className="countdown-label">{label}</span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
