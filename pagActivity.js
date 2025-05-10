let selectActivity = "";

document.querySelector("ul").addEventListener("click", (event) => {
    if (event.target.tagName === "LI") {
        const containerWater = document.querySelector('.water');
        const containerExercise = document.querySelector('.exercise');
        const containerReading = document.querySelector('.reading');

        // Esconde todos
        containerWater.style.display = 'none';
        containerExercise.style.display = 'none';
        containerReading.style.display = 'none';

        // Define qual mostrar
        selectActivity = event.target.id;
        console.log(`Clicou em ${selectActivity}`);

        if (selectActivity === 'agua') {
            containerWater.style.display = 'grid';
        } else if (selectActivity === 'exercise') {
            containerExercise.style.display = 'grid';
        } else if (selectActivity === 'reading') {
            containerReading.style.display = 'grid';
        }
    }
});
