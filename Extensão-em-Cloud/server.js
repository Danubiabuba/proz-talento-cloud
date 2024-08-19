const express = require('express');
const app = express();
const port = 3000;
const mysql = require('mysql2');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Configurações e middlewares
app.use(express.json());

// Conexão ao banco de dados
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'danubia',
    password: '',
    database: 'tela_login',
});

connection.connect((err) => {
    if (err) {
        console.error('Erro ao conectar banco de dados:', err.stack);
        return;
    }
    console.log('Conectado ao banco de dados MySQL');
});

// Rota de registro de usuários
app.post('/register', async (req, res) => {
    const { username, password, email, telefone } = req.body;

    // Verifica se todos os campos obrigatórios foram preenchidos
    if (!username || !password || !email) {
        return res.status(400).send('Por favor, preencha todos os campos obrigatórios.');
    }

    try {
        // Hash da senha
        const hashedPassword = await bcrypt.hash(password, 10);

        // Query SQL para inserir o usuário no banco de dados
        const query = 'INSERT INTO users (username, password, email, telefone) VALUES (?, ?, ?, ?)';
        connection.query(query, [username, hashedPassword, email, telefone], (err, results) => {
            if (err) {
                console.error('Erro ao inserir usuário no banco de dados:', err.stack);
                return res.status(500).send('Erro ao registrar usuário.');
            }
            res.status(201).send('Usuário registrado com sucesso!');
        });
    } catch (error) {
        console.error('Erro ao processar registro:', error);
        res.status(500).send('Erro ao registrar usuário.');
    }
});

// Rota de login de usuários
app.post('/login', (req, res) => {
    const { username, password } = req.body;

    // Verifica se os campos obrigatórios foram preenchidos
    if (!username || !password) {
        return res.status(400).send('Por favor, preencha todos os campos.');
    }

    // Query SQL para buscar o usuário no banco de dados
    const query = 'SELECT * FROM users WHERE username = ?';
    connection.query(query, [username], async (err, results) => {
        if (err) {
            console.error('Erro ao buscar usuário no banco de dados:', err.stack);
            return res.status(500).send('Erro ao processar login.');
        }

        // Verifica se o usuário existe
        if (results.length === 0) {
            return res.status(401).send('Usuário não encontrado.');
        }

        const user = results[0];

        // Compara a senha fornecida com o hash armazenado
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).send('Senha incorreta.');
        }

        // Gera um token JWT
        const token = jwt.sign({ userId: user.id }, 'seuSegredoSeguro', { expiresIn: '1h' });
        res.status(200).json({ message: 'Login realizado com sucesso!', token });
    });
});

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
