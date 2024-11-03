const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

app.post("/problem", async (req, res) => {
    let json = req.body;
    json = editJson(json);
    await fetch("http://localhost:3001/problem", {
        method: "POST",
        headers: "Content-Type: application/json",
        body: json,
    }).then(response => response.json())
    .then(json = editJson(json));
    res.send(res);
});

function editJson(json) {
    if(json.etapa < 2) {
        json.number.push(Math.random() * 10); 
    }
    json.etapa++;
    json.sello.push(Date.now());

    return json;
}

app.listen(port, () => {
    console.log(`Se esta escuchando por el puerto ${port}`)
})