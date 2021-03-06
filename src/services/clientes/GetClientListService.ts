import { getRepository } from "typeorm";
import { Client } from "../../entities/Client";

export class GetClientListService {
  async execute() {
    const repository = getRepository(Client);
    const clientList = await repository.find({
      relations: ["endereco", "telefone"],
    });
    getRepository(Client).createQueryBuilder().orderBy("nome", "DESC").getMany();
    return clientList;
  }
}
