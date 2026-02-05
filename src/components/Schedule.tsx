import { motion } from 'framer-motion';
import { weddingData } from '../data/wedding';
import './Schedule.css';

const list = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const listItem = {
  hidden: { x: -20, opacity: 0 },
  visible: { x: 0, opacity: 1 },
};

export function Schedule() {
  return (
    <section className="schedule-section">
      <motion.div
        className="schedule-title-block"
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <span className="schedule-title-line">WEDDING</span>
        <span className="schedule-title-line">PROGRAM</span>
      </motion.div>

      <motion.ul
        className="schedule-list"
        variants={list}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {weddingData.schedule.map((item, i) => (
          <motion.li key={i} className="schedule-item" variants={listItem}>
            <span className="schedule-item-line" aria-hidden />
            <div className="schedule-item-body">
              <span className="schedule-item-head">
                <span className="schedule-time">{item.time}</span>{' '}
                <span className="schedule-item-title">{item.title}</span>
              </span>
              {item.description && (
                <p className="schedule-item-desc">{item.description}</p>
              )}
            </div>
          </motion.li>
        ))}
      </motion.ul>
			<motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
				className="schedule-footer-image"
      >
				<img src="/wedding.jpeg" alt="wedding" />
      </motion.div>
    </section>
  );
}
