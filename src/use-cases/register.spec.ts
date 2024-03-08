import { expect, describe, it } from "vitest";
import { RegisterUseCase } from "./register";
import { compare } from "bcryptjs";

describe("Regiser Use Case", () => {
  it("should hash user password upon registration", async () => {
    const regiserUseCase = new RegisterUseCase({
      async findByEmail(email) {
        return null;
      },

      async create(data) {
        return Promise.resolve({
          id: "user-1",
          name: data.name || null,
          email: data.email,
          password_hash: data.password_hash,
          created_at: new Date(),
        });
      },
    });

    const { user } = await regiserUseCase.execute({
      name: "John Doe",
      email: "johndoe@example.com",
      password: "123456",
    });

    const isPasswordCorrectlyHashed = await compare(
      "123456",
      user.password_hash
    );

    expect(isPasswordCorrectlyHashed).toBe(true);
  });
});
