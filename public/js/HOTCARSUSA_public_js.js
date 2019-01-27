(function( $ ) {
	var vue_ins = new Vue({
		el: '#HOTCARSUSA_vue',
		data: {
			aviaPost:50,
			pcInsurance: 1.5,
			excortToOdessa: 450,
			deliveryToTown:0,
			locAuto:'',
			stateFrom:'',
			portTo:'',
			seaFreight:'',
			priceToPort:'',
			typeAuto:'',
			costOnePlaceInConteiner:'',
			engineType:'',
			autoPrice:'',
			auction:'',
			wayInsurance:'',
			autoAge:'',
			engineСapacity:'',
			customsBroker:'',
			deliveryInUkraine:'',
			certification:'',
			certifications: [
				{ name: 'Да', value: 300 },
				{ name: 'Нет, самостоятельно', value: 0 },
			],	
			towns: [
				{ id: 1, name: 'Винница',             value: 250 },
				{ id: 2, name: 'Днепр',               value: 180 },
				{ id: 3, name: 'Житомир',             value: 220 },
				{ id: 4, name: 'Запорожье',           value: 180 },
				{ id: 5, name: 'Ивано-Франковск',     value: 300 },
				{ id: 6, name: 'Киев',                value: 180 },
				{ id: 7, name: 'Кропивницкий',        value: 200 },
				{ id: 8, name: 'Луцк',                value: 350 },
				{ id: 9, name: 'Львов',               value: 350 },
				{ id: 10, name: 'Николаев',           value: 100 },
				{ id: 11, name: 'Одесса',             value:  50 },
				{ id: 12, name: 'Полтава',            value: 250 },
				{ id: 13, name: 'Ровно',              value: 250 },
				{ id: 14, name: 'Сумы',               value: 200 },
				{ id: 15, name: 'Тернополь',          value: 300 },
				{ id: 16, name: 'Ужгород',            value: 350 },
				{ id: 17, name: 'Харьков',            value: 250 },
				{ id: 18, name: 'Херсон',             value: 150 },
				{ id: 19, name: 'Хмельницкий',        value: 300 },
				{ id: 20, name: 'Черкассы',           value: 250 },
				{ id: 21, name: 'Чернигов',           value: 250 },
				{ id: 22, name: 'Черновцы',           value: 250 },
				{ id: 23, name: 'Нет, самостоятельно',value:   0 },
			],			
			brokers: [
				{ name: 'Да, нужен', value: 500 },
				{ name: 'Нет, оформляю самостоятельно',       value:   0 },
			],			
			autoAges: [
				{ id: 1,  name: '2019', koef: 1 },
				{ id: 2,  name: '2018', koef: 1 },
				{ id: 3,  name: '2017', koef: 1 },
				{ id: 4,  name: '2016', koef: 2 },
				{ id: 5,  name: '2015', koef: 3 },
				{ id: 6,  name: '2014', koef: 4 },
				{ id: 7,  name: '2013', koef: 5 },
				{ id: 8,  name: '2012', koef: 6 },
				{ id: 9,  name: '2011', koef: 7 },
				{ id: 10, name: '2010', koef: 8 },
				{ id: 11, name: '2009', koef: 9 },
				{ id: 12, name: '2008', koef: 10 },
				{ id: 13, name: '2007', koef: 11 },
				{ id: 14, name: '2006', koef: 12 },
				{ id: 15, name: '2005', koef: 13 },
				{ id: 16, name: '2004', koef: 14 },
				{ id: 17, name: '2003', koef: 14 },
				{ id: 18, name: '2002', koef: 14 },
				{ id: 19, name: '2001', koef: 14 },
				{ id: 20, name: '2000', koef: 14 },
				{ id: 21, name: '1999', koef: 14 },
				{ id: 22, name: '1998', koef: 14 },
				{ id: 23, name: '1997', koef: 14 },
				{ id: 24, name: '1996', koef: 14 },
				{ id: 25, name: '1995', koef: 14 },
			],			
			typesOfWayInsurance: [
				{ name: 'Да',  value: 1 },
				{ name: 'Нет', value: 0 },
			],
			typesOfAuction: [
				{ name: 'Copart', value: 1 },
				{ name: 'IAAI',   value: 2 },
			],			
			engineTypes: [
				{ name: 'Бензин',  value: 1 },
				{ name: 'Дизель',  value: 2 },
				{ name: 'Электро', value: 3 },
			],			
			typesOfAuto: [
				{ name: 'Легковой', value: 1 },
				{ name: 'Грузовой', value: 2 },
			],
			ports: 	[
				{port: 'New Jersey',   seaFreight: 250},
				{port: 'Miami',        seaFreight: 350},
				{port: 'Los Angeles',  seaFreight: 450},
				{port: 'Houston',      seaFreight: 350},
				{port: 'Нет доставки', seaFreight:   0}
			],		
			locationAuto: [
				{ id: 1,  name: 'NewJersey(NJ)',     price: 400, port: 'New Jersey' },
				{ id: 2,  name: 'Alaska(AK)',        price:   0, port: 'Нет доставки'},
				{ id: 3,  name: 'Alabama(AL)',       price: 500, port: 'Miami' },
				{ id: 4,  name: 'Arizona(AZ)',       price: 500, port: 'Los Angeles'},
				{ id: 5,  name: 'Arcansas(AR)',      price: 550, port: 'Houston'},
				{ id: 6,  name: 'California(CA)',    price: 400, port: 'Los Angeles'},
				{ id: 7,  name: 'Collorado(CO)',     price: 650, port: 'Los Angeles'},
				{ id: 8,  name: 'Connecticut(CT)',   price: 400, port: 'New Jersey'},
				{ id: 9, name: 'Delaware(DE)',       price: 400, port: 'New Jersey'},
				{ id: 10, name: 'Florida(FL)',       price: 400, port: 'Miami'},
				{ id: 11, name: 'Georgia(GA)',       price: 450, port: 'Miami'},
				{ id: 12, name: 'Hawaii(HI)',        price:   0, port: 'Нет доставки'},
				{ id: 13, name: 'Idaho(ID)',         price: 650, port: 'Los Angeles'},
				{ id: 14, name: 'Illinois(IL)',      price: 750, port: 'New Jersey'},
				{ id: 15, name: 'Indiana(IN)',       price: 650, port: 'New Jersey'},
				{ id: 16, name: 'Iowa(IA)',          price: 750, port: 'New Jersey'},
				{ id: 17, name: 'Kansas(KS)',        price: 650, port: 'New Jersey'},
				{ id: 18, name: 'Kentuky(KY)',       price: 500, port: 'New Jersey'},
				{ id: 19, name: 'Louisiana(LA)',     price: 400, port: 'Houston'},
				{ id: 20, name: 'Maine(ME)',         price: 550, port: 'New Jersey'},
				{ id: 21, name: 'Maryland(MD)',      price: 400, port: 'New Jersey'},
				{ id: 22, name: 'Massachusetts(MA)', price: 500, port: 'New Jersey'},
				{ id: 23, name: 'Michigan(MI)',      price: 550, port: 'New Jersey'},
				{ id: 24, name: 'Minnesota(MN)',     price: 750, port: 'New Jersey'},
				{ id: 25, name: 'Mississippi(MS)',   price: 400, port: 'New Jersey'},
				{ id: 26, name: 'Missouri(MO)',      price: 650, port: 'New Jersey'},
				{ id: 27, name: 'Montana(MT)',       price: 600, port: 'Los Angeles'},
				{ id: 28, name: 'Nebraska(NE)',      price: 750, port: 'Houston'},
				{ id: 29, name: 'Nevada(NV)',        price: 500, port: 'Los Angeles'},
				{ id: 30, name: 'NewHampshire(NH)',  price: 550, port: 'New Jersey'},
				{ id: 31, name: 'NewMexico(NM)',     price: 600, port: 'Houston'},
				{ id: 32, name: 'NewYork(NY)',       price: 400, port: 'New Jersey'},
				{ id: 33, name: 'NorthCarolina(NC)', price: 550, port: 'New Jersey'},
				{ id: 34, name: 'NorthDakota(ND)',   price: 750, port: 'Los Angeles'},
				{ id: 35, name: 'Ohio(OH)',          price: 550, port: 'New Jersey'},
				{ id: 36, name: 'Oklahoma(OK)',      price: 550, port: 'Houston'},
				{ id: 37, name: 'Oregon(OR)',        price: 600, port: 'Los Angeles'},
				{ id: 38, name: 'Pennsylvania(PA)',  price: 450, port: 'New Jersey'},
				{ id: 39, name: 'RhodeIsland(RI)',   price: 550, port: 'New Jersey' },
				{ id: 40, name: 'SouthCarolina(SC)', price: 500, port: 'Miami'},
				{ id: 41, name: 'SouthDakota(SD)',   price: 750, port: 'New Jersey'},
				{ id: 42, name: 'Tennessee(TN)',     price: 600, port: 'New Jersey'},
				{ id: 43, name: 'Texas(TX)',         price: 400, port: 'Houston'},
				{ id: 44, name: 'Utah(UT)',          price: 550, port: 'Los Angeles'},
				{ id: 45, name: 'Vermont(VT)',       price: 550, port: 'New Jersey'},
				{ id: 46, name: 'Virginia(VA)',      price: 500, port: 'New Jersey' },
				{ id: 47, name: 'Washington(WA)',    price: 650, port: 'Los Angeles' },
				{ id: 48, name: 'WestVirginia(WV)',  price: 550, port: 'New Jersey'},
				{ id: 49, name: 'Wisconsin(WI)',     price: 650, port: 'New Jersey'},
				{ id: 50, name: 'Wyoming(WY)',       price: 550, port: 'Los Angeles' },
			],
			IAAI1: [
				{cost: 0,    value:   1},
				{cost: 100,  value:  40},
				{cost: 200,  value:  60},
				{cost: 300,  value:  75},
				{cost: 350,  value:  90},
				{cost: 400,  value: 100},
				{cost: 500,  value: 130},
				{cost: 600,  value: 145},
				{cost: 700,  value: 160},
				{cost: 800,  value: 175},
				{cost: 900,  value: 190},
				{cost: 1000, value: 205},
				{cost: 1100, value: 220},
				{cost: 1200, value: 230},
				{cost: 1300, value: 240},
				{cost: 1400, value: 255},
				{cost: 1500, value: 270},
				{cost: 1600, value: 290},
				{cost: 1800, value: 310},
				{cost: 2000, value: 335},
				{cost: 2200, value: 350},
				{cost: 2400, value: 365},
				{cost: 2600, value: 385},
				{cost: 2800, value: 400},
				{cost: 3000, value: 415},
				{cost: 3500, value: 430},
				{cost: 4000, value: 450},
				{cost: 5000, value: 450},
				{cost: 999999.99, value: 0},
			],
			IAAI2: [
				{cost: 0,    value:  1},
				{cost: 100,  value: 29},
				{cost: 500,  value: 39},
				{cost: 1000, value: 49},
				{cost: 1500, value: 59},
				{cost: 2000, value: 69},
				{cost: 3000, value: 69},
				{cost: 4000, value: 79},
				{cost: 4000, value: 89},
			],
			Copart1: [
				{cost: 0,     value:  1},
				{cost: 100,   value:  25},
				{cost: 200,   value:  50},
				{cost: 300,   value:  75},
				{cost: 400,   value: 110},
				{cost: 500,   value: 125},
				{cost: 550,   value: 130},
				{cost: 600,   value: 140},
				{cost: 700,   value: 155},
				{cost: 800,   value: 170},
				{cost: 900,   value: 185},
				{cost: 1000,  value: 200},
				{cost: 1200,  value: 225},
				{cost: 1300,  value: 225},
				{cost: 1400,  value: 250},
				{cost: 1500,  value: 250},
				{cost: 1600,  value: 275},
				{cost: 1700,  value: 275},
				{cost: 1800,  value: 300},
				{cost: 2000,  value: 325},
				{cost: 2400,  value: 325},
				{cost: 2500,  value: 350},
				{cost: 3000,  value: 400},
				{cost: 3500,  value: 400},
				{cost: 4000,  value: 400},
				{cost: 4500,  value: 400},
				{cost: 5000,  value: 425},
				{cost: 6000,  value: 425},
				{cost: 7500,  value: 450},
				{cost: 10000, value: 500},
				{cost: 15000, value: 550},
				{cost: 20000, value: 600},
				{cost: 25000, value: 650},
				{cost: 30000, value: 700},
				{cost: 35000, value: 0},
			],
			Copart2: [
				{cost: 0,       value:  0},
				{cost: 100,     value: 29},
				{cost: 500,     value: 39},
				{cost: 1000,    value: 49},
				{cost: 1500,    value: 59},
				{cost: 2000,    value: 69},
				{cost: 4000,    value: 79},
				{cost: 1000000, value: 0},
			],
			copart3:59,
			copart4:30
		},
		computed: {
			costInsurance: function() {
				return (this.wayInsurance) ? this.takeCostInsurance() : 0
			},
			suma: function() {
				return (this.locAuto).toFixed(2)
			},
			excise: function() {
				return (this.typeAuto == 1) ? this.takeExcisePassenger() : this.takeExciseTruck()
			},			
			duty: function() {
				if (this.engineType == 3) return 0
				let dr = (Number(this.autoPrice) + Number(this.auctionCommission)+ Number(this.seaFreight))
				return (this.typeAuto == 1) ? (dr * 10 / 100).toFixed(2) : (dr * 5 / 100).toFixed(2)
			},
			vat: function() {
				return (this.engineType == 3) ? 0 :((Number(this.autoPrice) + Number(this.auctionCommission) + Number(this.seaFreight) + Number(this.duty) + Number(this.excise)) * 20 / 100).toFixed(2)
			},
			selfService: function() {
				return this.autoPrice < 10000 ? 700 : 1000
			},
			auctionCommission: function() {
				return (this.autoPrice > 0) ? this.autoComis() : 0
			},
			total: function() {
				return (Number(this.autoPrice)     + Number(this.auctionCommission) + Number(this.priceToPort)
				     + Number(this.aviaPost)       + Number(this.seaFreight)        + Number(this.costOnePlaceInConteiner)
				     + Number(this.costInsurance)  + Number(this.excortToOdessa)    + Number(this.customsBroker)
				     + Number(this.duty)           + Number(this.excise)            + Number(this.vat)
				     + Number(this.deliveryToTown) + Number(this.selfService)       + Number(this.certification)).toFixed(2)
			}
		},
		methods: {
			takeExcisePassenger: function() {
				if (this.engineType == 1) { //Бензин
					return (this.engineСapacity < 3000) ? this.takeExcise(50) : this.takeExcise(100)
				}
				else if (this.engineType == 2) { //Дизель
					return (this.engineСapacity < 3500) ? this.takeExcise(75) : this.takeExcise(150)			
				}	
				else { // Электро
					return 0
				}
			},
			takeExciseTruck: function() {
				if (this.autoAges[this.autoAge-1].id < 6) { //  >2015p
					return this.takeTruck(1)
				}
				else if (this.autoAges[this.autoAge-1].id < 9) { //  >2012p
					return this.takeTruck(40)
				}
				else {
					return this.takeTruck(50)
				}
			},
			autoComis: function() {
				if (this.auction == 1) {  // Copart
					let cop1 = (this.autoPrice > 34999) ? this.autoPrice * 0.02 : this.takeCommision(this.Copart1)
					return Number(cop1) + this.takeCommision(this.Copart2) + this.copart3 + this.copart4
				}
				else{  //IAAI			
					let ia1 = this.takeCommision(this.IAAI1)
					ia1     = (this.autoPrice > 4999) ? ia1 += (Number(this.autoPrice)*0.01) : ia1
					return ia1 + this.takeCommision(this.IAAI2)					
				}
			},
			takeCostInsurance: function() {
				let costIns = this.autoPrice * this.pcInsurance / 100
				return (costIns < 75 ) ? 75 :  costIns
			},
			takeTruck: function(k) {
				return Number((0.02*1.14*this.engineСapacity * k)).toFixed(2)
			},
			takeExcise: function(k) {
				return Number((k*1.14*(this.engineСapacity/1000) * this.autoAges[this.autoAge-1].koef)).toFixed(2)
			},
			takeCommision: function(cost) {
				for (let i = 1 ; i < cost.length; i++) {
					if (this.autoPrice < cost[i].cost) {
						return Number(cost[i-1].value)						
					}
				}
				return Number(cost[cost.length-1].value	)		
			},
			takeSeaFreight: function(locationA) {
				for (let i = 0 ; i < this.ports.length; i++) {
					if (this.locationAuto[locationA - 1].port === this.ports[i].port) {
						return Number(this.ports[i].seaFreight)						
					}
				}
			}
		},
		watch: {
			locAuto: function() {
				this.stateFrom   = this.locationAuto[this.locAuto - 1].name
				this.portTo      = this.locationAuto[this.locAuto - 1].port
				this.priceToPort = this.locationAuto[this.locAuto - 1].price
				this.seaFreight  = this.takeSeaFreight(this.locAuto)
			},
			typeAuto: function() {
				this.costOnePlaceInConteiner = this.typeAuto == 1 ? 600 : 700
			},
			deliveryInUkraine: function() {
				this.deliveryToTown = this.towns[this.deliveryInUkraine - 1].value
			}	
		},
		created: function() {
			this.locAuto           = this.locationAuto[0].id
			this.typeAuto          = this.typesOfAuto[0].value
			this.engineType        = this.engineTypes[0].value
			this.auction           = this.typesOfAuction[0].value
			this.wayInsurance      = this.typesOfWayInsurance[0].value
			this.autoAge           = this.autoAges[0].id
			this.customsBroker     = this.brokers[0].value
			this.deliveryInUkraine = this.towns[5].id
			this.certification     = this.certifications[0].value
		}
})
})( jQuery )