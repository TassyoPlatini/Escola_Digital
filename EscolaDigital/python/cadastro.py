import mysql.connector

# Estabeleça a conexão com o banco de dados
conn = mysql.connector.connect(
    host="seu_host",
    user="seu_usuario",
    password="sua_senha",
    database="escola_digital"
)

# Crie um cursor para executar consultas SQL
cursor = conn.cursor()

# Dados capturados da tela de cadastro
nome = "Nome do Aluno"
matricula = "12345"
senha = "senha123"
turma = "Turma A"

# Consulta SQL para inserir dados
sql = "INSERT INTO alunos (usuario, senha, turma) VALUES (%s, %s, %s)"
values = (nome, senha, turma)

# Execute a consulta SQL
cursor.execute(sql, values)

# Faça o commit das alterações no banco de dados
conn.commit()

# Feche o cursor e a conexão
cursor.close()
conn.close()
