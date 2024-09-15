export class ProductRepository {
  constructor(prismaClient) {
    this.prismaClient = prismaClient
  }

  async findMany({ orderBy, page, pageSize, keyword }) {
    const query = {}
    return await this.prismaClient.user.findMany({ data: query })
  }
}
