  /*How we can keep the data in memory and how we can access that,
   on that basis data types are categorize into two types primitve and non primitive.*/


   // 1.Primitive

   /* 8 types : String(call by value),    
            Number,boolean,null,undefined,Symbol,BigInt.

    2.Refrence(Non Primitive)

      - Arrays,objects,Functions */

      const score = 100;
      const score1 = false; // we don't define lang in js.

      //JavaScript is a dynamically typed language.
    
      const isloogedIn = false;
      const outsideTemp = null;
      let useremail;

      const id = Symbol('123')
      const anotherid = Symbol('123')
      console.log(id === anotherid)

      const bigNumber  = 235665651n


      //Array,object,Funnctions
      
      const heros = ["Shaktiman","Nagaj"]
      let myobj = {
        name:"Prasad",
        age : 22,
      }

      const myfunction = function(){
        console.log("Hello");
      }
      console.log(typeof(bigNumber))

      // Null ka typeof se datatype object ata hai..
      


      





