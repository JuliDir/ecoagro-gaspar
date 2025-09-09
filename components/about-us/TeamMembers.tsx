import { motion } from 'framer-motion';
import { Users, Phone, Mail } from 'lucide-react';
import { teamMembers } from '@/lib/data/team-members';
import Image from 'next/image';

const TeamMembers = () => {
  const getWhatsAppUrl = (phone: string) => {
    const cleanPhone = phone.replace(/[^\d]/g, '');
    return `https://wa.me/${cleanPhone}`;
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const contentVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 }
  };

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:justify-items-center">
      {teamMembers.map((member, index) => (
        <motion.div
          key={index}
          className={`bg-gradient-to-br from-primary-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-primary-100 w-full h-[400px] flex flex-col ${
            // Centrar la última card cuando hay 7 elementos (3 columnas)
            teamMembers.length === 7 && index === 6 ? 'lg:col-start-2' : ''
            }`}
          variants={cardVariants}
          whileHover={{ y: -5 }}
        >
          {/* Foto placeholder - Altura fija */}
          <div className="relative w-32 h-32 mx-auto mb-6 flex-shrink-0">
            {member.image ? (
              <Image
                src={member.image}
                alt={member.name}
                width={128}
                height={128}
                className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-md"
              />
            ) : (
              <div className="w-full h-full rounded-full overflow-hidden shadow-lg border-3 border-primary-200 bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center">
                <div className="text-center">
                  <Users className="w-16 h-16 text-primary-600 mx-auto mb-1" />
                  <p className="text-primary-700 font-medium text-xs">Foto próximamente</p>
                </div>
              </div>
            )}
          </div>

          {/* Información del miembro */}
          <div className="text-center flex-1 flex flex-col">
            <h3 className="text-xl font-bold text-primary-800 mb-2">{member.name}</h3>
            <p className="text-primary-600 font-semibold mb-4">{member.position}</p>

            {/* Contacto */}
            <div className="space-y-2 mb-4">
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 bg-primary-600 rounded-md flex items-center justify-center">
                  <Mail className="w-3 h-3 text-white" />
                </div>
                <span className="text-gray-600 text-sm">{member.email}</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 bg-primary-600 rounded-md flex items-center justify-center">
                  <Phone className="w-3 h-3 text-white" />
                </div>
                <a 
                  href={getWhatsAppUrl(member.phone)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 text-sm hover:text-primary-600 transition-colors duration-200 cursor-pointer"
                >
                  {member.phone}
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default TeamMembers;