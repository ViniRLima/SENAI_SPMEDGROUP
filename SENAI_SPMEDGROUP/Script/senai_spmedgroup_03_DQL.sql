--UTILIZAR O BANCO DE DADOS
USE SENAI_SPMEDGROUP_T;
GO

--11. Utilizar funções nativas do banco de dados
--Mostrou a quantidade de usuários após realizar a importação do banco de dados -------- //FINALIZADO

SELECT COUNT(usuario) FROM Usuario;

--Converteu a data de nascimento do usuário para o formato (mm-dd-yyyy) na exibição -------- //FINALIZADO

SELECT CONVERT (CHAR,dataNascimento,101) AS DATA_Nasicmento
FROM Paciente

--Calculou a idade do usuário a partir da data de nascimento -------- //FINALIZADO

SELECT DATEDIFF(MONTH,dataNascimento,GETDATE())/12 AS IDADE
FROM Paciente WHERE idPaciente = 2

--12. Aplicar programação em banco de dados utilizando functions, stored procedures,
--triggers e eventos

--Criou um evento para que a idade do usuário seja calculada todos os dias -------- //ANDAMENTO

--Criou uma função para retornar a quantidade de médicos de uma determinada especialidade -------- //ANDAMENTO
CREATE FUNCTION RETORNA_MEDICOS
(

)
return INT
AS
BEGIN

END


--Criou uma função para que retorne a idade do usuário a partir de uma determinada stored procedure -------- //ANDAMENTO

CREATE FUNCTION IdadeUsuario (@idPaciente INT)
returns int 
AS
BEGIN
declare @retorno int
declare @data date
set @retorno = @idPaciente
@data = SELECT DATEDIFF(MONTH,dataNascimento,GETDATE())/12 AS IDADE
FROM Paciente 
WHERE idPaciente = @retorno
return @data
END