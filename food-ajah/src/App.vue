<script>
import image1 from './assets/dishes/image1.png'
import image2 from './assets/dishes/image2.png'
import image3 from './assets/dishes/image3.png'
import image4 from './assets/dishes/image4.png'
import image5 from './assets/dishes/image5.png'

export default {
  data() {
    return {
      images: [ image3, image4, image5, image1, image2, image3, image1, image2 ],
      txt: [
        { price: "Rp 45.000", title: 'Salad Ayam kacang Tahu', desc: "Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Quod Consectetur Odio Ducimus Laboriosam Vero Dolores?" },
        { price: "Rp 23.000", title: 'Salad Timun Dan Udang Segar', desc: "Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Quod Consectetur Odio Ducimus Laboriosam Vero Dolores?" },
        { price: "Rp 43.000", title: 'Dada Ayam Daun Selada', desc: "Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Quod Consectetur Odio Ducimus Laboriosam Vero Dolores?" },
        { price: "Rp 43.000", title: 'Fruity Cress Salad', desc: "Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Quod Consectetur Odio Ducimus Laboriosam Vero Dolores?" },
        { price: "Rp 43.000", title: 'Stuffed Pasta', desc: "Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Quod Consectetur Odio Ducimus Laboriosam Vero Dolores?" },
        { price: "Rp 45.000", title: 'Salad Ayam kacang Tahu', desc: "Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Quod Consectetur Odio Ducimus Laboriosam Vero Dolores?" },
        { price: "Rp 23.000", title: 'Salad Timun Dan Udang Segar', desc: "Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Quod Consectetur Odio Ducimus Laboriosam Vero Dolores?" },
        { price: "Rp 43.000", title: 'Dada Ayam Daun Selada', desc: "Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Quod Consectetur Odio Ducimus Laboriosam Vero Dolores?" }
      ],
      idx: 0,
      lim: 7,
      degrees: 0,
    } 
  },
  methods: {
    decrease() {
      this.idx++;
      this.degrees = this.degrees - 45;
      if (this.idx > this.lim) this.idx = 0;
      console.log(this.idx);
    },
    increase(){
      this.idx--;
      this.degrees = this.degrees + 45;
      if (this.idx < 0) this.idx = this.lim;
      console.log(this.idx);
    },
    imgSource() {
      if(this.idx === 0) return image1
      else if(this.idx === 1) return image2
      else if(this.idx === 2) return image3
      else if(this.idx === 3) return image4
      else if(this.idx === 4) return image5
      else if(this.idx === 5) return image1
      else if(this.idx === 6) return image2
      else if(this.idx === 7) return image3
    }
  },
}
</script>


<template>
  <div class="bg-white flex flex-row justify-center w-full">
      <div class="bg-white w-screen overflow-hidden h-screen relative">
        <div class="absolute w-screen h-screen top-[-645px] left-[100px] 2xl:top-[-645px] 2xl:left-[100px]">
          <div class="absolute w-screen h-screen top-0 left-0">
            <div class="absolute w-[1200px] h-[1200px] 2xl:w-[1500px] 2xl:h-[1500px] overflow-hidden top-[-50px] left-[200px] 2xl:top-[-260px] 2xl:left-[300px] bg-[#ffedde] rounded-full">
              <div class="absolute w-[525px] h-[525px] top-[900px] right-[370px] 2xl:w-[625px] 2xl:h-[625px] 2xl:top-[1108px] 2xl:right-[470px] rounds rounded-full 2xl:rounded-[750px] border-2 border-dashed border-[#e77f1d]" :style="{ transform: `rotate(${degrees}deg)` }" id="circle">
                <div class="absolute w-[515px] h-[470px] 2xl:w-[625px] 2xl:h-[625px] flex justify-center items-center">
                  <div v-for="(image, index) in images" :key="index" class="absolute w-[100px] h-[100px] 2xl:w-[110px] 2xl:h-[110px]" :style="{ transform: `rotate(${index * (360 / images.length)}deg) translate(250px) rotate(${index * -(360 / images.length)}deg)` }">
                    <img :src="image" class="w-full h-full object-cover rounded-full rotate-[25deg]" :alt="'Image ' + (index + 1)" />
                  </div>
                </div>
              </div>
            </div>
            <transition 
              enter-active-class="animate-scale-in"
              leave-active-class="animate-scale-out"
            >
              <div :key="idx" class="absolute w-[289px] h-[295px] top-[1010px] right-[430px] 2xl:w-[289px] 2xl:h-[295px] 2xl:top-[1060px] 2xl:right-[570px]">
                <div>
                  <img :src="imgSource()" class="h-[260px] w-[260px] 2xl:h-[279px] 2xl:w-[279px] rounded-full rotate-[-10deg]"/>
                </div>
              </div>
            </transition>

            <transition 
              enter-active-class="animate-appear"
              leave-active-class="animate-disappear"
            >
              <div :key="idx" class="absolute w-[440px] h-[238px] top-[900px] left-[-50px] 2xl:w-[440px] 2xl:h-[238px] 2xl:top-[931px] 2xl:left-0">
                <div class="absolute 2xl:h-[66px] 2xl:top-0 2xl:left-0 [font-family:'Poppins-SemiBold',Helvetica] font-semibold text-[#ff912b] 2xl:text-[55px] text-[45px] tracking-[0] leading-[normal]">
                  {{ txt[idx].price }}
                </div>
                <div class="absolute mt-1 w-[350px] h-[100px] top-[66px] left-0 2xl:mt-3 2xl:w-[367px] 2xl:h-[100px] 2xl:top-[66px] 2xl:left-0 [font-family:'Poppins-Medium',Helvetica] font-medium text-[#333333] 2xl:text-[46px] text-[40px] tracking-[0] leading-[50px]">
                  {{ txt[idx].title }}
                </div>
                <p class="absolute mt-4 w-[400px] h-[80px] top-[178px] left-0 2xl:mt-7 2xl:w-[400px] 2xl:h-[80px] 2xl:top-[178px] 2xl:left-0 [font-family:'Poppins-Regular',Helvetica] font-normal text-[#333333] 2xl:text-[16px] tracking-[0] leading-[normal]">
                  {{txt[idx].desc }}
                </p>
              </div>
            </transition>
            <div class="absolute w-screen h-[20px] top-[672px] left-0 2xl:h-[27px] 2xl:top-[692px] 2xl:left-0">
              <div class="absolute w-[380px] h-[21px] top-[5px] left-[400px] 2xl:w-[400px] 2xl:h-[21px] 2xl:top-[5px] 2xl:left-[400px]">
                <div class="absolute h-[21px] top-0 left-0 2xl:h-[21px] 2xl:top-0 2xl:left-0 [font-family:'Poppins-Medium',Helvetica] font-medium text-[#333333] 2xl:text-[18px] tracking-[0] leading-[normal]">
                  Sarapan
                </div>
                <div class="left-[127px] 2xl:left-[127px] absolute h-[21px] top-0 2xl:h-[21px] 2xl:top-0 [font-family:'Poppins-Medium',Helvetica] font-medium text-[#333333] 2xl:text-[18px] tracking-[0] leading-[normal]">
                  Makan Siang
                </div>
                <div class="left-[265px] 2xl:left-[265px] absolute h-[21px] top-0 2xl:h-[21px] 2xl:top-0 [font-family:'Poppins-Medium',Helvetica] font-medium text-[#333333] 2xl:text-[18px] tracking-[0] leading-[normal]">
                  Makan Malam
                </div>
              </div>
              <div class="absolute w-[20px] h-[22px] top-[4px] right-[300px] 2xl:w-[20px] 2xl:h-[22px] 2xl:top-[4px] 2xl:right-[300px]">
                <div class="relative h-[22px] 2xl:h-[22px]">
                  <font-awesome-icon icon="bag-shopping" size="xl" style="color: #000000;" />
                  <div class=" absolute w-[6px] h-[6px] top-[16px] left-[14px] 2xl:w-[6px] 2xl:h-[6px] 2xl:top-[16px] 2xl:left-[14px] bg-[#ff912b] rounded-[3px]" />
                </div>
              </div>
              <div class="absolute w-[180px] h-[27px] top-0 left-[-50px] 2xl:w-[180px] 2xl:h-[27px] 2xl:top-0 2xl:left-0">
                <div class="relative w-[180px] h-[27px] 2xl:w-[180px] 2xl:h-[27px]">
                  <div class="absolute h-[27px] top-0 left-0 2xl:h-[27px] 2xl:top-0 2xl:left-0 [font-family:'Poppins-Bold',Helvetica] font-bold text-[#333333] text-[23px] tracking-[0] leading-[normal]">
                    Food Ajah
                  </div>
                  <!-- <img class="absolute w-[6px] h-[10px] top-[10px] left-[5px]" alt="Ellipse" src="ellipse-7.svg" /> -->
                </div>
              </div>
            </div>
          </div>
          <div class="absolute w-[165px] h-[48px] top-[1197px] left-0 2xl:w-[165px] 2xl:h-[48px] 2xl:top-[1197px] 2xl:left-0">
            <div class="relative cursor-pointer w-[163px] h-[48px] 2xl:w-[163px] 2xl:h-[48px] bg-[#ff912b] rounded-[69px] 2xl:rounded-[69px] shadow-[0px_20px_40px_#f4e1d0] 2xl:mt-8">
              <div class="absolute w-[10px] h-[2px] top-[24px] left-[153px] rounded-[69px] 2xl:w-[10px] 2xl:h-[2px] 2xl:top-[24px] 2xl:left-[153px] 2xl:rounded-[69px] shadow-[0px_20px_40px_#f4e1d0]" />
              <div class="absolute h-[20px] top-[14px] left-[32px] 2xl:h-[20px] 2xl:top-[14px] 2xl:left-[32px] [font-family:'Poppins-Bold',Helvetica] font-bold text-white 2xl:text-[15px] tracking-[0] leading-[normal]">
                Beli Sekarang
              </div>
            </div>
          </div>
          <div>
            <div @click="decrease" class="cursor-pointer absolute w-[45px] h-[45px] top-[1300px] right-[257px] 2xl:w-[45px] 2xl:h-[45px] 2xl:top-[1300px] 2xl:right-[387px] bg-[#ff912b] rounded-full shadow-[0px_10px_20px_#f5ebe3]">
              <div class="ml-3 mt-3 2xl:ml-3 2xl:mt-3">
                <font-awesome-icon icon="fa-solid fa-arrow-right" size="lg" style="color: #ffffff;" />
              </div>
            </div>
            <div @click="increase" class=" cursor-pointer absolute w-[45px] h-[45px] top-[1300px] left-[457px] 2xl:w-[45px] 2xl:h-[45px] 2xl:top-[1300px] 2xl:left-[700px] bg-[#ff912b] rounded-full shadow-[0px_10px_20px_#f5ebe3]">
              <div class="ml-3 mt-3 2xl:ml-3 2xl:mt-3">
                <font-awesome-icon icon="fa-solid fa-arrow-left" size="lg" style="color: #ffffff;" />
              </div>
            </div>
          </div>
        </div>
        <div class="absolute h-[20px] top-[741px] left-[100px] 2xl:h-[20px] 2xl:top-[741px] 2xl:left-[100px] [text-shadow:0px_4px_4px_#00000040] [-webkit-text-stroke:1px_#000000] [font-family:'Poppins-Regular',Helvetica] font-normal text-black 2xl:text-[13.2px] tracking-[0] leading-[normal]">
          Butuh Menu Lain?
        </div>
      </div>
    </div>
</template>

<style>
.rounds {
  transition: transform 0.5s ease;
}
</style>