"use strict"

const header = document.querySelector('.nav-head');
const intro = document.querySelector('.intro');
const breakingNews = document.querySelectorAll('.breaking-news');
const trends = document.querySelectorAll('.trends');
const newsList = document.querySelector('.newslist');
const news = document.querySelectorAll('.news');
const image = document.querySelectorAll('.fig-1');
const menu = document.querySelector('.menu');
const menuBar = document.querySelector('.menu-bar');
const closeMenu = document.querySelector('.close-menu');


const handleHover = function (e, opacity) {
   if (e.target.classList.contains('nav-link')) {
      const link = e.target;
       const siblings = link.closest('.nav-head').
       querySelectorAll('.nav-link');
       const logo = link.closest('.nav-head').
       querySelector('img');

       siblings.forEach(el => {
           if (el !== link) el.style.opacity = opacity;
       });
       logo.style.opacity = opacity;
    }
}

header.addEventListener('mouseover', function (e) {
   handleHover(e,0.5);
});

header.addEventListener('mouseout', function (e) {
   handleHover(e,1);
});

breakingNews.forEach(t => t.addEventListener('mouseover', 
function (e) {
   const clicked = e.target.closest('.trends');



   if(!clicked) return;
   trends.forEach(t=> t.classList.remove('active'));
   clicked.classList.add('active');
}));

news.forEach(t => t.addEventListener('mouseover', 
function (e) {
   const clicked = e.target.closest('.fig-1');
   // console.log(clicked);

   if(!clicked) return;
   image.forEach(t => t.classList.remove('pop'));
   clicked.classList.add('pop');
}));


news.forEach(t => t.addEventListener('mouseout', 
function (e) {
   const clicked = e.target.closest('.fig-1');
   // console.log(clicked);

   if(!clicked) return;
   image.forEach(t => t.classList.remove('return'));
   clicked.classList.add('return');
}));

menu.addEventListener('click', function (e) {
  menuBar.style.transform = 'translateX(0%)'; 
});

closeMenu.addEventListener('click', function (e) {
   menuBar.style.transform = 'translateX(100%)'; 
 });