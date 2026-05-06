


interface Develper <T,X = null> {
    name : string;
    salary : number;
    device : {
        brand : string;
        model : string;
        relasedYear : string;
    };
    smartWacth : T;
    bike? : X;
}


interface BrandCharaWacth  {
     heartRate : string;
     stopWacth : boolean;
}


interface appleWacth {
        heartRate : '200',
        callSupport : true,
        calculator : true,
        aiFeature : true,
}



    const poorDeveloper : Develper <BrandCharaWacth, {
        model : 'Yamaha',
        engineCapacity : '200cc'
    }> = {
        name : 'Mr. Poor',
        salary : 20,
        device : {
            brand : 'Lenobo',
            model : 'A21',
            relasedYear : '2010',

        },
        smartWacth : {
            heartRate : '200',
            stopWacth : true,
        }

    }


        const richDeveloper : Develper <appleWacth > = {
        name : 'Mr. Rich',
        salary : 100,
        device : {
            brand : 'HP',
            model : 'X314',
            relasedYear : '2050',

        },
        smartWacth : {
            heartRate : '200',
            callSupport : true,
            calculator : true,
            aiFeature : true,
        }

    }



    const add = (num1: number , num2: number = 0 ) => num1 + num2;

    add(2)
