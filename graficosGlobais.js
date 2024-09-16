const url = "https://raw.githubusertcontent.com/guilhermeonrails/api/main/dado-globais.json"

console.log(url);
function visualizarInformacoesGlobais() {
   const res = await fetch(url);
   const dados = res.json ()
   console.log(dados);

}
visualizarInforacoesGlobais();