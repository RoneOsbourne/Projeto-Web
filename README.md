# Setup do projeto

No Visual Studio acesse NPM SCRIPTS > selecione "package.json" e clique na seta "start"
    Abrir no browse o endereço "localhost:3000"
------------
GITHUB

CMD: 
 -  entrar no Path do projeto
 - git init (cria pasta oculta de controle arquivos, branchs, histórico, etc)
 - git status (status dos arquivos do projeto - em vermelho, sem monitoramento)
 - git add . (inicia monitoramento dos arquivos - fica verde)
 - git status (verifica se arquivos foram adicionados com sucesso)
 - git commit -m "Descrição do Commit" (cria commit das alterações)
 - git status (verifica se todos foram commitados e estão sem nenhuma alteração)
 - git remote add origin "endereço do repositório SSH do github" (especifica alterações para o diretório)
 - git remote -v (verifica links do repositorio remoto. Fetch: busca atualizações. Push: envia)
 - git push -u origin master (Envia as alterações)
 - Se der erro (Ex: referencias de arquivos do git com local), colocar ""--force"