const lenis = new Lenis()

lenis.on('scroll', (e) => {
  console.log(e)
})

lenis.on('scroll', ScrollTrigger.update)

gsap.ticker.add((time)=>{
  lenis.raf(time * 100000000)
})

gsap.ticker.lagSmoothing(0)


document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(ScrollTrigger);
  gsap.registerPlugin(MotionPathPlugin) 

  // 为 pin 创建独立的 ScrollTrigger
  ScrollTrigger.create({
    trigger: "#opening_box",
    start: "center 55%",
    end: "bottom 30%",
    pin: true,
    scrub: true,
    pinSpacing: false 
    //markers: true,
  });
  
  //run time line
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: "#mean1999", // 触发动画的元素
      start: "top 50%", // 开始触发位置
      end: "bottom 20%", // 结束触发位置
      scrub: 2, // 平滑动画
      //markers: true, // 显示调试标记
    },
  })

  tl.to("#Layer_1", {
    duration: 3, // 动画持续时间
    motionPath: {
      path: "#path1", // 动画的 SVG 路径
      align: "#path1", // 对齐路径
      autoRotate: true, // 自动旋转以保持方向
      alignOrigin: [0.5, 0.5], // 对齐原点
    },
  },
  0);

  tl.to("#Layer_2",{
    duration: 3, // 动画持续时间
    motionPath: {
      path: "#path2", // 动画的 SVG 路径
      align: "#path2", // 对齐路径
      autoRotate: true, // 自动旋转以保持方向
      alignOrigin: [0.5, 0.5], // 对齐原点
    },
  },
  0);

  tl.to("#Layer_3",{
    duration: 3, // 动画持续时间
    motionPath: {
      path: "#path3", // 动画的 SVG 路径
      align: "#path3", // 对齐路径
      autoRotate: true, // 自动旋转以保持方向
      alignOrigin: [0.5, 0.5], // 对齐原点
    },
  },
  0);

  tl.to("#Layer_4",{
    duration: 3, // 动画持续时间
    motionPath: {
      path: "#path4", // 动画的 SVG 路径
      align: "#path4", // 对齐路径
      autoRotate: true, // 自动旋转以保持方向
      alignOrigin: [0.5, 0.5], // 对齐原点
    },
  },
  0);

  tl.to("#Layer_5",{
    duration: 3, // 动画持续时间
    motionPath: {
      path: "#path5", // 动画的 SVG 路径
      align: "#path5", // 对齐路径
      autoRotate: true, // 自动旋转以保持方向
      alignOrigin: [0.5, 0.5], // 对齐原点
    },
  },
  0);


  tl.to(".cls-1",{
    toggleClass: "visible",
    duration: 8, // Duration of the animation
    opacity: 1, // Change opacity to reveal the element
  })

  tl.to(".cls-19",{
    toggleClass: "visible",
    duration: 8, // Duration of the animation
    opacity: 1, // Change opacity to reveal the element
  })

  tl.to(
    ["#Layer_1", "#Layer_2", "#Layer_3", "#Layer_4", "#Layer_5"], // 添加多个元素
    {
      duration: 15, // 持续时间
      opacity: 0, // 目标透明度
    },
    // 时间轴上的位置，负值表示提前1秒
  );

  tl.to("#visualization",
    {
      toggleClass: "visible",
      duration: 8, // 持续时间
      opacity: 0.60, // 目标透明度
    },
    // 时间轴上的位置，负值表示提前1秒
  );




  //girl
  // 为 pin 创建独立的 ScrollTrigger
  ScrollTrigger.create({
    trigger: "#girl_9minute_trigger",
    start: "center 55%",
    end: "bottom 30%",
    pin: true,
    scrub: true,
    //markers: true,
    pinSpacing: false 
  });
  
  //run time line
  let tl2 = gsap.timeline({
    scrollTrigger: {
      trigger: "#girl_9minute_trigger", // 触发动画的元素
      start: "40% 50%", // 开始触发位置
      end: "80% 20%", // 结束触发位置
      scrub: 2, // 平滑动画
      //markers: true, // 显示调试标记
    },
  })

  tl2.to("#girl_run", {
    duration: 3, // 动画持续时间
    motionPath: {
      path: "#path1g", // 动画的 SVG 路径
      align: "#path1g", // 对齐路径
      autoRotate: true, // 自动旋转以保持方向
      alignOrigin: [0.5, 0.5], // 对齐原点
    },
  },
  0);

  tl2.to("#girl_run2",{
    duration: 3, // 动画持续时间
    motionPath: {
      path: "#path2g", // 动画的 SVG 路径
      align: "#path2g", // 对齐路径
      autoRotate: true, // 自动旋转以保持方向
      alignOrigin: [0.5, 0.5], // 对齐原点
    },
  },
  0);

  tl2.to("#girl_run3",{
    duration: 3, // 动画持续时间
    motionPath: {
      path: "#path3g", // 动画的 SVG 路径
      align: "#path3g", // 对齐路径
      autoRotate: true, // 自动旋转以保持方向
      alignOrigin: [0.5, 0.5], // 对齐原点
    },
  },
  0);

  tl2.to("#girl_run4",{
    duration: 3, // 动画持续时间
    motionPath: {
      path: "#path4g", // 动画的 SVG 路径
      align: "#path4g", // 对齐路径
      autoRotate: true, // 自动旋转以保持方向
      alignOrigin: [0.5, 0.5], // 对齐原点
    },
  },
  0);

  tl2.to("#girl_run5",{
    duration: 3, // 动画持续时间
    motionPath: {
      path: "#path5g", // 动画的 SVG 路径
      align: "#path5g", // 对齐路径
      autoRotate: true, // 自动旋转以保持方向
      alignOrigin: [0.5, 0.5], // 对齐原点
    },
  },
  0);

  tl2.to(".mean_girl_9minute",{
    toggleClass: "visible",
    duration: 0.5, // Duration of the animation
    opacity: 1, // Change opacity to reveal the element
  })

  tl2.to(".girl_9minute_text",{
    toggleClass: "visible",
    duration: 0.5, // Duration of the animation
    opacity: 1, // Change opacity to reveal the element
  })

  tl2.to(
    ["#girl_run", "#girl_run2", "#girl_run3", "#girl_run4", "#girl_run5"], // 添加多个元素
    {
      duration: 1, // 持续时间
      opacity: 0, // 目标透明度
    },
    // 时间轴上的位置，负值表示提前1秒
  );

  tl2.to("#visualization-2",
    {
      toggleClass: "visible",
      duration: 2, // 持续时间
      opacity: 0.80, // 目标透明度
    },
    // 时间轴上的位置，负值表示提前1秒
  );

 
  //radar chart HK
  ScrollTrigger.create({
  trigger: "#gchk",
  start: "20% 55%",
  end: "50% 30%",
  toggleClass: {targets: "#School2", className: "visi"},
  scrub: true,
  //markers: true,
  });

  //exercise minute
  ScrollTrigger.create({
  trigger: "#exercise_minutes",
  start: "center 55%",
  end: "90% 1%",
  pin: true,
  scrub: true,
  pinSpacing: false, 
  markers: true,
  });

  
  
});

  











  
