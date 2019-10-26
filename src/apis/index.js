import {get} from "../module/http";

const apiUrl = 'https://wow9144.github.io';
export const getInterestList = () => get(`${apiUrl}/tabs.json`);
export const getBooks = () => get(`${apiUrl}/books.json`);

// async function a() {
//     const num = await b();
//     console.log(num);
//     return 1;
// }
// function b() {
//     return new Promise((resolve) => {
//         resolve(1);
//     })
// }
// a.then((num) => console.log(num));