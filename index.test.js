const {sequelize} = require("./db");

const {Restaurant, Menu, MenuItem} = require("./index");



//Destructuring Syntax
// const {banana} = require('./fruit')

// const banana = require('./fruit').banana

describe('Restaurant Database', () => {

	beforeAll(async () => {
		await sequelize.sync({force: true})
	})

	test('can create a restaurant', async() => {
		const testRestaurant = await Restaurant.create({name : 'Assagios'})
		expect(testRestaurant.name).toBe('Assagios')
	})

	 test('can create capacity', async () => {
	 	const testRestaurant = await Restaurant.create({name: 'Assagios', capacity: 100});
	 	expect(testRestaurant.capacity).toBe(100);
     })
     
     beforeAll(async () => {
        await sequelize.sync({force: true})
    })

    test('can create a title', async() => {
        const testMenu = await Menu.create({title : 'Assagios il Mangiare'})
        expect(testMenu.title).toBe('Assagios il Mangiare')
    })

    test('can create a title', async() => {
        const testMenu = await Menu.create({title : 'Assagios il Mangiare'})
        expect(testMenu.id).toBe(2)
    })

    // test('can create a menu', async() => {
    //     const testMenuItem = await MenuItem.create({name : 'chicken marsala'})
    //     expect(testMenuItem.name).toBe('chicken marsala')
    // })

    test('Restaurants can have many menus', async () => {
		const RuthChris = await Restaurant.create({name : 'RuthChris', capacity : 100})
         console.log(RuthChris);
		const food = await Menu.create({title: 'Food'});
		const drinks = await Menu.create({title: 'Drinks'});
		const dessert = await Menu.create({title: 'Dessert'});

		await RuthChris.addMenu(food) 
		await RuthChris.addMenu(drinks)
		await RuthChris.addMenu(dessert)

		const menus = await RuthChris.getMenus() // another association 'magic method'

		expect(menus.length).toBe(3)
		expect(menus[0] instanceof Menu).toBeTruthy
        
    })
    
    test('menus can have many items', async () => {
        const Item = await Menu.create({title: "al pasto"})

        const orange = await MenuItem.create({name: 'Orange', price: 5 });
        const steak = await MenuItem.create({name: 'Steak', price: 10});
        const vanilla = await MenuItem.create({name: 'vanilla ', price: 15 });

        await Item.addMenuItem(orange)
        await Item.addMenuItem(steak)
        await Item.addMenuItem(vanilla)

        const menuitems = await Item.getMenuItems()

        expect(menuitems.length).toBe(3)
        expect(menuitems[0] instanceof MenuItem).toBeTruthy


    })


}) 



