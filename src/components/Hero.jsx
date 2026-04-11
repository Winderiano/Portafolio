import { motion } from 'framer-motion';
import { useLanguage } from '../hooks/useLanguage';
import { FaArrowDown, FaDownload } from 'react-icons/fa';

export default function Hero() {
  const { t } = useLanguage();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-emerald-50 dark:from-dark dark:via-dark-light dark:to-dark" />
        <div className="absolute top-20 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
      >
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div variants={itemVariants} className="text-center lg:text-left">
            <motion.p
              variants={itemVariants}
              className="text-lg text-primary font-medium mb-2"
            >
              {t('hero.greeting')}
            </motion.p>

            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-800 dark:text-white mb-4"
            >
              {t('hero.name')}
            </motion.h1>

            <motion.div
              variants={itemVariants}
              className="text-xl sm:text-2xl text-slate-600 dark:text-slate-300 mb-4"
            >
              <span className="font-semibold text-primary">{t('hero.title')}</span>
              <span className="mx-2">|</span>
              <span className="text-secondary">{t('hero.subtitle')}</span>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-slate-600 dark:text-slate-400 text-lg max-w-xl mx-auto lg:mx-0 mb-8"
            >
              {t('hero.description')}
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4 justify-center lg:justify-start"
            >
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-primary text-white rounded-full font-semibold hover:bg-primary-dark transition-colors shadow-lg shadow-primary/30"
              >
                {t('hero.cta')}
              </motion.a>

              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-white dark:bg-dark-light text-slate-700 dark:text-white rounded-full font-semibold border-2 border-slate-200 dark:border-slate-700 hover:border-primary hover:text-primary transition-colors"
              >
                {t('hero.contact')}
              </motion.a>

              <motion.a
                href="https://raw.githubusercontent.com/Winderiano/Portafolio/main/assets/Documents/CVWrdp.pdf"
                download="CV-Winder-Delgado.pdf"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-accent text-white rounded-full font-semibold hover:bg-accent-dark transition-colors shadow-lg shadow-accent/30 flex items-center gap-2"
              >
                <FaDownload size={16} />
                {t('hero.downloadCV')}
              </motion.a>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={itemVariants} className="flex gap-4 mt-8 justify-center lg:justify-start">
              <a
                href="https://www.linkedin.com/in/winder-ricardo-delgado-pereira-38b3b0236"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-slate-100 dark:bg-dark-light text-slate-600 dark:text-slate-300 hover:bg-primary hover:text-white transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a
                href="https://github.com/Winderiano"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-slate-100 dark:bg-dark-light text-slate-600 dark:text-slate-300 hover:bg-slate-800 hover:text-white transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a
                href="https://wa.me/+5491137702483"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-slate-100 dark:bg-dark-light text-slate-600 dark:text-slate-300 hover:bg-green-500 hover:text-white transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.473 3.44 2.063 1.972 3.197 4.536 3.212 6.692-.003.353-.013.707-.038 1.058-1.131 5.868-5.653 10.636-11.569 10.857-1.467.03-2.898-.42-4.163-1.203-1.264-1.012-1.925-2.465-2.145-4.062-.22-.976-.153-2.026-.038-2.998l1.584-6.175-6.163-1.808zm11.596 16.051c-.19.346-.567.623-1.047.823-1.45.602-3.374.583-4.757-.165-1.38-1.044-2.325-2.961-2.56-4.735-.236-.949-.127-1.98.127-2.867l1.585-6.16 5.415 1.405c.63.247 1.166.601 1.533 1.018.47.537.706 1.247.706 2.04 0 1.657-1.133 3.44-2.965 4.55-.954.577-2.073.872-3.287.875-.456-.001-1.104-.127-1.678-.414l-5.89 1.532 1.532-5.89c.313-.865.436-1.78.436-2.693 0-2.277-1.443-4.31-3.46-5.278-2.124-.963-4.58-.963-6.704 0-2.13.968-3.46 3.001-3.46 5.278 0 2.277 1.443 4.31 3.46 5.278 1.34.644 2.898.908 4.433.908h.047c2.17 0 4.237-.627 5.98-1.792.927-.61 1.663-1.388 2.182-2.294l.406 1.6z"/>
                </svg>
              </a>
            </motion.div>
          </motion.div>

          {/* Image/Illustration */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center lg:justify-end"
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              className="relative"
            >
              <div className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full bg-gradient-to-br from-primary via-blue-500 to-accent p-1">
                <div className="w-full h-full rounded-full bg-white dark:bg-dark flex items-center justify-center overflow-hidden">
                  <img
                    src="https://raw.githubusercontent.com/Winderiano/Portafolio/main/assets/images/winderiano.png"
                    alt="Winder Delgado"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              {/* Floating badges */}
              <motion.div
                animate={{ x: [5, -5, 5], y: [0, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -right-4 top-10 bg-white dark:bg-dark-light p-3 rounded-xl shadow-lg"
              >
                <span className="text-2xl">🩺</span>
              </motion.div>
              <motion.div
                animate={{ x: [-5, 5, -5], y: [5, 0, 5] }}
                transition={{ duration: 5, repeat: Infinity }}
                className="absolute -left-4 bottom-20 bg-white dark:bg-dark-light p-3 rounded-xl shadow-lg"
              >
                <span className="text-2xl">💻</span>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          variants={itemVariants}
          className="flex justify-center mt-12"
        >
            <motion.a
              href="#about"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="p-3 rounded-full bg-slate-100 dark:bg-dark-light text-slate-600 dark:text-slate-300"
            >
              <FaArrowDown size={24} />
            </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}