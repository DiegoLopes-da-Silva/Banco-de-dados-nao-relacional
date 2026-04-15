db.pessoas_rascunho.aggregate ([
    {
        $project: {
            id: 0,
            nome : 1,
            $floor: {
                $multiply: [{ $rand: {}}, 100]
            },
            contratacao: {
                $add: [
                    new Date("2020-01-01"),
                    { $multiply: [{ $rand: {} }, new Date() - new Date("2020-01-01")]}
                ]
            }
        }
    },
    
    { $limit: 5},
    /* { $out: "agente" } */
])