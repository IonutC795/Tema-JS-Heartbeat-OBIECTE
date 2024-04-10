// Ex 1: Scrieți o funcție care creează un obiect pentru a păstra informații despre rețeta ta preferată
// Ar trebui să aibă proprietăți pentru titlu (un șir de caractere), porții (un număr) și ingrediente (o șir de elemente - array). Va fi afișată pe rânduri separate 
// (o instrucțiune console.log pentru fiecare) toate informațiile obiectului după crearea acestuia.

const createFavoriteRecipe = (title, servings, ingredients) => {
    const recipe = {
        title: title,
        servings: servings,
        ingredients: ingredients
    };

    console.log("Titlu reteta:", recipe.title);
    console.log("Portii:", recipe.servings);
    console.log("Ingrediente:");
    recipe.ingredients.forEach((ingredient, index) => {
        console.log(`${index + 1}. ${ingredient}`);
    });
};

const favoriteRecipeTitle = "Burger";
const favoriteRecipeServings = 2;
const favoriteRecipeIngredients = ["chifla burger", "carne de vita", "cheddar", "sos burger", "legume"];
createFavoriteRecipe(favoriteRecipeTitle, favoriteRecipeServings, favoriteRecipeIngredients);

// Ex 2: Scrieți o funcție care returnează un obiect nou fără proprietățile furnizate
// Funcția primește 2 parametri ca date de intrare. Unul dintre parametri este obiectul, iar celălalt este proprietatea care nu se dorește să persiste în rezultatul returnat.

const removeObjectProperty = (object, propertyToRemove) => {
    const newObject = { ...object }; 

    
    delete newObject[propertyToRemove];

    return newObject; 
};


const originalObject = {
    name: 'Ionut',
    age: 29,
    city: 'Bucuresti'
};

const propertyToRemove = 'age';
const newObject = removeObjectProperty(originalObject, propertyToRemove);

console.log(originalObject);
console.log(newObject);

// Ex 3: Creați o șir de obiecte în care fiecare obiect descrie o carte și are proprietăți precum titlu (un șir de caractere - string), 
// autor (un șir de caractere - string) și esteCitită (un boolean care indică dacă ați citit-o).


const carti = [
    { titlu: "Hobbitul", autor: "J.R.R. Tolkien", esteCitita: true },
    { titlu: "Harry Potter și Piatra Filozofală", autor: "J.K. Rowling", esteCitita: true },
    { titlu: "Cronicile din Narnia", autor: "C.S. Lewis", esteCitita: false }
];

function afiseazaStatusulCartilor(carti) {
    carti.forEach((carte) => {
        const { titlu, autor, esteCitita } = carte;
        if (esteCitita) {
            console.log(`Ai citit deja "${titlu}" de ${autor}.`);
        } else {
            console.log(`Trebuie să citești "${titlu}" de ${autor}.`);
        }
    });
}

afiseazaStatusulCartilor(carti);