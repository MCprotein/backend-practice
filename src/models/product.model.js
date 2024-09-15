// 프론트엔드 할거면 잘 몰라도 됨.
// 백엔드는 무조건 알아야됨

import { productSchema } from './product.schema'

// 객체를 만들 수 있는 틀 ->
// 이 클래스를 사용해서 인스턴스 라는거를 생성할 수 있음
// 실제로 이 코드는 인스턴스를 통해 사용됨

// 클래스는 객체지향프로그래밍에서 많이 쓰이는 개념
// 객체지향프로그래밍은 자바로 많이 표현이 됨

// 이 모델 클래스는 DB 접근만 함
// 모델은 비즈니스 서비스 로직, http 통신 로직 이런걸 몰라야됨
// repository (model)
export class ProductModel {
  // 인스턴스가 어떤 것을 가지고 있게 하려는 것인가?
  constructor(connection) {
    this.model = connection.model('Product', productSchema)
  }

  // 그냥 db 에서 데이터 추출해서 내보내기만 함
  async findMany({ orderBy, page, pageSize, keyword }) {
    const sortOption = { createdAt: orderBy === 'recent' ? 'asc' : 'desc' }
    const searchOption = keyword ? { $text: { $search: keyword } } : {}

    const query = this.model.find(searchOption)
    const count = await query.clone().countDocuments()

    return await query
      .sort(sortOption)
      .skip((page - 1) * pageSize)
      .limit(pageSize)
  }
}

// 1. db를 쓰다가 바꿔야될때 -> db url 바뀜 (여러개의 db url 사용하던 중)
//   - 테스트 코드 작성할때 테스트 디비 url
