CREATE DATABASE escola_digital;
USE escola_digital;

CREATE TABLE matriculas (
    matricula INT NOT NULL AUTO_INCREMENT,
    usuario VARCHAR(20) NOT NULL,
    nome VARCHAR(50) NOT NULL,
    dtnasc VARCHAR(10),
    cpf VARCHAR(11) NOT NULL,
    email VARCHAR(100) NOT NULL,
    PRIMARY KEY (matricula)
);

CREATE TABLE professores (
    matricula INT NOT NULL AUTO_INCREMENT,
    usuario VARCHAR(20) NOT NULL,
    senha VARCHAR(20) NOT NULL,
    carteira DECIMAL(10,2),
    matricula_estilo INT NOT NULL,
    PRIMARY KEY (matricula),
     FOREIGN KEY (matricula_estilo) REFERENCES matriculas (matricula)
);

CREATE TABLE alunos (
    matricula INT NOT NULL AUTO_INCREMENT,
    usuario VARCHAR(20) NOT NULL,
    senha VARCHAR(20) NOT NULL,
    turma VARCHAR(10) NOT NULL,
    carteira DECIMAL(10,2),
    PRIMARY KEY (matricula),
	FOREIGN KEY (matricula_estilo) REFERENCES matriculas (matricula)
);

CREATE TABLE mensalidades (
    id_mensalidade INT NOT NULL AUTO_INCREMENT,
    matricula_aluno INT NOT NULL,
    valor DECIMAL(10,2) NOT NULL,
    data_vencimento DATE NOT NULL,
    status_pagamento ENUM('Pendente', 'Pago') NOT NULL,
    PRIMARY KEY (id_mensalidade),
    FOREIGN KEY (matricula_aluno) REFERENCES alunos (matricula),
	FOREIGN KEY (matricula_estilo) REFERENCES matriculas (matricula)
);

SELECT * FROM professores;


