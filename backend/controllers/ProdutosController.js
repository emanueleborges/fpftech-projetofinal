const database = require('../models');

class ProdutosController {

    /**
     * POST /Produtos
     */
     static async insert(req, res) {
        const { Nome, Preco } = req.body;
            try {
                const resp = await database.Produtos.create({ Nome: Nome, Preco: Preco });
                return res.status(200).json(resp);
            } catch (error) {
                return res.status(500).json(error.message);
            }
    }
    /**
     * GET /Produtos/:id
     */
    static async read(req, res) {
        try {
            const resp = await database.Produtos.findAll({
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
     * GET /Produtos/:id
     */
    static async read_one(req, res) {
        const { id } = req.params;
        try {
            const resp = await database.Produtos.findOne({where: { id: id }});
            return res.status(200).json(resp);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    /**
     * POST /Produtos/:id
     */
    static async delete_one(req, res) {
        const { id } = req.params;
        try {
            const resp = await database.Produtos.destroy({where: { id: id }});
            return res.status(200).json(resp);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    /**
     * PUT /Produtos
     */
    static async update_one(req, res) {
        const { id } = req.params;
        const { Nome, Preco } = req.body;
        try {
            const resp = await database.Produtos.update({ Nome: Nome, Preco: Preco  }, {where: { id: id } });
            return res.status(200).json({ mensagem: `ID:${id} atualizado com sucesso` });
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }
}

module.exports = ProdutosController;