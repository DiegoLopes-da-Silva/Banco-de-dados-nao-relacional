db.cliente.insertMany([{
    "_id": 153,
    "nome": "Alice",
    "email": "alice@example.com"
}]);

db.venda.insertMany([{
    "_id": 57,
    "cliente_id": 153,
    "data_venda": ISODate("2023-01-15T08:00:00Z"),
    "mes": 1,
    "ano": 2023
}]);

db.item.insertMany([{
    "_id": 1,
    "venda_id": 57,
    "produto": "Laptop",
    "quantidade": 2,
    "preco_unitario": 1200
}]);