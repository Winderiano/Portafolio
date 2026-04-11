import { motion } from 'framer-motion';
import { useLanguage } from '../hooks/useLanguage';
import { FaStethoscope, FaLaptopCode, FaBrain, FaUsers } from 'react-icons/fa';

export default function Skills() {
  const { t } = useLanguage();

  const skillCategories = [
    {
      key: 'medical',
      icon: FaStethoscope,
      gradient: 'from-red-500 to-rose-600',
      bgGradient: 'from-red-50 to-rose-100 dark:from-red-900/20 dark:to-rose-900/20',
      items: t('skills.medical.items'),
    },
    {
      key: 'tech',
      icon: FaLaptopCode,
      gradient: 'from-blue-500 to-cyan-600',
      bgGradient: 'from-blue-50 to-cyan-100 dark:from-blue-900/20 dark:to-cyan-900/20',
      items: t('skills.tech.items'),
    },
    {
      key: 'ai',
      icon: FaBrain,
      gradient: 'from-violet-500 to-purple-600',
      bgGradient: 'from-violet-50 to-purple-100 dark:from-violet-900/20 dark:to-purple-900/20',
      items: t('skills.ai.items'),
    },
    {
      key: 'soft',
      icon: FaUsers,
      gradient: 'from-emerald-500 to-teal-600',
      bgGradient: 'from-emerald-50 to-teal-100 dark:from-emerald-900/20 dark:to-teal-900/20',
      items: t('skills.soft.items'),
    },
  ];

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
    <section id="skills" className="py-20 bg-slate-50 dark:bg-dark-light">
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
              {t('skills.title')}
            </h2>
            <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Una combinación única de experiencia médica y habilidades técnicas
            </p>
          </motion.div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.key}
                variants={itemVariants}
                className="bg-white dark:bg-dark rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                {/* Header */}
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.bgGradient} flex items-center justify-center mb-4`}>
                  <category.icon className={`w-6 h-6 bg-gradient-to-r ${category.gradient} bg-clip-text text-transparent`} />
                </div>

                <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-4">
                  {t(`skills.${category.key}.title`)}
                </h3>

                {/* Skills Tags */}
                <div className="flex flex-wrap gap-2">
                  {category.items.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Tech Stack Icons - simplified version */}
          <motion.div variants={itemVariants} className="mt-12">
            <div className="flex flex-wrap justify-center gap-4">
              {['Python', 'Django', 'Flask', 'FastAPI', 'MySQL', 'PostgreSQL', 'HTML', 'CSS', 'JS', 'Git'].map((tech, index) => (
                <motion.div
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ scale: 1.1 }}
                  className="px-4 py-2 rounded-lg bg-white dark:bg-dark shadow-md text-slate-700 dark:text-slate-300 font-medium hover:shadow-lg cursor-pointer transition-all"
                >
                  {tech}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}