export interface Sale {
    id: number
    Cliente_fk: number
    Produto_fk: number
    Quantidade: number
    Cliente: []
    Produto: []
}