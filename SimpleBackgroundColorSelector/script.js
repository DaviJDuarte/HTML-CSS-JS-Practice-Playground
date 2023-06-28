document.addEventListener("DOMContentLoaded", function () {
    var backgroundColor = document.querySelectorAll('input[name="background"]');


    backgroundColor.forEach(function (radio) {
        radio.addEventListener("change", function () {
            var selecedBackground = this.value;
            document.body.style.backgroundColor = selecedBackground;
        })
    })
})