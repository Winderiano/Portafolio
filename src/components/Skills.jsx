import { motion } from 'framer-motion';
import { useLanguage } from '../hooks/useLanguage';
import { FaStethoscope, FaCode, FaBrain, FaTools, FaUsers, FaCheckCircle } from 'react-icons/fa';

// Mapeo de logos usando react-icons/fa
const getLogo = (logoName) => {
  const logos = {
    python: '🐍',
    django: '🎯',
    flask: '⚗️',
    fastapi: '⚡',
    mysql: '🐬',
    postgresql: '🐘',
    html: '📄',
    javascript: '📜',
    react: '⚛️',
    tailwind: '🎨',
    github: '🐙',
    docker: '🐳',
    n8n: '🔄',
  };
  return logos[logoName] || null;
};

// Colores para niveles
const getLevelColor = (level) => {
  const colors = {
    beginner: { bg: 'bg-yellow-100', text: 'text-yellow-700', bar: 'bg-yellow-400', width: '25%' },
    intermediate: { bg: 'bg-blue-100', text: 'text-blue-700', bar: 'bg-blue-500', width: '50%' },
    advanced: { bg: 'bg-green-100', text: 'text-green-700', bar: 'bg-green-500', width: '75%' },
    expert: { bg: 'bg-purple-100', text: 'text-purple-700', bar: 'bg-purple-500', width: '100%' },
  };
  return colors[level] || colors.beginner;
};

export default function Skills() {
  const { t } = useLanguage();

  const skillCategories = [
    {
      key: 'medical',
      icon: FaStethoscope,
      gradient: 'from-red-500 to-rose-600',
      bgGradient: 'from-red-50 to-rose-100 dark:from-red-900/20 dark:to-rose-900/20',
    },
    {
      key: 'backend',
      icon: FaCode,
      gradient: 'from-blue-500 to-cyan-600',
      bgGradient: 'from-blue-50 to-cyan-100 dark:from-blue-900/20 dark:to-cyan-900/20',
    },
    {
      key: 'frontend',
      icon: FaCode,
      gradient: 'from-orange-500 to-amber-600',
      bgGradient: 'from-orange-50 to-amber-100 dark:from-orange-900/20 dark:to-amber-900/20',
    },
    {
      key: 'ai',
      icon: FaBrain,
      gradient: 'from-violet-500 to-purple-600',
      bgGradient: 'from-violet-50 to-purple-100 dark:from-violet-900/20 dark:to-purple-900/20',
    },
    {
      key: 'tools',
      icon: FaTools,
      gradient: 'from-cyan-500 to-teal-600',
      bgGradient: 'from-cyan-50 to-teal-100 dark:from-cyan-900/20 dark:to-teal-900/20',
    },
    {
      key: 'soft',
      icon: FaUsers,
      gradient: 'from-emerald-500 to-teal-600',
      bgGradient: 'from-emerald-50 to-teal-100 dark:from-emerald-900/20 dark:to-teal-900/20',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08 },
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

          {/* Skills Grid - 3 columnas */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category) => {
              const items = t(`skills.${category.key}.items`) || [];
              return (
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

                  {/* Skills con niveles */}
                  <div className="space-y-3">
                    {items.map((item, index) => {
                      const levelColors = getLevelColor(item.level);
                      const logo = item.logo ? getLogo(item.logo) : null;
                      
                      return (
                        <div key={index} className="flex items-center justify-between group">
                          <div className="flex items-center gap-2">
                            {logo && <span className="text-lg">{logo}</span>}
                            <span className="text-sm text-slate-700 dark:text-slate-300 group-hover:text-primary transition-colors">
                              {item.name}
                            </span>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="w-16 h-1.5 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                              <motion.div
                                initial={{ width: 0 }}
                                whileInView={{ width: levelColors.width }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className={`h-full ${levelColors.bar} rounded-full`}
                              />
                            </div>
                            <span className={`text-xs px-2 py-0.5 rounded-full ${levelColors.bg} ${levelColors.text}`}>
                              {t(`skills.levels.${item.level}`)}
                            </span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}