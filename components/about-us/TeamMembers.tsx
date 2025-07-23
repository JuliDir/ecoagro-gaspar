import { motion } from 'framer-motion';
import { Users, Briefcase, Phone, Mail, QrCode as QrCodeIcon, Map } from 'lucide-react';
import QRCode from 'qrcode';
import { useState, useEffect } from 'react';
import { teamMembers } from '@/lib/data/team-members';

const TeamMembers = () => {
  const [qrCodes, setQrCodes] = useState<{ [phone: string]: string }>({});
  const [showQR, setShowQR] = useState<{ [index: number]: boolean }>({});

  useEffect(() => {
    const generateQRCodes = async () => {
      const codes: { [phone: string]: string } = {};
      for (const member of teamMembers) {
        const cleanPhone = member.phone.replace(/[^\d]/g, '');
        const whatsappUrl = `https://wa.me/${cleanPhone}`;
        
        try {
          const qrCodeDataUrl = await QRCode.toDataURL(whatsappUrl, {
            width: 120,
            margin: 2,
            color: {
              dark: '#000000',
              light: '#ffffff'
            }
          });
          codes[member.phone] = qrCodeDataUrl;
        } catch (error) {
          console.error('Error generating QR code:', error);
        }
      }
      setQrCodes(codes);
    };

    if (teamMembers.length > 0) {
      generateQRCodes();
    }
  }, []);

  const toggleQR = (index: number) => {
    setShowQR(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
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
          className={`bg-gradient-to-br from-primary-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-primary-100 w-full h-[485px] flex flex-col ${
            // Centrar la última card cuando hay 7 elementos (3 columnas)
            teamMembers.length === 7 && index === 6 ? 'lg:col-start-2' : ''
          }`}
          variants={cardVariants}
          whileHover={{ y: -5 }}
        >
          {/* Foto placeholder - Altura fija */}
          <div className="relative w-32 h-32 mx-auto mb-6 flex-shrink-0">
            <div className="w-full h-full rounded-full overflow-hidden shadow-lg border-3 border-primary-200 bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center">
              <div className="text-center">
                <Users className="w-16 h-16 text-primary-600 mx-auto mb-1" />
                <p className="text-primary-700 font-medium text-xs">Foto próximamente</p>
              </div>
            </div>
            {/* Icono decorativo */}
            <div className="absolute -top-2 right-2 w-10 h-10 bg-primary-600 rounded-full flex items-center justify-center">
              <Briefcase className="w-5 h-5 text-white" />
            </div>
          </div>

          {/* Contenido que cambia entre info y QR - Flex para ocupar espacio disponible */}
          <motion.div 
            className="text-center flex-1 flex flex-col"
            variants={contentVariants}
            animate="visible"
            key={showQR[index] ? 'qr' : 'info'}
          >
            {!showQR[index] ? (
              <>
                {/* Información del miembro - Flex-grow para ocupar espacio */}
                <div className="flex-1 flex flex-col justify-start">
                  <h3 className="text-xl font-bold text-primary-800 mb-2">{member.name}</h3>
                  <p className="text-primary-600 font-semibold mb-4">{member.position}</p>

                  {/* Contacto */}
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center space-x-2">
                      <div className="w-6 h-6 bg-primary-600 rounded-md flex items-center justify-center">
                        <Map className="w-3 h-3 text-white" />
                      </div>
                      <span className="text-gray-600 text-sm">{member.location}</span>
                    </div>
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
                      <span className="text-gray-600 text-sm">{member.phone}</span>
                    </div>
                  </div>
                </div>

                {/* Botón para mostrar QR - Siempre al final */}
                <button
                  onClick={() => toggleQR(index)}
                  className="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2 text-sm font-medium cursor-pointer flex-shrink-0"
                >
                  <QrCodeIcon className="w-4 h-4" />
                  <span>Ver QR WhatsApp</span>
                </button>
              </>
            ) : (
              <>
                {/* Vista QR - Flex-grow para ocupar espacio */}
                <div className="flex-1 flex flex-col items-center">
                  <h3 className="text-xl font-bold text-primary-800 mb-2">{member.name}</h3>
                  <p className="text-primary-600 font-semibold mb-4">WhatsApp QR</p>
                  
                  {qrCodes[member.phone] && (
                    <div className="bg-white rounded-xl shadow-lg border border-primary-100 mb-4 relative">
                      <img 
                        src={qrCodes[member.phone]} 
                        alt={`QR WhatsApp ${member.name}`}
                        className="w-32 h-32"
                      />
                      {/* Logo en el centro del QR */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-9 h-9 bg-white rounded-full shadow-md flex items-center justify-center border border-gray-200">
                          <img 
                            src="/images/logo-leaf.png" 
                            alt="Logo"
                            className="w-full h-full object-contain"
                          />
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Botón para volver a la info - Siempre al final */}
                <button
                  onClick={() => toggleQR(index)}
                  className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2 text-sm font-medium cursor-pointer flex-shrink-0"
                >
                  <Users className="w-4 h-4" />
                  <span>Ver información</span>
                </button>
              </>
            )}
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
};

export default TeamMembers;