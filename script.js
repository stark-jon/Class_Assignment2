const Gryffindor = document.getElementById("Gryffindor")
const Slytherin = document.getElementById("Slytherin")
const Hufflepuff = document.getElementById("Hufflepuff")
const Ravenclaw = document.getElementById("Ravenclaw")
const element = document.getElementById("element")
let hp=[]
Gryffindor.onclick= () => {
    const filteredCharacters = hp.filter((character) => {
        return (
            character.house.includes("Gryffindor")
        );
    });
    displayCharacters(filteredCharacters);
};
Slytherin.onclick= () => {
    const filteredCharacters = hp.filter((character) => {
        return (
            character.house.includes("Slytherin")
        );
    });
    displayCharacters(filteredCharacters);
};
Hufflepuff.onclick= () => {
    const filteredCharacters = hp.filter((character) => {
        return (
            character.house.includes("Hufflepuff")
        );
    });
    displayCharacters(filteredCharacters);
};
Ravenclaw.onclick= () => {
    const filteredCharacters = hp.filter((character) => {
        return (
            character.house.includes("Ravenclaw")
        );
    });
    displayCharacters(filteredCharacters);
};
const loadCharacters = async () => {
        const res = await fetch('https://hp-api.herokuapp.com/api/characters');
        hp = await res.json();
        displayCharacters(hp);
};
const displayCharacters = (characters) => {
    const htmlString = characters
        .map((character) => {
            return `
            <li class="character">
                <p>very good</p>
                <h2>House: ${character.house}</h2>
            </li>
            `;
        })
        .join('');
    element.innerHTML = htmlString;
};
loadCharacters();