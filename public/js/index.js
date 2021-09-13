const Offer = {
    data() {
      return {
        "offer":[
            {
                "id": 1,
                "name": "Joe Doe",
                "salary": 72000,
                "bonus": 5000,
                "company": "KMPG",
                "offerDate": "2021-09-13"
            },
    
            {
                "id": 2,
                "name": "Jack French",
                "salary": 90000,
                "bonus": 10000,
                "company": "PWC",
                "offerDate": "2021-09-01"
            },
    
            {
                "id": 3,
                "name": "Shane Efram",
                "salary": 85000,
                "bonus": 9000,
                "company": "EY",
                "offerDate": "2021-09-08"
            }
        ]
      }
    }
  }
  
  Vue.createApp(Offer).mount('#offerApp')