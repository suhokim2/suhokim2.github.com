// import Button from "./components/Button/Button";
//
// function App() {
//     return `
//     <div>
//     ${Button({
//         class: 'btn--primary',
//         text: '1111'
//     })}
//     ${Button({
//         class: 'btn--warning',
//         text: '222222'
//     })}
// </div>
//     `
// }
//
import React, {useEffect, useState} from 'react';
import Counter from "./study/Counter";
import InputMirror from "./study/InputMirror";
import Calculator from "./study/Calculator";
import ListTest from "./study/ListTest";
import Tabs from "./components/Tabs/Tabs";
import {get} from "./module/http";
import {getBooks, getInterestList} from "./apis";

function App() {
    useEffect(() => {
        (async () => {
            // const {data: interestList} = await getInterestList();
            // setInterestList(interestList);
            // const {data: books} = await getBooks();
            // setBooks(books);
            const [{data: interestList}, {data: books}] =
                await Promise.all([getInterestList(), getBooks()]);

            setInterestList(interestList);
            setBooks(books);
        })();
        // getInterestList().then(data => {
        //     const interestList = data.data;
        //     setInterestList(interestList);
        // });
        //
        // getBooks().then(data => {
        //     setBooks(data.data);
        // });
    }, []);
    const [interestList, setInterestList] = useState([]);
    const [books, setBooks] = useState([]);
    // const list = [
    //     {title: '리빙', color: 'green'},
    //     {title: '푸드', color: 'orange'},
    //     {title: '스포츠', color: 'blue'},
    //     {title: '자동차', color: 'darkgreen'},
    //     {title: '패션뷰티', color: 'pink'}
    // ];
    // const list2 = [
    //     {title: '하하하하', color: 'green'},
    //     {title: 'ㅋㅋㅋㅋㅋ', color: 'orange'}
    // ];
    return (
        <div>
            <Tabs list={interestList}>
                <div>1111</div>
                <div>2222</div>
                <div>3333</div>
                <div>4444</div>
                <div>5555</div>
            </Tabs>
            <Tabs list={books} />
            {/*<Counter />*/}
            {/*<hr />*/}
            {/*<InputMirror />*/}
            {/*<hr />*/}
            {/*<Calculator />*/}
            {/*<hr />*/}
            {/*<ListTest />*/}
        </div>
    )
}
export default App;




