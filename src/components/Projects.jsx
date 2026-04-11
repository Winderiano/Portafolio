import { motion } from 'framer-motion';
import { useLanguage } from '../hooks/useLanguage';
import { FaGithub, FaEye, FaStar } from 'react-icons/fa';

export default function Projects() {
  const { t } = useLanguage();

  const projects = t('projects.items');
  
  // Ordenar proyectos - el destacado primero
  const sortedProjects = [...projects].sort((a, b) => {
    if (a.featured && !b.featured) return -1;
    if (!a.featured && b.featured) return 1;
    return 0;
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  // Iconos por tipo de proyecto
  const getProjectIcon = (title) => {
    if (title.includes('Portfolio')) return '🌐';
    if (title.includes('API')) return '🔗';
    if (title.includes('Ecommerce')) return '🛒';
    if (title.includes('Cine')) return '🎬';
    return '💻';
  };

  return (
    <section id="projects" className="py-20 bg-slate-50 dark:bg-dark-light">
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
              {t('projects.title')}
            </h2>
            <p className="text-lg text-primary font-medium">
              {t('projects.subtitle')}
            </p>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sortedProjects.map((project, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className={`bg-white dark:bg-dark rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all relative ${
                  project.featured ? 'ring-2 ring-primary' : ''
                }`}
              >
                {/* Featured Badge */}
                {project.featured && (
                  <div className="absolute top-0 right-0 z-10">
                    <div className="bg-primary text-white px-3 py-1 rounded-bl-lg text-xs font-bold flex items-center gap-1">
                      <FaStar size={10} />
                      FEATURED
                    </div>
                  </div>
                )}

                {/* Image */}
                <div className={`h-48 relative overflow-hidden ${
                  project.featured 
                    ? 'bg-gradient-to-br from-primary/20 via-blue-500/20 to-accent/20 dark:from-primary/30 dark:via-blue-500/30 dark:to-accent/30' 
                    : 'bg-gradient-to-br from-slate-200 to-slate-300 dark:from-slate-700 dark:to-slate-800'
                }`}>
                  <div className="absolute inset-0 flex items-center justify-center text-7xl">
                    {getProjectIcon(project.title)}
                  </div>
                  {/* Overlay pattern */}
                  <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent" />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-2 flex items-center gap-2">
                    {project.title}
                    {project.featured && (
                      <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full">
                        {t('projects.own')}
                      </span>
                    )}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">
                    {project.description}
                  </p>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 text-xs font-medium rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-3">
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg font-medium text-sm hover:bg-primary-dark transition-colors"
                    >
                      <FaEye size={16} />
                      {t('projects.viewDemo')}
                    </a>
                    <a
                      href={project.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-lg font-medium text-sm hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                    >
                      <FaGithub size={16} />
                      {t('projects.viewRepo')}
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* More Projects CTA */}
          <motion.div variants={itemVariants} className="text-center mt-12">
            <a
              href="https://github.com/Winderiano"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white dark:bg-dark text-slate-700 dark:text-white rounded-full font-medium shadow-lg hover:shadow-xl transition-all"
            >
              <FaGithub size={20} />
              {t('projects.viewMore')}
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}