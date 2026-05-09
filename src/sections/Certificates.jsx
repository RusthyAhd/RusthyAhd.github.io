import { motion } from 'framer-motion';

const certificates = [
  'Certificate of Participation (IRC)',
  'Certificate in Solutions Architect (AWS)',
  'Certificate in Cyber Forensics (Great Learning)',
  'Certificate in Front End Development (Great Learning)',
  'Certificate in UI/UX (Great Learning)',
  'Certificate in Introduction to Python (Sololearn)',
];

function Certificates() {
  return (
    <div className="max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold mb-8">Certificates</h2>
      <div className="grid gap-4">
        {certificates.map((certificate, index) => (
          <motion.div
            key={certificate}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: index * 0.03 }}
            viewport={{ once: true }}
            whileHover={{ y: -6 }}
            className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white/70 dark:bg-gray-800/70 p-4 text-gray-800 dark:text-gray-100 transition-transform"
          >
            {certificate}
          </motion.div>
        ))}
      </div>
      <div className="h-px bg-gray-200 dark:bg-gray-700 my-16" />
    </div>
  );
}

export default Certificates;
