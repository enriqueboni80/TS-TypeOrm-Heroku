import { ChildEntity } from 'typeorm';
import Institution from './Institution';

@ChildEntity('school')
export default class School extends Institution {}
