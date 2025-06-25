import { NextFunction, Request, Response } from "express";
import { User } from "../models/user.model";
import { UserService } from "../service/user.service";

export class UsersController {
    static async getAll(req: Request, res: Response, next: NextFunction) {
        res.send(await new UserService().getAll());
    }

    static async getById(req: Request, res: Response, next: NextFunction) {
        let userId = req.params.id;
        res.send(await new UserService().getById(userId));
    }

    static async save(req: Request, res: Response, next: NextFunction) {
        await new UserService().save(req.body);
        res.status(201).send({
            message: "usuário criado com sucesso!!!"
        })
    }

    static async update (req: Request, res: Response, next: NextFunction) {
        let userId = req.params.id;
        let user = req.body as User;
        new UserService().update(userId, user);

        res.send({
            message: `usuario ${user.nome} alterado com sucesso`
        })
    }

    static async delete (req: Request, res: Response, next: NextFunction) {
        let userId = req.params.id;
        await new UserService().delete(userId);
        res.status(204).send();
    }

}

// MINHA TENTATIVA DE CODIGO DAS ROTAS 'DELETE' E 'PUT'

// app.delete("/users/:id", (req: Request, res: Response) => {
//     let userId = Number(req.params.id);

//     const index = usuarios.findIndex(user => user.id === userId);

//     if (index !== -1) {
//         usuarios.splice(index, 1); // Remove o usuário do array
//         res.send({ message: "Usuário removido com sucesso" });
//     } else {
//         res.status(404).send({ message: "Usuário não encontrado" });
//     }
// });

// app.put("/users/:id", (req: Request, res: Response) => {
//     let userId = Number(req.params.id);

//     const {nome, email} = req.body;

//     const index = usuarios.findIndex(user => user.id === userId);

//     if (index !== -1) {
//         // Usando o map para atualizar o usuário específico
//         usuarios = usuarios.map(user =>
//             user.id === userId ? { ...user, nome, email } : user
//         );

//         res.send({ message: "Usuário atualizado com sucesso!" });
//     } else {
//         res.status(404).send({ message: "Usuário não encontrado" });
//     }
// })