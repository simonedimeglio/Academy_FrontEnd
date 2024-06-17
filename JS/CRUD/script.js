// Puntatori 
const form = document.getElementById("postForm");
const container = document.getElementById("posts");

// Funzione che carica i posts da JSONPlaceholder 
async function caricaPosts() {
    // R - READ!
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        const posts = await response.json(); 
        posts.forEach(post => stampaPost(post));
    } catch(error) {
        console.error("Errore", error)
    }
}

// Funzione che stampa i posts in pagina
function stampaPost(post) {
    const singoloPost = document.createElement("div");
    singoloPost.innerHTML = `
        <h2>${post.title}</h2>
        <p>${post.body}</p>
    `;
    container.appendChild(singoloPost);
}

caricaPosts();




form.addEventListener("submit", async (e) => {
    console.log("Click!");
    e.preventDefault();

    const title = document.getElementById("title").value;
    const body = document.getElementById("body").value; 

    const nuovoPost = {
        // L'id verrà automaticamente inserito da JSONPlaceholder (vedi la docs)
        userId: 1,
        title: title,
        body: body  
    };

    // Fetch - C - CREATE
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }, 
            body: JSON.stringify(nuovoPost)
        });

        const post = await response.json()
        stampaPost(post);
        form.reset(); // Funzione di default per pulire gli input in un form dopo l'invio
    } catch(error) {
        console.error(error)
    }


} )