import {
  Column,
  ChildEntity,
} from 'typeorm';
import Institution from './Institution';

@ChildEntity('univerity')
export default class University extends Institution {
  @Column()
  graduations: string;

  @Column()
  doctors: string;

  @Column()
  masters: string;
}
