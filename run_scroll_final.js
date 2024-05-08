


document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(ScrollTrigger);
  gsap.registerPlugin(MotionPathPlugin) 

  // 为 pin 创建独立的 ScrollTrigger
  ScrollTrigger.create({
    trigger: "#opening_box",
    start: "center 50%",
    end: "bottom 10%",
    pin: true,
    scrub: true,
    pinSpacing: true, 
    //markers: true,
  });
  
  //run time line
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: "#opening_box", // 触发动画的元素
      start: "45% 50%", // 开始触发位置
      end: "bottom 10%", // 结束触发位置
      scrub: 2, // 平滑动画
      //markers: true, // 显示调试标记
    },
  })

  tl.to("#BOYY1", {
    duration: 5, // 动画持续时间
    motionPath: {
      path: "#path1", // 动画的 SVG 路径
      align: "#path1", // 对齐路径
      autoRotate: true, // 自动旋转以保持方向
      alignOrigin: [0.5, 0.5], // 对齐原点
    },
  },
  0);

  tl.to("#BOYY2",{
    duration: 5, // 动画持续时间
    motionPath: {
      path: "#path2", // 动画的 SVG 路径
      align: "#path2", // 对齐路径
      autoRotate: true, // 自动旋转以保持方向
      alignOrigin: [0.5, 0.5], // 对齐原点
    },
  },
  0);

  tl.to("#BOYY3",{
    duration: 5, // 动画持续时间
    motionPath: {
      path: "#path3", // 动画的 SVG 路径
      align: "#path3", // 对齐路径
      autoRotate: true, // 自动旋转以保持方向
      alignOrigin: [0.5, 0.5], // 对齐原点
    },
  },
  0);

  tl.to("#BOYY4",{
    duration: 5, // 动画持续时间
    motionPath: {
      path: "#path4", // 动画的 SVG 路径
      align: "#path4", // 对齐路径
      autoRotate: true, // 自动旋转以保持方向
      alignOrigin: [0.5, 0.5], // 对齐原点
    },
  },
  0);

  tl.to("#BOYY5",{
    duration: 5, // 动画持续时间
    motionPath: {
      path: "#path5", // 动画的 SVG 路径
      align: "#path5", // 对齐路径
      autoRotate: true, // 自动旋转以保持方向
      alignOrigin: [0.5, 0.5], // 对齐原点
    },
  },
  0);


  tl.to("#endpoints",{
    toggleClass: "visi",
    duration: 3, // Duration of the animation
    opacity: 1, // Change opacity to reveal the element
  })

  tl.to("#endpointnote",{
    toggleClass: "visi",
    duration: 3, // Duration of the animation
    opacity: 1, // Change opacity to reveal the element
  })


  tl.to("#GAppp",
    {
      toggleClass: "visi",
      duration: 3, // 持续时间
      opacity: 1, // 目标透明度
    },
    // 时间轴上的位置，负值表示提前1秒
  );




  //girl
  // 为 pin 创建独立的 ScrollTrigger
  ScrollTrigger.create({
    trigger: "#girlnew",
    start: "45% 50%",
    end: "bottom 30%",
    pin: true,
    scrub: true,
    //markers: true,
    pinSpacing: true 
  });
  
  //run time line
  let tl2 = gsap.timeline({
    scrollTrigger: {
      trigger: "#girlnew", // 触发动画的元素
      start: "45% 50%", // 开始触发位置
      end: "80% 20%", // 结束触发位置
      scrub: 2, // 平滑动画
      //markers: true, // 显示调试标记
    },
  })

  tl2.to("#GIRL1", {
    duration: 3, // 动画持续时间
    motionPath: {
      path: "#path1g", // 动画的 SVG 路径
      align: "#path1g", // 对齐路径
      autoRotate: true, // 自动旋转以保持方向
      alignOrigin: [0.5, 0.5], // 对齐原点
    },
  },
  0);

  tl2.to("#GIRL2",{
    duration: 3, // 动画持续时间
    motionPath: {
      path: "#path2g", // 动画的 SVG 路径
      align: "#path2g", // 对齐路径
      autoRotate: true, // 自动旋转以保持方向
      alignOrigin: [0.5, 0.5], // 对齐原点
    },
  },
  0);

  tl2.to("#GIRL3",{
    duration: 3, // 动画持续时间
    motionPath: {
      path: "#path3g", // 动画的 SVG 路径
      align: "#path3g", // 对齐路径
      autoRotate: true, // 自动旋转以保持方向
      alignOrigin: [0.5, 0.5], // 对齐原点
    },
  },
  0);

  tl2.to("#GIRL4",{
    duration: 3, // 动画持续时间
    motionPath: {
      path: "#path4g", // 动画的 SVG 路径
      align: "#path4g", // 对齐路径
      autoRotate: true, // 自动旋转以保持方向
      alignOrigin: [0.5, 0.5], // 对齐原点
    },
  },
  0);

  tl2.to("#GIRL5",{
    duration: 3, // 动画持续时间
    motionPath: {
      path: "#path5g", // 动画的 SVG 路径
      align: "#path5g", // 对齐路径
      autoRotate: true, // 自动旋转以保持方向
      alignOrigin: [0.5, 0.5], // 对齐原点
    },
  },
  0);

  tl2.to("#endpoints22",{
    toggleClass: "visi",
    duration: 3, // Duration of the animation
    opacity: 1, // Change opacity to reveal the element
  })

  tl2.to("#endpointnotex",{
    toggleClass: "visi",
    duration: 3, // Duration of the animation
    opacity: 1, // Change opacity to reveal the element
  })

  tl2.to("#GApppx",
    {
      toggleClass: "visi",
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
  start: "40% 50%",
  end: "bottom 5%",
  pin: true,
  scrub: true,
  pinSpacing: false, 
  //markers: true,
  });

  let tl3 = gsap.timeline({
    scrollTrigger: {
      trigger: "#exercise_minutes", // 触发动画的元素
      start: "40% 50%", // 开始触发位置
      end: "90% 15%", // 结束触发位置
      scrub: 2, // 平滑动画
      //markers: true, // 显示调试标记
    },
  });


  tl3.to("#highlightttttt",{
    toggleClass: "visi",
    duration: 3, // Duration of the animation
    opacity: 0.3, // Change opacity to reveal the element
  },
  0);

  tl3.to("#percentageee",{
    toggleClass: "visi",
    duration: 3, // Duration of the animation
    opacity: 1,
  },
  0);

  
  tl3.add(() => {
    const polygon = document.getElementById('1524arrow'); 
    polygon.classList.remove('emm26'); 
    polygon.classList.add('emm25');    
  }, "0"); 
  
  tl3.add(() => {
    const polygon = document.getElementById('1425dot'); 
    polygon.classList.remove('emm26'); 
    polygon.classList.add('emm24');    
  }, "0"); 

  
  gsap.to("#floatingboynew_text", {
  scrollTrigger: {
    trigger: "#floatingboynew_text",
    start: "top center",
    end: "bottom 30%",
    scrub: true,
    markers: true
  },
  opacity:0
});

  


  gsap.to("#CyrilEM", {
  scrollTrigger: {
    trigger: "#CyrilEM",
    start: "top center",
    end: "bottom top",
    scrub: true,
    markers: true
  },
  attr: { viewBox: "50 50 100 100" }, // 修改 viewBox 的值来"zoom in"
  ease: "none"
});




  
  
});

  











  
