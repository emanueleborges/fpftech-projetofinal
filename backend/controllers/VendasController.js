const database = require('../models');

class VendasController {
    /**
     * POST /Vendas
     */
     static async insert(req, res) {
        const { Cliente_fk, Produto_fk, Quantidade } = req.body;
        try {
            const insert_one = await database.Vendas.create({ Cliente_fk: Cliente_fk , Produto_fk: Produto_fk, Quantidade: Quantidade  });
            return res.status(200).json(insert_one);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }
    /**
     * GET /Vendas/
     */
    static async read(req, res) {
        try {
           
              const resp = await database.Vendas.findAll({
                include: [
                    {
                      model: database.Produtos,
                    },
                    {
                      model: database.Clientes,
                    },
                  ],
                order: [
                  ["id", "DESC"],
                ],
              });

            return res.status(200).json(resp);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }
    /**
     * GET /Vendas/:id
     */
    static async read_one(req, res) {
        const { id } = req.params;
        try {
            const resp = await database.Vendas.findOne({
                include: [
                    {
                      model: database.Produtos,
                    },
                    {
                      model: database.Clientes,
                    },
                  ],
                where: { id: id }
            });
            return res.status(200).json(resp);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    /**
     * POST /Vendas/:id
     */
    static async delete_one(req, res) {
        const { id } = req.params;
        try {
            const resp = await database.Vendas.destroy({where: { id: id }});
            return res.status(200).json(resp);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    /**
     * PUT /Vendas
     */
    static async update_one(req, res) {
        const { id } = req.params;
        const { Cliente_fk, Produto_fk, Quantidade } = req.body;

        try {
            const resp = await database.Vendas.update({ Cliente_fk: Cliente_fk , Produto_fk: Produto_fk, Quantidade: Quantidade }, {where: { id: id } });
            return res.status(200).json({ mensagem: `ID:${id} atualizado com sucesso` });
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }
}


module.exports = VendasController;