import { IsNotEmpty } from 'class-validator';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Plano } from '../../planos/entities/plano.entity';
import { ApiHideProperty, ApiProperty } from '@nestjs/swagger';

@Entity({ name: 'tb_usuario' })
export class Usuario {

  @ApiProperty()
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty()
  @IsNotEmpty()
  @Column({ length: 255, nullable: false })
  nome: string;

  @IsNotEmpty()
  @Column({ length: 255, nullable: false })
  @ApiProperty()
  usuario: string;

  // @ApiProperty()
  @ApiHideProperty()
  @IsNotEmpty()
  @Column({ length: 255, nullable: false })
  senha: string;

  @ApiProperty()
  @Column({ length: 5000, nullable: true })
  foto: string;

  @ApiProperty()
  @Column({ type: "float" })
  altura: number;

  @ApiProperty()
  @Column({ type: "float" })
  peso: number;

  // @ApiProperty()
  @ApiProperty({ type: () => Plano, isArray: true })
  @OneToMany(() => Plano, (plano) => plano.usuario)
  planos: Plano[];

}