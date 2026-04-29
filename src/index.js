import './app/index.scss';

const reg1 = /^([a-zA-Z0-9-_]+[\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9-_]+[\.]?)*[a-zA-Z0-9]+.[a-zA-Z]{2,3}$/;

console.log('reg', reg1.test('aa@qq.com'))



const reg2 = /^[a-zA-Z0-9-_]{1,64}@[a-zA-Z0-9](?:[a-zA-Z0-9-_]{0,253}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-_]{0,253}[a-zA-Z0-9])?)*\.[a-zA-Z]{2,6}$/;

console.log('reg', reg2.test('aa@qq.com'))
