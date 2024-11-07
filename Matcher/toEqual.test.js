/**
 *  객체를 검증할 때, toEqual()를 주로 사용
*/

function getUser(id) {
  return {
    id, 
    email: `user${id}@test.com`,
  };
}

// id: 'esyeol', email: 'useresyeol@test.com'
getUser("esyeol"); 

// toEqual Test
test("유저 객체를 반환 ", ()=> {
  expect(getUser("esyeol")).toEqual({
    id: "esyeol",
    email: `useresyeol@test.com`,
  });
});


function game(score, time) {
  return {
    score,
    time,
    message: `score:${score},time:${time}`,
  };
}

test("게임의 점수와 시간을 반환", () => {
  expect(game("60","00:05:30")).toEqual({
    score: "60",
    time: "00:05:30",
    message: `score:60,time:00:05:30`,
  })
})





