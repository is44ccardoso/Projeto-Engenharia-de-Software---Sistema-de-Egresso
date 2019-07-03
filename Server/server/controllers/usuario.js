const Usuario = require('../models').Usuario;
const Sequelize = require('sequelize');

module.exports = {
    create(req, res){
        return Usuario
        .create({
            matricula: req.body.matricula,
            senha: db.sequelize.fn('PASSWORD', req.body.senha),
            nome: req.body.nome,
            cpf: req.body.cpf,
            email: req.body.email,
            usr_tipo: req.body.usr_tipo,
            curso_id: req.body.curso_id,
        })
        .then(usuario => res.status(201).send(usuario))
        .catch(Sequelize.ValidationError, function(err){
            return req.status(422).send(err.errors);
        })
        .catch(error => res.status(400).send(error));
    },
    list(req, res){
        return Usuario
        .findAll()
        .then(usuario => res.status(200).send(usuario))
        .catch(error => res.status(400).send(error));
    },
    retrieve(req, res){
        return Usuario
        .findByPk(req.params.usr_id)
        .then(usuario => {
            if(!usuario){
                return res.status(404).send({
                    message:'Usuário não encontrado',
                });
            }
            return res.status(200).send(usuario)
        })
        .catch(error => res.status(400).send(error));
    },
    update(req, res){
        return Usuario
        .findByPk(req.params.usr_id)
        .then(usuario => {
            if(!usuario){
                return res.status(404).send({
                    message: 'Usuário não encontrado',
                });
            }
            return usuario
            .update({
                matricula: req.body.matricula || usuario.matricula,
                senha: req.body.senha || usuario.senha,
                nome: req.body.nome || usuario,
                cpf: req.body.cpf || usuario.cpf,
                email: req.body.email || usuario.email,
                usr_tipo: req.body.usr_tipo || usuario.usr_tipo,
                curso_id: req.body.curso_id || usuario.curso_id,
            })
            .then(() => res.status(200).send(usuario))
            .catch(error => req.status(400).send(error));
        })
        .catch(error => res.status(400).send(error));
    },
    destroy(req, res){
        return Usuario
        .findByPk(req.params.usr_id)
        .then(usuario => {
            if(!usuario){
                return res.status(404),send({
                    message: 'Usuário não encontrado',
                });
            }
            return usuario
            .destroy()
            .then(() => res.status(200).send({
                message: 'Usuário removido com sucesso',
            }))
            .catch(error => res.status(400).send(error));
        })
        .catch(error => res.status(400).send(error));
    },
    // auth(req,res){
    //     return Sis_usuario
    //     .findOne({
    //         where: {
    //             usr_login: req.headers.usr_login,
    //             usr_senha: [db.sequelize.fn('PASSWORD', req.headers.usr_senha)],
    //         }
    //     })
    //     .then(sis_usuario => {
    //         if(!sis_usuario){
    //             return res.status(404).send({
    //                 message: 'Usuario não encontrado',
    //             });
    //         }
    //         return res.status(200).send(sis_usuario);
    //     })
    //     .catch(error => res.status(400).send(error));
    // }
};