import { afterAll, beforeAll, describe, expect, it } from "vitest";
import request from "supertest";
import { app } from "@/app";

describe("Register User (e2e)", () => {
  beforeAll(async () => {
    await app.ready();
  });

  afterAll(async () => {
    await app.close();
  });

  it("should be able to register a user", async () => {
    const response = await request(app.server).post("/users").send({
      name: "john doe",
      email: "john@example.com",
      password: "123123",
    });

    expect(response.statusCode).toEqual(201);
  });
});
