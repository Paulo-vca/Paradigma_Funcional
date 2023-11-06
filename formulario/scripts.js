//armazenar os alunos
const alunos = [];

//função pura - adicionar um aluno ao array
function adicionar(nome, nota) {
  if (nome === "" || isNaN(nota) || nota < 0 || nota > 10) {
    return "Por favor, preencha o nome do aluno e insira uma nota válida de 0 a 10.";
  }
  alunos.push({ nome, nota });
  return "Aluno adicionado com sucesso.";
}

//filtrar alunos - função filter
function filteralunos(term) {
  const filteredalunos = alunos.filter((aluno) => {
    const lowerCasenome = aluno.nome.toLowerCase();
    const lowerCasenota = aluno.nota.toString().toLowerCase();
    const lowerCaseTerm = term.toLowerCase();
    return (
      lowerCasenome.includes(lowerCaseTerm) ||
      lowerCasenota.includes(lowerCaseTerm)
    );
  });
  return filteredalunos;
}

//função map
function maptabelaformato(aluno) {
  return `<tr><td>${aluno.nome}</td><td>${aluno.nota}</td></tr>`;
}

//função map
function atualizartabela() {
  const filtro = document.getElementById("filtro").value.trim();
  const filteredalunos = filteralunos(filtro);
  const tabelaC = document.getElementById("estudantesb");
  const tabelaL = filteredalunos.map(maptabelaformato).join("");
  tabelaC.innerHTML = tabelaL;
}

document.getElementById("botao").addEventListener("click", () => {
  const nome = document.getElementById("nome").value.trim();
  const nota = parseFloat(document.getElementById("nota").value.trim());

  const result = adicionar(nome, nota);
  if (result !== "Aluno adicionado com sucesso.") {
    alert(result);
  } else {
    document.getElementById("nome").value = "";
    document.getElementById("nota").value = "";
    atualizartabela();
  }
});

document.getElementById("filtro").addEventListener("input", () => {
  atualizartabela();
});
