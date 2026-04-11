import { motion } from 'framer-motion';
import { useLanguage } from '../hooks/useLanguage';
import { FaGraduationCap, FaAward, FaExternalLinkAlt, FaFileAlt, FaBook } from 'react-icons/fa';

export default function Education() {
  const { t } = useLanguage();

  const education = t('education.items');
  const certificates = t('certificates.items');
  const techLinks = t('techLinks.items');

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

          {/* Certifications con links */}
          <motion.div variants={itemVariants} className="mb-16">
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
                  className="p-4 rounded-xl bg-gradient-to-r from-slate-50 to-slate-100 dark:from-dark-light dark:to-dark border border-slate-200 dark:border-slate-700"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <FaAward className="w-5 h-5 text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <span className="text-sm font-medium text-slate-700 dark:text-slate-300 block truncate">
                        {cert.name}
                      </span>
                      <span className="text-xs text-slate-500 dark:text-slate-400">
                        {cert.institution}
                      </span>
                    </div>
                  </div>
                  <div className="flex gap-2 flex-wrap">
                    {cert.certificate && (
                      <a
                        href={cert.certificate}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors flex items-center gap-1"
                      >
                        <FaFileAlt className="w-3 h-3" />
                        {t('certificates.certificate')}
                      </a>
                    )}
                    {cert.studyPlan && (
                      <a
                        href={cert.studyPlan}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs px-2 py-1 rounded-full bg-accent/10 text-accent hover:bg-accent/20 transition-colors flex items-center gap-1"
                      >
                        <FaBook className="w-3 h-3" />
                        {t('certificates.studyPlan')}
                      </a>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Tech Links - Recursos y Documentación */}
          <motion.div variants={itemVariants}>
            <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-2">
              <FaExternalLinkAlt className="text-primary" />
              {t('techLinks.title')}
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {techLinks.map((tech, index) => (
                <a
                  key={index}
                  href={tech.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <motion.div
                    variants={itemVariants}
                    whileHover={{ scale: 1.02, y: -2 }}
                    className="p-4 rounded-xl bg-slate-50 dark:bg-dark-light border border-slate-200 dark:border-slate-700 hover:border-primary transition-colors cursor-pointer"
                  >
                    <h4 className="font-bold text-slate-800 dark:text-white mb-1">
                      {tech.name}
                    </h4>
                    <p className="text-xs text-primary hover:underline">
                      Ver documentación →
                    </p>
                  </motion.div>
                </a>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}