-- Criação do banco de dados
CREATE DATABASE biblioteca;
USE biblioteca;

-- Tabela de livros
CREATE TABLE livros (
    id INT AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR(100),
    autor VARCHAR(100),
    ano_publicacao INT
);

-- Tabela de empréstimos
CREATE TABLE emprestimos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    id_livro INT,
    data_emprestimo DATE,
    data_devolucao DATE,
    FOREIGN KEY (id_livro) REFERENCES livros(id)
);

-- Tabela para registrar a inserção de livros
CREATE TABLE registro_livros (
    id INT AUTO_INCREMENT PRIMARY KEY,
    id_livro INT,
    data_registro DATETIME
);

-- Trigger para registrar a inserção de livros
DELIMITER //

CREATE TRIGGER after_insert_livros
AFTER INSERT ON livros
FOR EACH ROW
BEGIN
    INSERT INTO registro_livros (id_livro, data_registro)
    VALUES (NEW.id, NOW());
END //

DELIMITER ;

INSERT INTO livros (titulo, autor, ano_publicacao)
VALUES ('Dom Casmurro', 'Machado de Assis', 1899);
