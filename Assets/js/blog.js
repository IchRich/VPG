document.addEventListener("DOMContentLoaded", function () {
    const rubricatorButtons = document.querySelectorAll(".rubricator__btn");

    if (rubricatorButtons.length > 0) {
        let clickedButton = rubricatorButtons[0];
        rubricatorButtons.forEach((button) => {
            button.addEventListener("mouseover", () => setActiveButton(rubricatorButtons, button));
            button.addEventListener("mouseout", () => setActiveButton(rubricatorButtons, clickedButton));
            button.addEventListener("click", () => {
                setActiveButton(rubricatorButtons, button);
                clickedButton = button;
            });
        });
    }
});

function setActiveButton(rubricatorButtons, activeButton) {
    rubricatorButtons.forEach((button) => button.classList.toggle("activeBtn", button == activeButton));
}