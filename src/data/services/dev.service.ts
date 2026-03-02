import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from "@nestjs/typeorm";
import { Usuario } from "../../usuario/entities/usuario.entity";
import { Plano } from "../../planos/entities/plano.entity";
import { CategoriaTreino } from "../../categoria-treino/entities/categoria-treino.entity";

export class DevService implements TypeOrmOptionsFactory {

    createTypeOrmOptions(): TypeOrmModuleOptions {
        return {
            type: "mysql",
            host: "localhost",
            port: 3306,
            username: "root",
            password: "root",
            database: "db_fittrack",
            entities: [Usuario, Plano, CategoriaTreino],
            synchronize: true
        }
    }

}