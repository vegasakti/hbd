// trigger to play music in the background with sweetalert
window.addEventListener('load', () => {
    Swal.fire({
      title: 'Do you want to play music in the background?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes',
      cancelButtonText: 'No',
    }).then((result) => {
      if (result.isConfirmed) {
        document.querySelector('.song').play().catch(() => {});
      }
      animationTimeline();
    });
  });
  
  const animationTimeline = () => {
    const textBoxChars = document.getElementsByClassName("hbd-chatbox")[0];
    const hbd = document.getElementsByClassName("wish-hbd")[0];
  
    // Safe spanizer: avoids breaking <br>, <strong>, etc.
    textBoxChars.innerHTML = textBoxChars.innerHTML.replace(/([^<>])(?=[^<>]*(<|$))/g, '<span>$1</span>');
    hbd.innerHTML = `<span>${hbd.innerHTML.split("").join("</span><span>")}</span>`;
  
    const ideaTextTrans = {
      opacity: 0,
      y: -20,
      rotationX: 5,
      skewX: "15deg"
    };
    const ideaTextTransLeave = {
      opacity: 0,
      y: 20,
      rotationY: 5,
      skewX: "-15deg"
    };
  
    const tl = new TimelineMax();
  
    tl.to(".container", 0.6, { visibility: "visible" })
      .from(".one", 0.7, { opacity: 0, y: 10 })
      .from(".two", 0.4, { opacity: 0, y: 10 })
      .to(".one", 0.7, { opacity: 0, y: 10 }, "+=3.5")
      .to(".two", 0.7, { opacity: 0, y: 10 }, "-=1")
      .from(".three", 0.7, { opacity: 0, y: 10 })
      .to(".three", 0.7, { opacity: 0, y: 10 }, "+=3")
      .from(".four", 0.7, { scale: 0.2, opacity: 0 })
      .from(".fake-btn", 0.3, { scale: 0.2, opacity: 0 })
      .staggerTo(".hbd-chatbox span", 1.5, { visibility: "visible" }, 0.05)
      .to(".fake-btn", 0.1, { backgroundColor: "rgb(127, 206, 248)" }, "+=4")
      .to(".four", 1, { scale: 0.2, opacity: 0, y: -100, ease: Power1.easeInOut }, "+=1")
      .from(".idea-1", 0.7, ideaTextTrans)
      .to(".idea-1", 0.7, ideaTextTransLeave, "+=2.5")
      .from(".idea-2", 0.7, ideaTextTrans)
      .to(".idea-2", 0.7, ideaTextTransLeave, "+=2.5")
      .from(".idea-3", 0.7, ideaTextTrans)
      .to(".idea-3 strong", 0.5, { scale: 1.2, x: 10, backgroundColor: "rgb(21, 161, 237)", color: "#fff" })
      .to(".idea-3", 0.7, ideaTextTransLeave, "+=2.5")
      .from(".idea-4", 0.7, ideaTextTrans)
      .to(".idea-4", 0.7, ideaTextTransLeave, "+=2.5")
      .from(".idea-5", 0.7, { rotationX: 15, rotationZ: -10, skewY: "-5deg", y: 50, z: 10, opacity: 0 }, "+=1.5")
      .to(".idea-5 span", 0.7, { rotation: 90, x: 8 }, "+=1.4")
      .to(".idea-5", 0.7, { scale: 0.2, opacity: 0 }, "+=2")
      .staggerFrom(".idea-6 span", 0.8, { scale: 3, opacity: 0, rotation: 15, ease: Expo.easeOut }, 0.2)
      .staggerTo(".idea-6 span", 0.8, { scale: 3, opacity: 0, rotation: -15, ease: Expo.easeOut }, 0.2, "+=1.5")
      .staggerFromTo(".baloons img", 2.5, { opacity: 0.9, y: 1400 }, { opacity: 1, y: -1000 }, 0.2)
      .from(".profile-picture", 0.5, { scale: 3.5, opacity: 0, x: 25, y: -25, rotationZ: -45 }, "-=2")
      .from(".hat", 0.5, { x: -100, y: 350, rotation: -180, opacity: 0 })
      .staggerFrom(".wish-hbd span", 0.7, {
        opacity: 0, y: -50, rotation: 150, skewX: "30deg", ease: Elastic.easeOut.config(1, 0.5),
      }, 0.1)
      .staggerFromTo(".wish-hbd span", 0.7,
        { scale: 1.4, rotationY: 150 },
        { scale: 1, rotationY: 0, color: "#ff69b4", ease: Expo.easeOut },
        0.1, "party")
      .from(".wish h5", 0.5, { opacity: 0, y: 10, skewX: "-15deg" }, "party")
      .staggerTo(".eight svg", 1.5, { visibility: "visible", opacity: 0, scale: 80, repeat: 3, repeatDelay: 1.4 }, 0.3)
      .to(".six", 0.5, { opacity: 0, y: 30, zIndex: "-1" })
      .staggerFrom(".nine p", 1, ideaTextTrans, 1.2)
      .to(".last-smile", 0.5, { rotation: 90 }, "+=1");
  
    const replyBtn = document.getElementById("replay");
    replyBtn.addEventListener("click", () => {
      tl.restart();
    });
  };
  