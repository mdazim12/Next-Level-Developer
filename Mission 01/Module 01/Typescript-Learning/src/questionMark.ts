
    ///   ? : ternary opearator : decision making
    /// ??  : nullish coalescing opreator : null | undifined
    /// ?. optional chaining




    const biyerJonnoEligible = (age : number) => {

    //     if(age >= 21) {
    //     console.log ('you are eligible')
    // } else{
    //     console.log('you are not eligible')
    // }


    const result = age >= 21 ? 'you are eligible' : 'you are not eligible';     //ternary opearator
    
    // console.log(result)

    }

    biyerJonnoEligible(25)


    const userTheme = null;

    const selectedTheme = userTheme ?? 'Light Theme'

    // console.log(selectedTheme)


    const isAuthenticated = " ";

    const resultWithTernary = isAuthenticated ? isAuthenticated : 'you are guest';

    const resultWithNulish = isAuthenticated ??  'you are guest';

    console.log({resultWithNulish}, {resultWithNulish});



    /// optional chaining

    const user : {
        address : {
            city : string;
            town : string;
            postalCode? : string;
        }
    } = {
        address : {
            city : 'Dhaka',
            town : 'Banani',
            
        }
    };


    const postalCode = user?.address?.postalCode

    console.log(postalCode);



