import { Router } from 'express';
import { getRepository } from 'typeorm';
import { validate } from 'class-validator';
import Student from '../models/Student';

const studentRouter = Router();

studentRouter.post('/', async (request, response) => {
  try {
    const repo = getRepository(Student);
    const { key, name, email } = request.body;
    const student = repo.create({ key, name, email });
    const errors = await validate(student);

    if (errors.length === 0) {
      const res = await repo.save(student);
      return response.status(201).json(res);
    } else {
      response.status(400).json(errors);
    }
    const res = await repo.save(request.body);
    return response.status(201).json(res);
  } catch (err) {
    console.log('err.message :>> ', err.message);
  }
});

studentRouter.get('/', async (request, response) => {
  response.json(await getRepository(Student).find());
});

export default studentRouter;
