class PizzaHut {
    order(orderSheet) {
        const pizza = {
            name: orderSheet.name,
            ingredients: ['치즈', '햄', '피망']
        };
        // return pizza;
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(pizza);
                //reject('죄송!!!');
            }, 5000);
        });
    }
}
class Person {
    eat(food) {
        console.log(`${food.name}을/를 냠냠`);
    }
}

const person = new Person();
const pizzaHut = new PizzaHut();
pizzaHut.order({name: '페페로니피자'}).then((pizza) => {
    person.eat(pizza);
}).catch(err => {
    console.log(err);
});
console.log('주문완료');
//person.eat(pizza);