import axios from 'axios';

export const get = async (url) => {
    const {data} = await axios.get(url);
    return data;

    // return new Promise((resolve) => {
    //     const xhr = new XMLHttpRequest();
    //     xhr.open('GET', url);
    //     xhr.onreadystatechange = () => {
    //         if (xhr.readyState === 4) {
    //             const data = JSON.parse(xhr.response);
    //             resolve(data);
    //         }
    //     };
    //     xhr.send();
    // });
};
export const post = () => {};
export const put = () => {};
