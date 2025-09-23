document.addEventListener('DOMContentLoaded', () => {

    // URL única de Formspree para el formulario de Contacto.
    // Reemplaza 'xxxxxxxx' con tu código único de Formspree.
    const contactFormEndpoint = "https://formspree.io/f/xrbygbyk"; 
    
    // URL única de Formspree para el formulario de Agenda de Citas.
    // Puedes usar el mismo endpoint si quieres recibir todos los datos en un solo lugar.
    const appointmentFormEndpoint = "https://formspree.io/f/xxxxxxxx"; 

    // Referencia al formulario de contacto en el HTML
    const contactForm = document.getElementById('contact-form');

    // Escucha el evento 'submit' (envío) del formulario de contacto
    if (contactForm) {
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault(); // Evita el envío por defecto del navegador

            const formData = new FormData(contactForm);
            
            // Envía los datos del formulario a Formspree
            try {
                const response = await fetch(contactFormEndpoint, {
                    method: 'POST',
                    body: formData,
                    headers: {
                        'Accept': 'application/json'
                    }
                });

                if (response.ok) {
                    alert('¡Mensaje enviado con éxito! Nos pondremos en contacto contigo pronto.');
                    contactForm.reset(); // Limpia el formulario
                } else {
                    alert('Hubo un problema al enviar tu mensaje. Por favor, inténtalo de nuevo.');
                }
            } catch (error) {
                console.error('Error:', error);
                alert('Hubo un problema de conexión. Por favor, inténtalo más tarde.');
            }
        });
    }

    // Referencia al formulario de agenda en el HTML
    const appointmentForm = document.getElementById('appointment-form');

    // Escucha el evento 'submit' del formulario de agenda
    if (appointmentForm) {
        appointmentForm.addEventListener('submit', async (e) => {
            e.preventDefault(); // Evita el envío por defecto del navegador

            const formData = new FormData(appointmentForm);

            try {
                const response = await fetch(appointmentFormEndpoint, {
                    method: 'POST',
                    body: formData,
                    headers: {
                        'Accept': 'application/json'
                    }
                });

                if (response.ok) {
                    alert('¡Cita agendada con éxito! Recibirás una confirmación en tu correo.');
                    appointmentForm.reset(); // Limpia el formulario
                } else {
                    alert('Hubo un problema al agendar la cita. Por favor, inténtalo de nuevo.');
                }
            } catch (error) {
                console.error('Error:', error);
                alert('Hubo un problema de conexión. Por favor, inténtalo más tarde.');
            }
        });
    }

});
