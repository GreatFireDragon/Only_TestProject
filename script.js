let openButton = null;

function toggleButton(button) {
  if (button === openButton) {
    closeButton(button);
  } else {
    if (openButton) {
      closeButton(openButton);
    }
    openButton = button;
    openButton.classList.add("open");
    togglePlusMinus(openButton);
  }
}

function closeButton(button) {
  button.classList.remove("open");
  togglePlusMinus(button);
  openButton = null;
}

// toggle plus and minus
function togglePlusMinus(button) {
  button.childNodes[0].nodeValue =
    button.childNodes[0].nodeValue.trim() === "+" ? "-" : "+";
}
