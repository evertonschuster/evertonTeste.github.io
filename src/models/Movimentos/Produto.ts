export interface Produto {
    id?: number,
    nome: string,
    marcaId?: number,
    codigoBarra?: string,
    quantidade?: number,
    quantidadeMinima?: number,
    valorCompra?: number,
    taxa?: number,
    valorVenda?: number,
    categoriaId?: number,
    unidadeMedidaId?: number,
    referencia?: string,
    descricao?: string,
}