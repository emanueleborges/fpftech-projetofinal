const database = require('../models');
require("dotenv").config();
class ClientesController {
     /**
     * POST /Clientes
     */
      static async insert(req, res) {
        const { Nome } = req.body;
            try {
                const resp = await database.Clientes.create({ Nome: Nome });
                return res.status(200).json(resp);
            } catch (error) {
                return res.status(500).json(error.message);
            }
    }
    /**
     * GET /Clientes/:id
     */
    static async read(req, res) {
        try {
            const resp = await database.Clientes.findAll({
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
     * GET /Clientes/:id
     */
    static async read_one(req, res) {
        const { id } = req.params;
        try {
            const resp = await database.Clientes.findOne({where: { id: id }});
            return res.status(200).json(resp);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    /**
     * POST /Clientes/:id
     */
    static async delete_one(req, res) {
        const { id } = req.params;
        try {
            const resp = await database.Clientes.destroy({where: { id: id }});
            return res.status(200).json(resp);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    /**
     * PUT /Clientes
     */
    static async update_one(req, res) {
        const { id } = req.params;
        const { Nome } = req.body;
        try {
            const resp = await database.Clientes.update({ Nome: Nome  }, {where: { id: id } });
            return res.status(200).json({ mensagem: `ID:${id} atualizado com sucesso` });
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }
}

module.exports = ClientesController;