import { motion } from 'framer-motion';
import { useLanguage } from '../hooks/useLanguage';
import { FaBriefcase } from 'react-icons/fa';

export default function Experience() {
  const { t } = useLanguage();

  const experiences = t('experience.items');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <section id="experience" className="py-20 bg-white dark:bg-dark">
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
              {t('experience.title')}
            </h2>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-secondary" />

            {/* Items */}
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Dot */}
                  <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-primary border-4 border-white dark:border-dark transform -translate-x-1/2 z-10" />

                  {/* Content */}
                  <div className={`ml-12 md:ml-0 md:w-1/2 ${
                    index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'
                  }`}>
                    <div className="bg-slate-50 dark:bg-dark-light rounded-xl p-6 hover:shadow-lg transition-shadow">
                      <div className="flex items-center gap-2 mb-2">
                        <FaBriefcase className="w-5 h-5 text-primary" />
                        <span className="text-sm text-primary font-medium">
                          {exp.period}
                        </span>
                      </div>
                      <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-1">
                        {exp.role}
                      </h3>
                      <p className="text-primary font-medium mb-2">
                        {exp.company}
                      </p>
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                        {exp.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}