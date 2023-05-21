export default{
    name: 'product',
    title: 'Produto',
    type: 'document',
    fields: [
        {
            name: 'image',
            title: 'Imagem',
            type: 'array',
            of: [{ type: 'image'}],
            options: {
                hotspot: true,
            }
        },
        {
            name: 'name',
            title: 'Nome',
            type: 'string',
        },
        {
            name: 'slug',
            title: 'Palavra Chave',
            type: 'slug',
            options: {
                source: 'name',
                maxLength: 90,
            }
        },
        {
            name: 'price',
            title: 'Preço',
            type: 'number',
        },
        {
            name: 'details',
            title: 'Detalhes',
            type: 'string',
        }
    ]
}