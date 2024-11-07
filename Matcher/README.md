
### Matcher 

> 정의 
```
Jest uses "matchers" to let you test values in different ways. This document will introduce some commonly used matchers.
```
- 직역하면 다른 방법으로 값을 테스트 하도록 하는 것을 Matcher라는 키워드로 jest에서 정의함. 
- 기대한 값이 실제 반환되는 값과 일치하는지를 확인하는 작업을 의미.


> 종류

- toBe(value): 두 값(원시타입)이 동일한지 확인.
- toEqual(value): 객체의 모든값이 같은지 재귀적으로 확인. 
- toBeNull(): toBe(null)과 동일함. Falsy일때, 조금더 명확한 에러를 반환.
- toBeUndefined(): 값이 undefined인지 확인함. toBe(undefined)도 가능하나 직접 코드에서 undefined 하는 것은 지양해야함.
- toBeDefined(): toBeUndefined()의 반대.
- toBeTruthy(): JS에서 인지하는 ture 값을 반환하는지 확인.
- toBeFalsy(): toBeTruthy()의 반대.
- toBeNan(): 숫자가 아님을 확인.