import mysql.connector

conexao = mysql.connector.connect(host='localhost:3306',
                                database='escola_digital',
                                user='root',
                                password='')

if conexao.is_connected():
    print('Conectado com sucesso!')
    cursor = conexao.cursor()

cursor.execute ('select * from professores;')

conexao.close()
cursor.close()