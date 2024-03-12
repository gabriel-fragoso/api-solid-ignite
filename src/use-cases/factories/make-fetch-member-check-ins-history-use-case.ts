import { FetchMemberCheckInsHistoryUseCase } from "../fetch-member-check-ins-history";
import { PrismaCheckInsRepository } from "@/repositories/prisma/prisma-check-ins-repository";

export function makeFetchMemberCheckInsHistoryUseCase() {
  const fetchMemberCheckInsHistoryRepository = new PrismaCheckInsRepository();
  const useCase = new FetchMemberCheckInsHistoryUseCase(
    fetchMemberCheckInsHistoryRepository
  );

  return useCase;
}
