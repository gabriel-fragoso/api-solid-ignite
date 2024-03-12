import { CreateGymUseCase } from "../create-gym";
import { PrismaGymsRepository } from "@/repositories/prisma/prisma-gyms-repository";

export function makeCreateGymUseCase() {
  const createGymRepository = new PrismaGymsRepository();
  const useCase = new CreateGymUseCase(createGymRepository);

  return useCase;
}
