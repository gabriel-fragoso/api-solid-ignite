import { FetchNearbyGymsUseCase } from "../fetch-nearby-gyms";
import { PrismaGymsRepository } from "@/repositories/prisma/prisma-gyms-repository";

export function makeFetchNearbyGymsUseCase() {
  const fetchNearbyGymsRepository = new PrismaGymsRepository();
  const useCase = new FetchNearbyGymsUseCase(fetchNearbyGymsRepository);

  return useCase;
}
