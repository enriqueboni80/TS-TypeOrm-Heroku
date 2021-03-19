import {
  Column,
  ChildEntity,
} from 'typeorm';
import Institution from './Institution';

@ChildEntity('college')
export default class College extends Institution{
  @Column()
  graduations: string;
}
