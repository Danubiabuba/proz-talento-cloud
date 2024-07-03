use escola;
SELECT ALUNO.nome AS Nome_Aluno, ALUNO.email, ALUNO.endereco, CURSO.nome AS Nome_Curso
FROM ALUNO
INNER JOIN CURSO ON ALUNO.curso_id = CURSO.ID;
