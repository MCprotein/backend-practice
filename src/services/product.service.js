/**
 * 지금 설명드리는 아키텍처
 * layred architecture (3 - layer architecture)
 * 3 - layer: controller, service, repository(=model)
 *
 * controller: http 통신만 함
 * service: 비즈니스 로직이 실행이됨.
 *          비즈니스 로직: 실제 API의 동작이 발생하는 부분
 * repository: db 접근만 함
 *
 * flow
 * 1. 사용자가 API 호출
 * 2. controller가 이 http 요청을 받음
 * 3. controller는 request params, query, body 이런거를 받아서 필요한 정보만 service에게 넘김
 * 4. service는 controller로부터 받은거 가지고 실제 어떤 행동을 하고, db 읽어오거나 쓰거나 하게되면 repository(model)를 호출
 * 5. repository는 넘겨받은 옵션을 가지고 db에 접근해서 결과를 service로 반환함
 *
 * java spring 에서 시작해서 다른 언어에서도 대부분 쓰이는 아키텍처
 * MVC pattern: model, view, controller -> 이 패턴이 만들어졌을때는 프론트엔드/백엔드 경계가 모호했음
 * 스프링 MVC 라이브러리 -> 3 - layer architecture
 */

// service
export class ProductService {
  constructor(productModel) {
    this.productModel = productModel
  }

  async getProducts({ orderBy, page, pageSize, keyword }) {
    const products = await this.productModel.findMany({
      orderBy,
      page,
      pageSize,
      keyword
    })
    forEach, reduce, filter, find, findIndex, ...
    const 가공된상품 = products.map((product) => {
      return {
        ...product,
        realPrice: product.price
      }
    })
    if (가공된 상품의 수가 1000개가 넘으면) {
      관리자에게 메일 보내기()
    }

    return 가공된상품
  }
}
