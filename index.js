const {parse} = require("csv-parse")
const fs = require('fs')
const habitablePlanets =[]
// parse()

function isHabitablePlanet(planet){
return planet['koi_disposition'] ==="CONFIRMED" && planet['koi_insol'
]>0.36 && planet['koi_insol']<1.11 && planet['koi_prad'] <1.6
}
fs.createReadStream('kepler_data.csv')
.pipe(parse())
.on('data',(data)=>{

    if(isHabitablePlanet(data)){
   return console.log("done")
    }
})
.on('error',(err)=>{
    console.log(err)
})
.on('end',()=>{
    // console.log(habitablePlanets.length)
    console.log("done")
})
