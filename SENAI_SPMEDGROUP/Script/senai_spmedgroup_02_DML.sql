-- ACESSANDO O BANCO DE DADOS
USE SENAI_SPMEDGROUP_T;
GO

-- INSERINDO OS DADOS NA TABELA ESPECIALIDADE
INSERT INTO Especialidade (especialidade)
VALUES ('Clínico Geral'),('Pediatra'),('Nutrologia'),('Sexulogia'),('Cardiologia'),('Cancerologia'),('Acupuntura');
GO

-- INSERINDO OS DADOS NA TABELA MEDICO
INSERT INTO Medico (idEspecialidade, idClinica, idUsuario, medico, crm)
VALUES (1,2,2,'Fernando Mato',546586),(2,3,3,'Carlos Souza',586947),(3,1,4,'Fernanda França',415263),(4,5,5,'Nakamura Takamoto',456585),(5,4,6,'Natan Frenezi',253685),(6,4,7,'Heloisa Opala',859614),(7,5,8,'Ana Karla',102030);
GO


-- INSERINDO OS DADOS NA TABELA CONSULTA
INSERT INTO Consulta (idMedico, idPaciente, idSituacao, consulta, dataHorario)
VALUES (3,3,4,'Nutrição', '25/03/2021 10:00'),(2,4,1,'Informações','25/03/2021 08:00'),(1,6,4,'Rotina','05/04/2021 14:00'),(5,2,2,'Coração','06/06/2021 17:00'),(4,1,4,'Sexual','20/07/21 15:00'),(7,7,3,'Dores no Joelho','23/09/2021 09:00'),(6,5,5,'Câncer','24/05/2021 11:00');
GO

SELECT * FROM Medico
SELECT * FROM Consulta
SELECT * FROM Clinica
SELECT * FROM Paciente

-- INSERINDO OS DADOS NA TABELA CLINICA 
INSERT INTO Clinica (clinica, cnpj, razaoSocial, endereco, telefone, horarioInicio, horarioFim)
VALUES ('SaudeIdade', 12345678910236, 'Clinica Medica SaudeIdade', 'Rua A', 1156455645,'08:00','20:00'),('AmigosSaude', 25836914778965, 'Clinica Medica AmigosSaude', 'Rua B', 1125368569, '08:00','20:00'), ('SalvaSaude', 56421398751632, 'Clinica Medica SalvaSaude', 'Rua C', 1125253645, '08:00','20:00'), ('GrandesMedicos',45652582825825,'Clinica Medica GrandesMedicos','Rua D',1125364585,'08:00','20:00'),('HeroisSaude',14445454656685,'Clinica Medica HeroisSaude','Rua E',1155664455,'08:00' ,'20:00');
GO


-- INSERINDO OS DADOS NA TABELA PACIENTE
INSERT INTO Paciente (idUsuario, paciente, dataNascimento, rg, cpf, endereco, telefone)
VALUES(3,'Amanda Lourenço','25/03/1990',123456789147,14253696854,'Rua Arthur Nunes',11985965263),(3,'Cristian Rorai', '25/02/1975', 526396854565, 25369685741, 'Rua Arado Armanes', 11954658596), (3, 'Gabriel Paulier', '07/05/2000', 253614258574, 58693625014, 'Rua Grayce Aruda', 11985967402), (3, 'Arthur Armando','10/08/2010', 123654789654, 12312154512, 'Rua Arnaldo Grande', 11984562363), (3, 'João Abreu', '03/05/2001', 253614748525, 14254314672, 'Rua Jóse Aragão', 11985962514), (3, 'André Couto', '20/05/2000', 357159753253, 25143625142, 'Rua Ary Jovem', 11985963625),(3, 'Lucas Raimundo', '25/06/2002', 562312545652, 52632514523, 'Rua Amanda Queiros', 11952632514);

-- INSERINDO OS DADOS NA TABELA USUARIO
INSERT INTO Usuario (idTipoUsuario, usuario, email, senha)
VALUES (1,'ViniciusR','viniciusr@email.com','12365#$45'),(2,'FernandoM','fernandom@email.com','456452635'),(2,'CarlosS','carloss@email.com','25369685'),(2,'FernandaF','fernandaf@email.com','1020306050'),(2,'NakamuraT','nakamurat@email.com','68686868'),(2,'NatanF','nataf@email.com','V323$%45'),(2,'HeloisaO','heloisao@email.com','6868688668'),(2,'AnaK','anak@email.com','GHDSGHdssd45'),(3,'AmandaL','amandal@email.com','5869364714'),(3,'CristianR','cristianr@email.com','DFDFDff55##'),(3,'GabrielP','gabrielp@email.com','5869362514'),(3,'ArthurA','arthura@email.com','1425DS**dssd'),(3,'JoãoA','joaoa@email.com','5542222442'),(3,'AndréC','andrec@email.com','42242424'),(3,'LucasR','lucasr@email.com','24242424');

-- INSERINDO OS DADOS NA TABELA SITUACAO
INSERT INTO Situacao (situacao)
VALUES ('Liberado'),('Exames'),('Licença'),('Andamento'),('Cirurgia');
GO

-- INSERINDO OS DADOS NA TABELA TIPOUSUARIO
INSERT INTO TipoUsuario (tipoUsuario)
VALUES ('ADM'),('MED'),('PAC');
GO