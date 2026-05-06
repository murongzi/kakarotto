import './app/index.scss';

const reg1 = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)+/g;;

console.log('reg', reg1.test('aa@qq.com'))



const reg2 = /[a-zA-Z0-9._%+-]{1,64}@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,253}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,253}[a-zA-Z0-9])?)*\.[a-zA-Z]{2,10}/g

console.log('reg', reg2.test('aa@qq.com'))

const func = ''.match(/=>\s*\{(.*)\}/s)[1] || ''
const fn = new Function('data', func) // NOSONAR
const a = fn(result.data) // NOSONAR
console.log('a', a)
