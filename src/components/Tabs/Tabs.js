import React, {useState, useEffect} from 'react';

const Tabs = (props) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const getColor = (index, item) =>  activeIndex === index ? item.color : 'black';
    const getOnClickHandler = (index) => {
        return (e) => {
            e.preventDefault();
            setActiveIndex(index);
        };
    };
    const prev = () => {
        let index = activeIndex - 1;
        if (index < 0) {
            index = props.list.length - 1;
        }
        setActiveIndex(index);
    };
    const next = () => {
        let index = activeIndex + 1;
        if (index > props.list.length - 1) {
            index = 0;
        }
        setActiveIndex(index);
    };

    if (!props.list.length) return <span>...로딩중</span>;

    return (
        <div>
            <ul>
                {props.list.map((item, i) => {
                    return (
                        <li key={i}>
                            <a href={"#"}
                               style={{color: getColor(i, item)}}
                               onClick={getOnClickHandler(i)}>
                                {item.title}
                            </a>
                        </li>
                    )
                })}
            </ul>
            <button onClick={prev}>prev</button>
            <button onClick={next}>next</button>
            <div>
                {props.children && props.children[activeIndex]}
            </div>
        </div>
    );
};
// class Tabs extends React.Component {
//     render() {
//         return (
//             <div>
//                 tabs
//             </div>
//         )
//     }
// }

export default Tabs;