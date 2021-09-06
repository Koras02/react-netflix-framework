/* eslint-disable no-useless-escape */
// 참고 // https://emailregex.com/
// email 의 글자 값이 0이거나, 이메일 형식이 틀리다면 false 

const emailRegEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/


// password가 4자 미만, 60자 초과일 경우 false
// 참고: https://regexr.com/3bfsi
const passwordRegEx = /^(?=.*\d)(?=.*[0-9]).{4,60}$/i


export const isValidEmail = (value) => emailRegEx.test(value)
export const isValidPassword = (value) => passwordRegEx.test(value)