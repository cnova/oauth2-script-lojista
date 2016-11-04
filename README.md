#Script para integração OAUTH2

O objetivo desse script é prover uma demonstração de como obter o _Access Token_ de produção para acesso à API V2 do Marketplace da Cnova.

O script é desenvolvido em NodeJS e não é uma implemantação definitiva do processo, servindo apenas como base para implementação nas plataformas integradas.
  
##Execução

Antes de executar o script, certifique-se de que você possui o NodeJS instalado em sua estação de trabalho.

O download do NodeJS pode ser feito em: https://nodejs.org

Em seguida, faça o download do projeto: 

```shell
git clone https://github.com/cnova/oauth2-script-lojista
cd oauth2-script-lojista
```

Para ajustar o script à sua APP, configure as variáveis _clientID_ e _clientSecret_. Esses valores podem ser encontrados no dashboard do portal do desenvolvedor.

```shell
npm install express simple-oauth2
node cnova-oauth2.js
```

Após executar o script, abra o browser de sua preferência e acesse a seguinte URL: http://localhost:3000

Você será direcionado para a tela de login do lojista. Entre com as credenciais do lojista para finalizar o processo.