db.veiculos.aggregate ([
    //Estágio 1
    {
        $project: {
            _id: 0, // 0 remove o array original
            modelo: "$veiculos.modelo",
            ano: "$veiculos.ano",
            renava: "$veiculos.renavan",
            placa: "$veiculos.placa",
            cor: "$veiculos.cor"
        }
    },
    {
        $out: "veiculos_certos"
    }
]);

db.veiculos.aggregate ([

    {
        $project: {
            _id: 0,
            marca: "$veiculos.marcas"
        }
    },

    {
        $out: "marcas_veiculos"
    }
]);