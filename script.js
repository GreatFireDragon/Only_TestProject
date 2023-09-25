let openButton = null;

function toggleButton(button) {
  if (button === openButton) {
    button.classList.remove("open");
    openButton = null;
  } else {
    if (openButton) {
      openButton.classList.remove("open");
    }
    button.classList.add("open");
    openButton = button;
  }
}
