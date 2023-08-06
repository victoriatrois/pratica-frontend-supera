import React, { useState } from 'react';
import './TelaBanco.css';

const TelaBanco = () => {
    const [paginaAtual, setPaginaAtual] = useState(1);
    const itensPorPagina = 5;

    // Dados da tabela de exemplo - Substitua por seus dados reais
    const dadosDaTabela = [
        // Linhas de dados de exemplo
        { dados: 'Data 1', valencia: 'Valor 1', tipo: 'Tipo 1', nome: 'Operador 1' },
        { dados: 'Data 2', valencia: 'Valor 2', tipo: 'Tipo 2', nome: 'Operador 2' },
        // Adicione mais linhas conforme necessário
    ];

    // Calcular o índice do último item a ser exibido na página atual
    const indiceUltimoItem = paginaAtual * itensPorPagina;
    // Calcular o índice do primeiro item a ser exibido na página atual
    const indicePrimeiroItem = indiceUltimoItem - itensPorPagina;
    // Obter os itens para a página atual
    const itensPaginaAtual = dadosDaTabela.slice(indicePrimeiroItem, indiceUltimoItem);

    // Função para lidar com a mudança de página
    const alterarPagina = (numeroPagina) => {
        setPaginaAtual(numeroPagina);
    };

    return (
<div className="container">
<div className="entradas">
<div>
<label>Data de início:</label>
<input type="date" />
</div>
<div>
<label>Data de Fim:</label>
<input type="date" />
</div>
<div>
<label>Nome do operador transacionado:</label>
<input type="text" />
</div>
</div>
<div className="seccao-do-botao">
<button>Pesquisar</button>
</div>
<div className="seccao-de-balancos">
<div className="balancos">
<span>saldo total: R$</span>
<span>50,00</span>
<span>Saldo no período: R$</span>
<span>50,00</span>
</div>
</div>
<div className="seccao-da-tabela">
<table>
<thead>
<tr>
<th>dados</th>
<th>valencia</th>
<th>tipo</th>
<th>Nome do operador transacionado</th>
</tr>
</thead>
<tbody>
{itensPaginaAtual.map((item, index) => (
<tr key={index}>
<td>{item.dados}</td>
<td>{item.valencia}</td>
<td>{item.tipo}</td>
<td>{item.nome}</td>
</tr>
))}
</tbody>
</table>
<div className="paginacao">
<button onClick={() => alterarPagina(paginaAtual - 1)} disabled={paginaAtual === 1}>
Anterior
</button>
<button onClick={() => alterarPagina(paginaAtual + 1)} disabled={itensPaginaAtual.length < itensPorPagina}>
Próxima
</button>
</div>
</div>
</div>
);
};

export default TelaBanco;
