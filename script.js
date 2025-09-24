// script (1).js

document.addEventListener('DOMContentLoaded', () => {

    // URL para el formulario de Contacto.
    const contactFormEndpoint = "https://formspree.io/f/xrbygbyk"; 
    
    // URL para el formulario de Agenda de Citas.
    // ¡Listo! Esta es la URL correcta que acabas de generar.
    const appointmentFormEndpoint = "https://formspree.io/f/xyznyrag"; 

    // --- LÓGICA PARA EL FORMULARIO DE CONTACTO ---
    
    const contactForm = document.getElementById('contact-form');

    if (contactForm) {
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault(); 
            const formData = new FormData(contactForm);
            
            try {
                const response = await fetch(contactFormEndpoint, {
                    method: 'POST',
                    body: formData,
                    headers: { 'Accept': 'application/json' }
                });

                if (response.ok) {
                    alert('¡Mensaje enviado con éxito! Nos pondremos en contacto contigo pronto.');
                    contactForm.reset();
                } else {
                    alert('Hubo un problema al enviar tu mensaje. Por favor, inténtalo de nuevo.');
                }
            } catch (error) {
                console.error('Error:', error);
                alert('Hubo un problema de conexión. Por favor, inténtalo más tarde.');
            }
        });
    }

    // --- LÓGICA PARA EL FORMULARIO DE AGENDAR CITA ---

    const appointmentForm = document.getElementById('appointment-form');

    if (appointmentForm) {
        appointmentForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const formData = new FormData(appointmentForm);

            try {
                const response = await fetch(appointmentFormEndpoint, {
                    method: 'POST',
                    body: formData,
                    headers: { 'Accept': 'application/json' }
                });

                if (response.ok) {
                    alert('¡Cita agendada con éxito! Recibirás una confirmación en tu correo.');
                    appointmentForm.reset();
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
