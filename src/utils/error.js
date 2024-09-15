// 객체지향프로그래밍에서 4가지 특징
/**
 * 추상화: 내부의 로직을 안보여주고 좀 단순화해서 보여주는거
 * 캡슐화,
 * 다형성,
 * 상속: 부모클래스의 멤버변수, 메소드를 물려받는것
 */

export class TypeError extends Error {
  constructor(message) {
    super(message)
    this.name = 'TypeError'
    this.statusCode = 400
  }
}

export class ValidationError extends Error {
  constructor(message) {
    super(message)
    this.name = 'ValidationError'
    this.statusCode = 400
  }
}

export class CastError extends Error {
  constructor(message) {
    super(message)
    this.name = 'CastError'
    this.statusCode = 404
  }
}
