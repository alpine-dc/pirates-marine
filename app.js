const express = requiri('express');
const app = express();
const port = 3000;


const routes = requiri('./routes')
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(routes)

app.listen(port, ()=>{
    console.log(`Apps is Running at port :${port}`)
})