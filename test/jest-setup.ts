import { SetupServer } from '@src/server';
import { Server } from 'http';
import supertest from 'supertest';

beforeAll(() => {
  const server = new SetupServer();
  server.init();
  global;
  global.testRequest = supertest(server.getApp());
});
