import { useState, useEffect } from "react";

export function preloadImages(srcs, cb) {
  let remaining = srcs.length;
  let count = 0;

  srcs.forEach(src => {
    const img = new Image;
    img.onload = function () {
      count += 1;
      cb(count);
    };
    img.onerror = function () {
      count += 1;
      cb(count);
    };
    img.src = src;
  })
}

export function usePreload() {
  const [allLoaded, setAllLoaded] = useState(false);
  const [progress, setProgress] = useState(0);

  const srcs = [
    '/works/00_1_B.jpg',
    '/works/00_2_B.png',
    '/works/1_1_B.jpg',
    "/works/2_1_W.png",
    "/works/2_1_W_reduced.png",
    '/works/3_2_W_reduced.png',
    '/works/3_3_W.jpeg',
    '/works/3_3_W_reduced.jpg',
    '/works/3_1_W.png',
    '/works/3_1_W_reduced.png',
    '/works/4_1_W.png',
    '/works/4_3_W.png',
    '/works/4_2_W.png',
    '/works/5_W.png',
    '/works/6_0_W.png',
    '/works/6_0_1_W.jpg',
    '/works/6_1_1_W.jpeg',
    '/works/6_1_2_W.png',
    '/works/6_1_2_W_small.png',
    '/works/6_2_1_W.jpeg',
    '/works/6_2_2_W.png',
    '/works/6_2_2_W_small.png',
    '/works/6_3_1_W.jpeg',
    '/works/6_3_2_W.png',
    '/works/6_3_2_W_small.png',
    '/works/7_3_B.jpg',
    '/works/7_2_B.png',
    '/works/7_0_B.jpg',
    '/works/7_1_B.jpg',
    '/works/8_1_B.jpeg',
    '/works/8_2_B.jpg',
    '/works/8_3_B.jpg',
    '/works/9_1_W.jpg',
    '/works/9_0_B.png',
    '/works/10_3_W.jpg',
    '/works/10_2_W.jpg',
    '/works/10_1_W.png',
    '/works/10_1_W_small.png',
    '/works/11_2_B.jpg',
    '/works/11_1_B.jpg',
    '/works/12_4_W.jpg',
    '/works/12_3_W.png',
    '/works/12_3_W_small.png',
    '/works/12_0_W.jpg',
    '/works/12_2_W.jpg',
    '/works/12_1_W.png',
    '/works/fin_2_B.jpeg',
    '/works/fin_3_B.jpeg',
  ];

  const preloadHandler = (count) => {
    setProgress(count / srcs.length);
  }

  useEffect(() => {
    preloadImages(srcs, preloadHandler)
  }, [])


  return [progress];
}