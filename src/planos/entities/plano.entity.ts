import { IsNotEmpty } from 'class-validator';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Usuario } from '../../usuario/entities/usuario.entity';
import { CategoriaTreino } from '../../categoria-treino/entities/categoria-treino.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity({ name: 'tb_planos' })
export class Plano {
  
  @ApiProperty()
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty()
  @IsNotEmpty()
  @Column({ length: 255, nullable: false })
  nome: string;

  @ApiProperty()
  @IsNotEmpty()
  @Column()
  duracao: number;

  @ApiProperty()
  @IsNotEmpty()
  @Column({ length: 255, nullable: false })
  nivel: string;

  @ApiProperty({ type: () => Usuario })
  @ManyToOne(() => Usuario, (usuario) => usuario.planos, {
    onDelete: 'CASCADE'
  })
  usuario: Usuario;

  @ApiProperty({ type: () => CategoriaTreino })
  // @ApiProperty()
  @ManyToOne(() => CategoriaTreino, (categoria) => categoria.planos, {
    onDelete: 'CASCADE'
  })
  categoriaTreino: CategoriaTreino;

}