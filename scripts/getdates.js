document.addEventListener("DOMContentLoaded", () => {
    const currentYear = new Date().getFullYear();
    document.getElementById("currentyear").textContent = currentYear;

    const lastModifiedDate = new Date(document.lastModified);
    document.getElementById("lastModified").textContent = `Última modificação: ${lastModifiedDate.toLocaleDateString('pt-BR', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    })}`;
});
