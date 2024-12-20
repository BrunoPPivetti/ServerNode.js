import express from 'express';
import routes from './src/routes/postRoutes.js';

// Esta linha inicializa uma nova instância do aplicativo Express.
const app = express();
app.use(express.static('uploads'))
routes(app)

// Esta linha inicia o servidor na porta 3000 e exibe uma mensagem no console quando o servidor estiver pronto para receber requisições.
app.listen(3000, () => {
    console.log('Servidor escutando.');
});