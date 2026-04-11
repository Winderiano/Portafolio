import { motion } from 'framer-motion';
import { useLanguage } from '../hooks/useLanguage';
import { FaGraduationCap, FaAward } from 'react-icons/fa';

export default function Education() {
  const { t } = useLanguage();

  const education = t('education.items');
  const certificates = t('certificates.items');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="education" className="py-20 bg-white dark:bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {/* Title */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 dark:text-white mb-4">
              {t('education.title')}
            </h2>
          </motion.div>

          {/* Education Timeline */}
          <div className="space-y-6 mb-16">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ x: 5 }}
                className="flex gap-4 p-4 rounded-xl bg-slate-50 dark:bg-dark-light hover:shadow-lg transition-shadow"
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                    <FaGraduationCap className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <h4 className="font-bold text-slate-800 dark:text-white">
                      {edu.degree}
                    </h4>
                    <span className="px-2 py-0.5 text-xs rounded-full bg-primary/10 text-primary">
                      {edu.period}
                    </span>
                  </div>
                  <p className="text-primary font-medium text-sm mb-1">
                    {edu.institution}
                  </p>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    {edu.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Certifications */}
          <motion.div variants={itemVariants}>
            <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-2">
              <FaAward className="text-primary" />
              {t('certificates.title')}
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {certificates.map((cert, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  className="flex items-center gap-3 p-4 rounded-xl bg-gradient-to-r from-slate-50 to-slate-100 dark:from-dark-light dark:to-dark border border-slate-200 dark:border-slate-700 hover:border-primary transition-colors cursor-pointer"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <FaAward className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                    {cert}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}