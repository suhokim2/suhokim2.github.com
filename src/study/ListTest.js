import React from 'react';

const ListTest = () => {
    const numbers = [1,2,3,4,5,6,7,8];
    const people = [{name: 'suho', age: 35}, {name: 'gildong', age: 30}, {name: 'younghee', age: 20}, {name: 'taehee', age: 21}];
    return (
        <div>
            <ul>
                {numbers.map((num, i) => {
                    return (
                        <li key={i}>{num}</li>
                    );
                })}
            </ul>
            <h2>전체</h2>
            <ul>
                {people.map((person, i) => {
                    return (
                        <li id={`person-${i}`}
                            key={i}>
                            {person.name} : {person.age}
                        </li>
                    );
                })}
            </ul>
            <h2>30살 이상</h2>
            <ul>
                {people
                    .filter((person) => person.age >= 30)
                    .map((person, i) => {
                    return (
                        <li key={i}>{`${person.name} : ${person.age}`}</li>
                    )
                })}
            </ul>
        </div>
    );
};

export default ListTest;