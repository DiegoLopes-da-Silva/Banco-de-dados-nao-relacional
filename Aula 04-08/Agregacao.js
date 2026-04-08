/* Estágios da Agregação 
São as operações que compõem a pipeline. 
Cada estágio realiza uma transformação nos docs
e passam o resultado para o próximo estágio
*/

// $match -> Filtra os documentos de acordo com os critérios especificados
// ^- Semelhante ao WHERE em SQL

db.vendas.aggregate([
    { $match: {ano: 2023}}
])

// $group -> agrupa documentos com base em um ou mais campos e permite calcular
// agregados como soma, média, contagem, etc.

db.vendas.aggregate([
    { $group: { _id: "$mes", total_vendas: { $sum: "$valor"}}}
])

// $project -> Permite selecionar, incluir ou excluir campos específicos nos documentos resultantes.
// Também pode ser usado para criar novos campos ou transformar dados.
db.vendas.aggregate([
    { $project: { nome: 1, valor: 1, _id: 0}}
])

// $sort -> Ordena os documentos com base em um ou mais campos
db.vendas.aggregate([
    { $sort: {valor: -1} } //-1 descrescente / 1 crescente
])

// $limit -> restringe o número de documentos que passam pelos próximos estágios
// $skip -> Ignora um número especificado de documentos.
db.vendas.aggregate([
    { $sort: { valor: -1} },
    { $limit: 5 }
])

// $unwind -> desestrutura um array, criando um documento para cada elemento do array
db.pedidos.aggregate([
    { $unwind: "$itens"}
])

// $facet permite executar múltiplas pipelines de agregação em paralelo e juntar os resultados
db.vendas.aggregate([
    {
        $facet: {
            total_vendas: [{ $count: "count"}],
            soma_total: [{ $group: { _id: null, total: { $sum: "$valor" } } } ]
        }
    }
])

db.pedidos.aggregate([
    {
        $project: {
            itens_filtrados: {
                $filter: {
                    input: "$itens",
                    as: "item",
                    cond: { $gt: ["$item.quantidade", 2]}
                }
            }
        }
    }
])