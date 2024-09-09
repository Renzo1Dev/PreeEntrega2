import express from 'express';
import productsRoutes from './routes/productsRoutes.js'
import cartsRoutes from './routes/cartsRoutes.js'

const app=express();


app.listen(8080,()=>{
    console.log("Escuchando a 8080")
});

app.use('/api/products',productsRoutes)

app.use('/api/carts',cartsRoutes)