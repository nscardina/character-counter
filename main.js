import "@fontsource/roboto"; // Defaults to weight 400
import "@fontsource/roboto/400.css"; // Specify weight
import "@fontsource/roboto/400-italic.css"; // Specify weight and style

window.onload = function() {

  /**
   * @type HTMLTextAreaElement
   */
  const inputBox = document.querySelector("#input-box")

  const characterOutput = document.querySelector("#character-output")
  const wordsOutput = document.querySelector("#words-output")
  const paragraphsOutput = document.querySelector("#paragraphs-output")

  inputBox.oninput = (event) => {
    const content = inputBox.value;

    characterOutput.innerHTML = content.length
    wordsOutput.innerHTML = content.split(/\s+/).length
    paragraphsOutput.innerHTML = content.split(/\n+/).length
  }
}