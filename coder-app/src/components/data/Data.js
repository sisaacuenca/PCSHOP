import mouse from "../../img/mouse.jpg"
import teclado from "../../img/teclado.jpeg"
import cooler from "../../img/cooler.jpeg"
import celeron from "../../img/celeron.jpeg"
import placa from "../../img/gt1030.jpeg"
import monitor from "../../img/monitorlg.jpg"

const data = [
  {
    id: 1,
    nombre: "MOUSE GENIUS DX-110 USB",
    img: mouse,
    precio: 550,
    stock: 3,
    categoria: "Periferico"
  },
  {
    id: 2,
    nombre: "TECLADO LOGITECH K210 QWERTY ESPAÑOL LATAM",
    img: teclado,
    precio: 1400,
    stock: 1,
    categoria: "Periferico"
  },
  {
    id: 3,
    nombre: "COOLER CPU COOLER MASTER HYPER 212 PARA ZOCALO INTEL",
    img: cooler,
    precio: 7000,
    stock: 2,
    categoria:"Componente"
  },
  {
    id: 4,
    nombre: "PROCESADOR INTEL CELERON G5905 3.5GHz",
    img: celeron,
    precio: 6000,
    stock: 1,
    categoria: "Componente"
  },
  {
    id: 5,
    nombre: "NVIDIA ASUS GEFORCE GT1030",
    img: placa,
    precio: 15000,
    stock: 2,
    categoria: "Componente"
  },
  {
    id: 6,
    nombre: "MONITOR LG 20 PULGADAS VGA HDMI",
    img: monitor,
    precio: 30000,
    stock: 3,
    categoria: "Periferico"

  }
]
export const getItem = ()=>{
  return new Promise((res, rej) => {
  let condition = true
  if (condition) {
    setTimeout(() => {
      res(data)
    }, 2000);
  } else {
    rej(console.log("no hay datos"))
  }
})
}

export const getItemByCategory =(categoryId)=>{ 
  return new Promise((res,rej)=>{
  let condition =true
  if(condition){
    setTimeout(() => {
      res(data.filter(dat =>dat.categoria === categoryId))
    }, 2000)
  }else{
    rej(console.log("no data"))
  }
 })
}

export const getItemById =(id)=>{ 
  return new Promise((res,rej)=>{
  let condition =true
  if(condition){
    setTimeout(() => {
      res(data.find(dat =>dat.id === id))
    }, 2000)
  }else{
    rej(console.log("no data"))
  }
 })
}
