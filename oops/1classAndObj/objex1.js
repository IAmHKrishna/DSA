let CarObj = {
    carName: "Maruti Swift",
    carColor: "White",
    carModel: "2019",
    carPrice: 500000,
    carBrand: "Maruti",
    purchaseDate: "2020-01-01",
    addFunc:(obj)=>{
        console.log(obj,this,"addFunc");
    },
    carDetails: function () {
        console.log(this.carName, this.carColor, this.carModel, this.carPrice);
    },
    carColorChange: function (color) {
        this.carColor = color;
    },
    getDateDiffFromNow: function () {
        let date1 = new Date(this.purchaseDate);
        let date2 = new Date();
        let diffTime = Math.abs(date2 - date1);
        let diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        console.log(diffDays);
        return diffDays
    },
    carDepreciationPrice: function () {
        const dep = (this.carPrice * 10) / 100;
        this.carPrice = this.carPrice - dep;
    },
    carIncrementPrice: function () {
        const inc = (this.carPrice * 5) / 100;
        this.carPrice = this.carPrice + inc;
    },
    carIncrementPriceByYear: function (year) {
        for (let i = 0; i < year; i++) {
            const inc = (this.carPrice * 5) / 100;
            this.carPrice = this.carPrice + inc;
        }
    }
}

CarObj.addFunc();