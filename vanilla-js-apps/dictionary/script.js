const definitionResult = document.getElementById("definitionResult");
const loadingElement = document.getElementById("loading");
const errorElement = document.getElementById("error");

async function getDefinition() {
  const word = document.getElementById("word").value.trim();
  if (!word) {
    showError("Enter A Word");
    return;
  }

  showLoading(true);
  showError("");

  try {
    const response = await fetch(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
    );
    const data = await response.json();
    displayDefinition(data);
  } catch (error) {
    showError(error.message);
  } finally {
    showLoading(false);
  }
}

function displayDefinition(datas) {
  definitionResult.innerHTML = ""; // clear previous
  console.log(datas);
  const word = datas[0].word;
  const phonetic = datas[0].phonetic || "Phonetic not available";
  const meanings = datas[0].meanings;

  definitionResult.innerHTML = `
            <div>
                <h3>Definition of word: ${word}</h3>
                <p class="phonetic">${phonetic}</p>
                <div class="meaning">
                <h4>Part of Speech ${""}</h4>
                </div>
            </div>
  `;
}

function showLoading(val) {
  if (loadingElement) {
    // Check if loadingElement exists
    loadingElement.style.display = val ? "block" : "none";
  }
}

function showError(message) {
  errorElement.style.display = message ? "block" : "none";
  errorElement.textContent = message;
}

// function displayDefinition(data) {
//   definitionResult.innerHTML = ""; // Clear previous results

//   const word = data[0].word;
//   const phonetic = data[0].phonetic || "Phonetic not available";
//   const meanings = data[0].meanings;
//   console.log("meamings", meanings);

//   const titleElement = document.createElement("h3");
//   titleElement.textContent = `Definition of ${word}`;
//   definitionResult.appendChild(titleElement);

//   const phoneticElement = document.createElement("p");
//   phoneticElement.className = "phonetic";
//   phoneticElement.innerHTML = `<strong>Phonetic:</strong> ${phonetic}`;
//   definitionResult.appendChild(phoneticElement);

//   for (let i = 0; i < meanings.length; i++) {
//     const meaning = meanings[i];
//     const meaningDiv = document.createElement("div");
//     meaningDiv.className = "meaning";

//     const partOfSpeechElement = document.createElement("h4");
//     partOfSpeechElement.textContent = `Part of Speech: ${meaning.partOfSpeech}`;
//     meaningDiv.appendChild(partOfSpeechElement);

//     for (let j = 0; j < meaning.definitions.length; j++) {
//       const def = meaning.definitions[j];
//       const definitionElement = document.createElement("p");
//       definitionElement.innerHTML = `<strong>Definition:</strong> ${def.definition}`;
//       meaningDiv.appendChild(definitionElement);

//       if (def.example) {
//         const exampleElement = document.createElement("p");
//         exampleElement.innerHTML = `<em>Example:</em> ${def.example}`;
//         meaningDiv.appendChild(exampleElement);
//       }
//     }

//     definitionResult.appendChild(meaningDiv);
//   }
// }
