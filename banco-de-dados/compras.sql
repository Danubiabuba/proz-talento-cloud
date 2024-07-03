-- Criação do banco de dados (se ainda não existir)
CREATE DATABASE IF NOT EXISTS vendas;
USE vendas;

-- Tabela para registrar as compras
CREATE TABLE IF NOT EXISTS compras (
    id INT AUTO_INCREMENT PRIMARY KEY,
    data_compra DATE,
    quantidade INT
);

-- Criação do procedimento para gerar o relatório diário de compras
DELIMITER //

CREATE PROCEDURE relatorio_compras_diario()
BEGIN
    DECLARE data_atual DATE;
    DECLARE total_compras INT;

    -- Cursor para iterar pelas datas únicas de compra
    DECLARE cur_dates CURSOR FOR
        SELECT DISTINCT data_compra FROM compras;

    -- Variável para armazenar a data atual enquanto iteramos pelo cursor
    DECLARE CONTINUE HANDLER FOR NOT FOUND SET done = TRUE;

    -- Início do procedimento
    OPEN cur_dates;

    -- Loop principal para processar cada data de compra
    read_loop: LOOP
        FETCH cur_dates INTO data_atual;
        IF done THEN
            LEAVE read_loop;
        END IF;

        -- Calculando o total de produtos comprados para a data atual
        SELECT SUM(quantidade) INTO total_compras
        FROM compras
        WHERE data_compra = data_atual;

        -- Exibindo o resultado
        SELECT CONCAT('Data: ', data_atual, ', Total de produtos comprados: ', total_compras);

    END LOOP read_loop;

    -- Fechando o cursor
    CLOSE cur_dates;
END //

DELIMITER ;

-- Criação do procedimento para gerar o relatório diário de compras
DELIMITER //

CREATE PROCEDURE relatorio_compras_diario()
BEGIN
    DECLARE data_atual DATE;
    DECLARE total_compras INT;

    -- Cursor para iterar pelas datas únicas de compra
    DECLARE cur_dates CURSOR FOR
        SELECT DISTINCT data_compra FROM compras;

    -- Variável para armazenar a data atual enquanto iteramos pelo cursor
    DECLARE CONTINUE HANDLER FOR NOT FOUND SET done = TRUE;

    -- Início do procedimento
    OPEN cur_dates;

    -- Loop principal para processar cada data de compra
    read_loop: LOOP
        FETCH cur_dates INTO data_atual;
        IF done THEN
            LEAVE read_loop;
        END IF;

        -- Calculando o total de produtos comprados para a data atual
        SELECT SUM(quantidade) INTO total_compras
        FROM compras
        WHERE data_compra = data_atual;

        -- Exibindo o resultado
        SELECT CONCAT('Data: ', data_atual, ', Total de produtos comprados: ', total_compras);

    END LOOP read_loop;

    -- Fechando o cursor
    CLOSE cur_dates;
END //

DELIMITER ;

CALL relatorio_compras_diario();
