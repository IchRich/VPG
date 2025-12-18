document.addEventListener("DOMContentLoaded", function () {
    const rubricatorButtons = document.querySelectorAll(".rubricator__btn");

    if (rubricatorButtons.length > 0) {
        let clickedButton = rubricatorButtons[0];
        rubricatorButtons.forEach((button) => {
            button.addEventListener("click", () => {
                clickedButton = button;
                rubricatorButtons.forEach((_button) => _button.classList.toggle("activeBtn", _button == clickedButton));
            });
        });
    }
});