// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

//factory function that returns an object
const pAequorFactory =(n, arr)=>
{
  return{

    specimenNum: n,
    
    dna: arr,

    //mutate method
    mutate(){

      //pick randomly a base from dna
      let i = Math.floor(Math.random()*15);
      let oldBase = this.dna[i];

      //pick ranomly a new base
      let newBase = returnRandBase();
      
      //if new base is not the same as old base, replace old base for new base in dna and return new dna
      if(newBase !== oldBase){
        oldBase = newBase;
        this.dna.splice(i, 1, oldBase);
        return this.dna;
      }

      //if new base is the same as old base, start mutate () again
      else{
        this.mutate();
        return this.dna;
      }
      },


      //compare method
      compareDNA (pAequor2){
        
        //get current pAequor's dna
        let currentDNA = this.dna;

        //get new pAequor's dna
        let newDNA = pAequor2.dna;

        //Create common strang and push common bases inside
         let commonStrang = [];
        for (let i=0; i<currentDNA.length; i++){
          if (currentDNA[i]===newDNA[i]){
            let commenBase=currentDNA[i];
            commonStrang.push(currentDNA[i]);
          }}
        
          //get length of commonStrang
          let l=commonStrang.length;

          //calculate percentage
          let a = (l/currentDNA.length)*100;

          //round
          let p=a.toFixed(0);

        //get specimen Numbers
          let specimen1=this.specimenNum;
          let specimen2=pAequor2.specimenNum;

          
          //return message
          return console.log(`Specimen #${specimen1} and specimen #${specimen2} have ${p}% DNA in common.`);
        },

        //willLikelySurvive method
          willLikelySurvive(){

            //get object's DNA
            let dnaToTest = this.dna;
            
            //get a strang with all C and G bases
            let cOrGStrang = [];
            for (let i=0; i<dnaToTest.length; i++){
              if(dnaToTest[i] ==='C' || dnaToTest[i] ==='G'){
                cOrGStrang.push(dnaToTest[i]);
              }
            }
           
            //get length of CorG strang and calculate percentage
            let lCOrG = cOrGStrang.length;
            let percentCOrG = lCOrG / dnaToTest.length *100;
            let finalpercentCOrG = percentCOrG.toFixed(0);
            
            //return true if percent is at least 60%
            if (finalpercentCOrG >= 60){
              return true;
            }
            else{
              return false;
            }
          }
        }
      }
  

/*test mutate()
let pAequor1 =pAequorFactory(1, mockUpStrand());
console.log(pAequor1.dna);
console.log(pAequor1.mutate());*/

/*test compare()
let pAequor2 = pAequorFactory (2, mockUpStrand());
pAequor1.compareDNA(pAequor2);*/

/*test willLikelySurvive
console.log(pAequor1.willLikelySurvive());*/


//Create 30 instances that can survive
// create empty array
let thirtypAequors = [];

// keep filling empty array with pAequors who survive as long as array length is under 30
let i = 1;
while (thirtypAequors.length <30){
if (pAequorFactory(i, mockUpStrand()).willLikelySurvive()){
    thirtypAequors.push(pAequorFactory(i, mockUpStrand()));
    i++
  }
}

console.log(thirtypAequors);






