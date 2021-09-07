--UTILIZAR O BANCO DE DADOS
USE SENAI_SPMEDGROUP_T;
GO

--11. Utilizar fun��es nativas do banco de dados
--Mostrou a quantidade de usu�rios ap�s realizar a importa��o do banco de dados -------- //FINALIZADO

SELECT COUNT(usuario) FROM Usuario;

--Converteu a data de nascimento do usu�rio para o formato (mm-dd-yyyy) na exibi��o -------- //FINALIZADO

SELECT CONVERT (CHAR,dataNascimento,101) AS DATA_Nasicmento
FROM Paciente

--Calculou a idade do usu�rio a partir da data de nascimento -------- //FINALIZADO

SELECT DATEDIFF(MONTH,dataNascimento,GETDATE())/12 AS IDADE
FROM Paciente WHERE idPaciente = 2

--12. Aplicar programa��o em banco de dados utilizando functions, stored procedures,
--triggers e eventos

--Criou um evento para que a idade do usu�rio seja calculada todos os dias -------- //ANDAMENTO

--Criou uma fun��o para retornar a quantidade de m�dicos de uma determinada especialidade -------- //ANDAMENTO
CREATE FUNCTION RETORNA_MEDICOS
(

)
return INT
AS
BEGIN

END


--Criou uma fun��o para que retorne a idade do usu�rio a partir de uma determinada stored procedure -------- //ANDAMENTO

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