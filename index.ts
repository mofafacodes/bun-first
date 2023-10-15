import figlet from "figlet";

const server = Bun.serve({
    port : 3000,
    fetch(req){
        const url = new URL(req.url);

        if (url.pathname === "/"){
            const body = figlet.textSync("Here we go guys, we are here to learn bun!");
            return new Response(body);
        }

        if (url.pathname === "/about"){
            const body = figlet.textSync("About bun");
            return new Response(body);
        }

        if (url.pathname === "/contact"){
            const body = figlet.textSync("Contact bun");
        return new Response(body);
        }

        //handle console.error();
        if (url.pathname === "/feed"){
            throw new Error("Could not fetch feed"); 
        }

        const body = figlet.textSync("404!");
        return new Response(body);
       
    },

    error(error){
        return new Response(`<pre> ${error} \n ${error.stack} </pre>`, 
        {
            headers: {
                "Content-Type": "text/html"
            }
        })
    }
});

console.log("Listening on PORT http://localhost:${server.port}");