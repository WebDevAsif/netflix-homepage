const buttons = document.querySelectorAll(".faq-list button");
let activeButton = null;

buttons.forEach((button) => {
  button.addEventListener("click", function () {
    const statement = this.closest("li").nextElementSibling;
    buttons.forEach((b) => {
      if (activeButton == b || activeButton == button) {
        const siblingStatement = b.closest("li").nextElementSibling;
        siblingStatement.classList.remove("statement-show");
      }
    });
    statement.classList.toggle("statement-show");
  });
});
