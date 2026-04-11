import { motion } from 'framer-motion';
import { useLanguage } from '../hooks/useLanguage';
import { FaStethoscope, FaLaptopCode, FaGraduationCap } from 'react-icons/fa';

export default function About() {
  const { t } = useLanguage();

  const highlights = [
    {
      key: 'highlight1',
      icon: FaStethoscope,
      color: 'bg-red-100 dark:bg-red-900/30 text-red-600',
    },
    {
      key: 'highlight2',
      icon: FaLaptopCode,
      color: 'bg-blue-100 dark:bg-blue-900/30 text-blue-600',
    },
    {
      key: 'highlight3',
      icon: FaGraduationCap,
      color: 'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="about" className="py-20 bg-white dark:bg-dark">
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
              {t('about.title')}
            </h2>
            <p className="text-lg text-primary font-medium">
              {t('about.subtitle')}
            </p>
          </motion.div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Description */}
            <motion.div variants={itemVariants}>
              <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                {t('about.description')}
              </p>
              <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                {t('about.philosophy')}
              </p>
            </motion.div>

            {/* Highlights Cards */}
            <motion.div variants={itemVariants} className="space-y-6">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.key}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-4 p-4 rounded-xl bg-slate-50 dark:bg-dark-light hover:shadow-lg transition-shadow"
                >
                  <div className={`p-3 rounded-lg ${item.color}`}>
                    <item.icon size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800 dark:text-white mb-1">
                      {t(`about.${item.key}.title`)}
                    </h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      {t(`about.${item.key}.description`)}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Stats */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
          >
            {[
              { value: '10+', label: t('experience.items.0.role').split(' ')[0] + '+' },
              { value: '2', label: 'Países' },
              { value: '5+', label: 'Especializaciones' },
              { value: '15+', label: 'Proyectos Tech' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6 rounded-xl bg-gradient-to-br from-slate-50 to-slate-100 dark:from-dark-light dark:to-dark"
              >
                <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-sm text-slate-600 dark:text-slate-400">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}