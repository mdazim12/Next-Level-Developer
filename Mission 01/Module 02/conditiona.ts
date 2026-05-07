// conditional Type L je type condiation er opur depend kore

type A = null;
type B = undefined

type c = A extends number  ? true : B extends undefined?  true: false ; 

type RichPepoleVehicle = {
    bike : string;
    car : string;
    ship : string;
}


type CheckVehicles<T> = T extends keyof RichPepoleVehicle ? true : false;


type HasBike = CheckVehicles<'teuck'>;