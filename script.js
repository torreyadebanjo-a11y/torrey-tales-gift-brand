// TORREY TALES WEBSITE INTERACTIONS

document.addEventListener("DOMContentLoaded", function () {

    // Mobile navigation
    const menuButton = document.querySelector(".menu-toggle");
    const navigation = document.querySelector(".nav-links");

    if (menuButton && navigation) {
        menuButton.addEventListener("click", function () {
            navigation.classList.toggle("active");
        });

        navigation.querySelectorAll("a").forEach(function (link) {
            link.addEventListener("click", function () {
                navigation.classList.remove("active");
            });
        });
    }

    // Frequently Asked Questions
    const faqQuestions = document.querySelectorAll(".faq-question");

    faqQuestions.forEach(function (question) {
        question.addEventListener("click", function () {
            const answer = question.nextElementSibling;
            const isOpen = answer.classList.contains("show");

            document.querySelectorAll(".faq-answer").forEach(function (item) {
                item.classList.remove("show");
            });

            document.querySelectorAll(".faq-question").forEach(function (item) {
                item.setAttribute("aria-expanded", "false");
            });

            if (!isOpen) {
                answer.classList.add("show");
                question.setAttribute("aria-expanded", "true");
            }
        });
    });

});
