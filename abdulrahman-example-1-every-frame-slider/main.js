const {
    styler,
    everyFrame,
    inertia,
    listen,
    pointer,
    value,
    calc
  } = window.popmotion;
  
  const container = document.querySelector(".balls");
  
  var nodes = container.childNodes;
  var i = nodes.length;
  while (i--) if (nodes[i].nodeType == 3) container.removeChild(nodes[i]);
  
  const ballStylers = Array.from(nodes).map(styler);
  
  var distance = -30;
  
  everyFrame().start(timestamp =>
    ballStylers.map((thisStyler, i) => {
      thisStyler.set("y", distance * Math.sin(0.004 + i * 0.5) + 200);
      thisStyler.set("x", 70);
    })
  );
  
  // new things
  
  const mix = calc.getValueFromProgress;
  
  const boundaries = document.querySelector(".carousel");
  const box = document.querySelector(".item");
  const getBoundariesWidth = () =>
    boundaries.getBoundingClientRect().width - box.getBoundingClientRect().width;
  
  const divStyler = styler(box);
  const boxX = value(0, v => divStyler.set("x", v));
  
  listen(box, "mousedown touchstart").start(() => {
    const max = getBoundariesWidth();
    const tug = 0.2;
  
    const applyOverdrag = v => {
      let smilie = (v / max) * 100;
      if (smilie < 60 && smilie > -20) distance = (v / max) * 100 - 20;
  
      if (v < 0) return mix(0, v, tug);
      if (v > max / 2) return mix(max, v, tug);
  
      return v;
    };
  
    pointer({ x: boxX.get() })
      .pipe(({ x }) => x, applyOverdrag)
      .start(boxX);
  });
  
  listen(document, "mouseup touchend").start(() => {
    inertia({
      min: 0,
      max: getBoundariesWidth(),
      from: boxX.get() - 100,
      velocity: boxX.getVelocity(),
      power: 0.6,
      bounceStiffness: 400,
      bounceDamping: 20
    }).start(boxX);
  });
  