import Header from '../../ui/header/header';
import './terms.css';

export default function Terms() {
    return (
        <div className='page isLight terms'>
            <Header />
            <div className='contTerms'>
                <h1 className="text-2xl font-bold">Aviso de Privacidad Simplificado – Aplicación Móvil "Planty"</h1>
                <p>Universidad Politécnica de Chiapas — Enero 2025</p>

                <section>
                    <h2 className="text-xl font-semibold">Responsable del Tratamiento de Datos Personales</h2>
                    <p><strong>Universidad Politécnica de Chiapas</strong></p>
                    <p>Proyecto Integrador: <strong>Planty - Sistema de Gestión de Huertos Urbanos</strong></p>
                    <p>Dirección: Suchiapa, Chiapas, México, C.P. 29150</p>
                    <p>Responsable del Proyecto: Armando Rodríguez Villarreal</p>
                    <p>Cargo: Analista de Datos</p>
                    <p>Correo institucional: 231184@ids.upchiapas.edu.mx</p>
                    <p>Correo para ejercer Derechos ARCO: <strong>bs.personal.0001@gmail.com</strong></p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold">Finalidad del Tratamiento de Datos</h2>
                    <p>
                        La aplicación móvil <strong>Planty</strong> es un proyecto académico desarrollado por estudiantes de la
                        Universidad Politécnica de Chiapas. Los datos personales serán utilizados para las siguientes
                        finalidades:
                    </p>

                    <h3 className="font-semibold mt-3">Finalidades Primarias (Necesarias)</h3>
                    <ul className="list-disc pl-6">
                        <li>Crear y administrar la cuenta de usuario</li>
                        <li>Acceso a funcionalidades de gestión de huertos</li>
                        <li>Generar recomendaciones mediante algoritmos genéticos</li>
                        <li>Enviar notificaciones sobre cuidado de plantas</li>
                        <li>Brindar asistencia mediante chatbot local</li>
                        <li>Almacenar y gestionar información de huertos</li>
                    </ul>

                    <h3 className="font-semibold mt-3">Finalidades Secundarias (No necesarias)</h3>
                    <ul className="list-disc pl-6">
                        <li>Mejorar la experiencia del usuario</li>
                        <li>Desarrollo y evaluación del proyecto</li>
                    </ul>
                    <p>Para negarse a finalidades secundarias, escriba a: <strong>bs.personal.0001@gmail.com</strong></p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold">Datos Personales que se Recaban</h2>

                    <h3 className="font-semibold">Datos de Identificación y Contacto</h3>
                    <ul className="list-disc pl-6">
                        <li>Nombre completo</li>
                        <li>Correo electrónico</li>
                        <li>Contraseña (cifrada)</li>
                        <li>Imagen de perfil (opcional)</li>
                        <li>Fecha de registro</li>
                    </ul>

                    <h3 className="font-semibold mt-3">Datos de Uso</h3>
                    <ul className="list-disc pl-6">
                        <li>Nivel de experiencia en cultivo</li>
                        <li>Información de huertos y plantas</li>
                        <li>Historial de actividades</li>
                        <li>Preferencias de configuración</li>
                        <li>Token de dispositivo (notificaciones)</li>
                    </ul>

                    <h3 className="font-semibold mt-3">Datos Técnicos</h3>
                    <ul className="list-disc pl-6">
                        <li>UUID</li>
                        <li>Token de sesión</li>
                        <li>Fecha y hora de uso</li>
                    </ul>

                    <p className="mt-2 font-medium">No se recopilan datos de GPS, biométricos o financieros.</p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold">Datos Sensibles</h2>
                    <p>Solo se considera sensible la <strong>contraseña</strong> (cifrada). Los demás datos no son sensibles conforme a la ley.</p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold">Transferencia de Datos</h2>
                    <ul className="list-disc pl-6">
                        <li>Firebase Cloud Messaging (Google)</li>
                        <li>Servicios de almacenamiento en nube</li>
                    </ul>
                    <p className="mt-2">El chatbot local no envía información a servicios externos.</p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold">Derechos ARCO</h2>
                    <p>Puede solicitar acceso, rectificación, cancelación u oposición enviando correo a:</p>
                    <p><strong>bs.personal.0001@gmail.com</strong></p>
                    <p>Tiempo de respuesta: máximo 1 hora hábil.</p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold">Revocación del Consentimiento</h2>
                    <p>Puede revocar el consentimiento enviando correo a <strong>bs.personal.0001@gmail.com</strong>.</p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold">Limitación de Uso</h2>
                    <p>Puede solicitar limitación de uso enviando correo al mismo medio.</p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold">Cookies y Tecnologías Similares</h2>
                    <p>No se usan cookies; solo almacenamiento seguro y token de Firebase.</p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold">Medidas de Seguridad</h2>
                    <ul className="list-disc pl-6">
                        <li>Cifrado de contraseñas</li>
                        <li>HTTPS</li>
                        <li>JWT</li>
                        <li>Secure Storage</li>
                        <li>Microservicios con autenticación</li>
                        <li>Validación anti inyección</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-xl font-semibold">Período de Conservación</h2>
                    <p>Los datos serán eliminados al finalizar el proyecto: junio 2025.</p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold">Uso por Menores de Edad</h2>
                    <p>Edad mínima: 13 años. Menores de 18 requieren consentimiento de tutor.</p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold">Cambios al Aviso de Privacidad</h2>
                    <p>Los cambios se notificarán por app, correo y sección de configuración.</p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold">Consentimiento</h2>
                    <p>Al usar la app, el usuario acepta los términos del aviso de privacidad.</p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold">Equipo de Desarrollo</h2>
                    <ul className="list-disc pl-6">
                        <li>Leonardo Favio Nájera Morales — 231230</li>
                        <li>Edgar Fabricio Jiménez Urbina — 231221</li>
                        <li>Armando Rodríguez Villarreal — 231184</li>
                        <li>Angel Gabriel Guzmán Pérez — 223270</li>
                    </ul>
                    <p className="mt-2">Última actualización: Enero 2025</p>
                </section>
            </div>
        </div>
    );
}