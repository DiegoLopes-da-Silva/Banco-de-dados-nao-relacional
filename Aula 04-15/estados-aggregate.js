db.cidades.aggregate ([
    //Estágio 1
    {
        $unwind: "$estados" //desmembra
    },
    //Estágio 2
    {
        $unwind: "$estados.cidades" 
    },
    //Estágio 3
    {
        $project: {
            _id: 0, // 0 remove o array original
            nome_cidade: "$estados.cidades",
            estado: "$estados.sigla",
            nome_estado: "$estados.nome"
        }
    },
    {
        $out: "cidades_certa"
    }
]);