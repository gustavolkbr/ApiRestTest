import { ErrorBase } from "./base.error";

export class EmailAlreadyExistsError extends ErrorBase {
    
    constructor(message = "O email informado já está em uso por outra conta!") {
        super(409, message);
    }   
}