import { motion } from 'framer-motion';
import { useLanguage } from '../hooks/useLanguage';
import { FaHeart, FaStethoscope, FaCode } from 'react-icons/fa';

export default function Footer() {
  const { t } = useLanguage();

  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 bg-white dark:bg-dark border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row items-center justify-center gap-2 text-slate-600 dark:text-slate-400"
        >
          <span>{t('footer.text')}</span>
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="flex items-center gap-1 text-primary"
          >
            <FaStethoscope size={16} />
            <FaCode size={14} />
          </motion.div>
          <span className="font-medium text-primary">{t('footer.heart')}</span>
          <span>{t('footer.by')}</span>
          <span className="font-bold text-slate-800 dark:text-white">Winder Delgado</span>
          <span className="mx-2">•</span>
          <span>{currentYear}</span>
        </motion.div>
      </div>
    </footer>
  );
}