import { IsNotEmpty, MinLength } from "class-validator";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Plano } from "../../planos/entities/plano.entity";
import { ApiProperty } from "@nestjs/swagger";

@Entity({ name: "tb_categorias_treino" })
export class CategoriaTreino {

  @ApiProperty()
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty()
  @IsNotEmpty()
  @MinLength(3)
  @Column({ length: 255, nullable: false })
  descricao: string;

  @ApiProperty({ type: () => Plano, isArray: true })
  // @ApiProperty()
  @OneToMany(() => Plano, (plano) => plano.categoriaTreino)
  planos: Plano[];
  
}