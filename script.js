// Mostrar/Ocultar Detalles
// Inicia AOS (Animate On Scroll) si decides usarlo

function toggleDetails(element) {
    const details = element.querySelector('.details');
    if (details.style.display === "none" || !details.style.display) {
        details.style.display = "block";
    } else {
        details.style.display = "none";
    }
}
