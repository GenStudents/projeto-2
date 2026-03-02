import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";

import { Usuario } from "./usuario/entities/usuario.entity";
import { UsuarioModule } from "./usuario/usuario.module";

import { Plano } from "./planos/entities/plano.entity";
import { PlanoModule } from "./planos/plano.module";

import { CategoriaTreino } from "./categoria-treino/entities/categoria-treino.entity";
import { CategoriaTreinoModule } from "./categoria-treino/categoria-treino.module";
import { ConfigModule } from "@nestjs/config";
import { ProdService } from "./data/services/prod.service";
import { DevService } from "./data/services/dev.service";

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRootAsync({
      useClass: ProdService,
      imports: [ConfigModule],
    }),
    UsuarioModule,
    PlanoModule,
    CategoriaTreinoModule,
  ],
})
export class AppModule {}