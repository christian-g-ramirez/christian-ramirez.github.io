import React from "react";
import Carousel from "../components/Carousel";
import PharmaStockHome1 from "../assets/pharmaStock/PharmaStockHome1.jpg";
import PharmaStockDetected1 from "../assets/pharmaStock/PharmaStockDetected1.jpeg";
import Prosing from "../assets/Prosing/Prosing.jpg";
import ProsingChat from "../assets/Prosing/ProsignChat.jpg";
import PharmaStockHome from "../assets/pharmaStock/PharmaStockHome.jpg";
import ProsignPerfil from "../assets/Prosing/ProsignPerfil.png";
import pagina7demayo from'../assets/7demayo/pagina7demayo.png';
import seccion2 from'../assets/7demayo/seccion2.png';
import demayoseccion3 from "../assets/7demayo/demayoseccion3.png";
import demayoseccion4 from "../assets/7demayo/demayoseccion4.png";
import demayoseccion5 from "../assets/7demayo/demayoseccion5.png";
import mugica from "../assets/mugica/mugica.png";
import seccion2mugica from "../assets/mugica/seccion2mugica.png";
import seccion3mugica from "../assets/mugica/seccion3mugica.png";
import seccion4mugica from "../assets/mugica/seccion4mugica.png";
import seccion5mugica from "../assets/mugica/seccion5mugica.png";
import seccion6mugica from "../assets/mugica/seccion6mugica.png";
import ceciliaLogin from "../assets/cecilia/ceciliaLogin.png";
import CeciliaHome from "../assets/cecilia/ceciliaHome.png";
import ceciliaMeeting from "../assets/cecilia/ceciliaMeeting.png";
import ceciliaTopic from "../assets/cecilia/ceciliaTopic.png";
import ceciliaCost from "../assets/cecilia/ceciliaCost.png";

const Projects = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center space-y-8">
      <h1 className="text-4xl text-white text-center">Proyectos</h1>
      <Carousel
        images={[PharmaStockHome, PharmaStockHome1, PharmaStockDetected1]}
        description="PharmaStock es una innovadora aplicación móvil diseñada para automatizar el proceso de conteo de stock en farmacias mediante el análisis de imágenes de góndolas. Utilizando un motor de inteligencia artificial, PharmaStock es capaz de identificar y contar productos en tiempo real, generando un inventario detallado y preciso que facilita la gestión de stock y reduce significativamente los errores humanos.

En cuanto a las tecnologías utilizadas, PharmaStock se desarrolló utilizando React Native para la creación de la interfaz móvil, acompañado de NativeWind para el estilo de los componentes. La inteligencia artificial se integró mediante Large Language Models (LLMs) para el análisis y procesamiento de imágenes, mientras que MongoDB sirvió como la base de datos principal, y Expo facilitó la fase de desarrollo y despliegue.

Mi rol en este proyecto fue integral, abarcando desde el diseño y maquetado de las interfaces de usuario hasta la integración con el backend. Me enfoqué en asegurar que la experiencia de usuario fuera intuitiva y fluida, al mismo tiempo que trabajé en la implementación de la lógica necesaria para la correcta interacción con la base de datos y el motor de AI. Además, participé activamente en la fase de testeo, asegurando que la aplicación cumpliera con los altos estándares de calidad requeridos."
      />
      <Carousel
        images={[Prosing, ProsingChat, ProsignPerfil]}
        description="Prosign es una aplicación móvil para la negociación y creación de contratos futbolísticos. Permite a los usuarios gestionar perfiles según su rol, chatear, crear grupos, negociar cláusulas de contratos y firmar digitalmente. La app incluye funciones avanzadas como votaciones para contratos y gestión de contactos, todo en una interfaz intuitiva y segura.

Tecnologías utilizadas: React Native, Node.js, MongoDB, Expo, TypeScript, Git, GitHub.

Mi rol: Me encargué del maquetado y testeo de la aplicación, asegurando que la interfaz fuera responsiva y funcional en todos los dispositivos, además de participar en la integración y verificación de las funcionalidades principales."
      />
      <Carousel
        images={[pagina7demayo, seccion2, demayoseccion3, demayoseccion4, demayoseccion5]}
        description="7 de Mayo es una página SPA web estática creada para una cooperativa, diseñada para mostrar los servicios ofrecidos, experiencias previas, y un formulario de contacto. La web incluye un diseño completamente responsivo, asegurando accesibilidad en todos los dispositivos.

Tecnologías utilizadas: HTML, CSS, PHP, Bootstrap, Git, GitHub, Uizard.

Mi rol: Me encargué del diseño y maquetado de la página, creando una experiencia de usuario fluida y visualmente atractiva."
      />
      <Carousel
        images={[mugica, seccion2mugica, seccion3mugica, seccion4mugica, seccion5mugica, seccion6mugica]}
        description="Mugica Web es una página web SPA estática desarrollada para una fundación en honor al Padre Mugica. La web destaca la historia, logros y actividades actuales de la fundación, con un diseño responsivo que garantiza una experiencia de usuario coherente en todos los dispositivos.

        Tecnologías utilizadas HTML, CSS, Bootstrap, Git, GitHub, Uizard.
        
        Mi rol Me encargué del diseño y maquetado de la página, incluyendo la incorporación de imágenes, texto, barra de navegación y un formulario de contacto."
      />
      <Carousel
        images={[CeciliaHome, ceciliaLogin, ceciliaMeeting, ceciliaTopic, ceciliaCost]}
        description="Cecilia Bot es un bot de atención al cliente impulsado por LLMs como ChatGPT, diseñado para proporcionar información sobre la empresa, agendar reuniones mediante la API de Google Calendar e integrarse con plataformas como WhatsApp, Telegram e Instagram. También incluye una plataforma para gestionar reuniones, personalizar el bot y visualizar gráficos de consultas y costos.

Tecnologías utilizadas: React, Tailwind, React DOM, MongoDB, API de Google Calendar, API de ChatGPT.

Mi rol: Participé en el diseño, maquetado, testeo y en parte del backend, manejando las solicitudes de algunas pantallas."
      />
    </div>
  );
};

export default Projects;
