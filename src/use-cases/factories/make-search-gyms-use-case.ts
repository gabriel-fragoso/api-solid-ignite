import { SearchGymsUseCase } from "../search-gyms";
import { PrismaGymsRepository } from "@/repositories/prisma/prisma-gyms-repository";

export function makeSearchGymsUseCase() {
  const searchGymsRepository = new PrismaGymsRepository();
  const useCase = new SearchGymsUseCase(searchGymsRepository);

  return useCase;
}
