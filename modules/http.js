const http = require('http')

const port =8080;

const server= http.createServer( (req,res)=>{
    if (req.url == '/home') {
        res.writeHead(200, { "Content-type": "text/html"} );
        res.end("<h1>HOME PAGE</h1>");
    }

    if (req.url== '/users'){
        const users = [
            {
                name:"jown",
                email:"jow@gmail.com"
            },
            {
                name:"willian",
                email:"willian@gmail.com"
            }
        ];

        res.writeHead(200, { "Content-type":"application/json" });
        res.end( JSON.stringify(users) )
    }

} );

server.listen(port, ()=> console.log(`Rodando na porta ${port}!`) );