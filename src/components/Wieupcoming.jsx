// import React from "react";

// function WieUpcomingEvent() {
//   return (
//     <div className="wie-upcoming-section">
//       <h1 className="wie-upcoming-heading">Upcoming Events</h1>
//       {/* <div className="card-flex">
//         <div className="upcoming-event-card">
//           <img src="./images/lightbulb.jpg" className="event-card-image" />
//           <p className="event-details">
//             Did you know the word ‘essay’ is derived from a Latin word
//             ‘exagium’, which roughly translates to presenting one’s case? So
//             essays are a short piece of writing representing one’s side of the
//             argument or one’s experiences, stories, etc. Essays are very
//             personalized. So let us learn about types of essays, format, and
//             tips for essay-writing.
//           </p>
//         </div>
//         <div className="upcoming-event-card card-2">
//           <img src="./images/lightbulb.jpg" className="event-card-image" />
//           <p className="event-details">
//             Did you know the word ‘essay’ is derived from a Latin word
//             ‘exagium’, which roughly translates to presenting one’s case? So
//             essays are a short piece of writing representing one’s side of the
//             argument or one’s experiences, stories, etc. Essays are very
//             personalized. So let us learn about types of essays, format, and
//             tips for essay-writing.
//           </p>
//         </div>
//       </div> */}
//       {/* <div id="main-wie">
//         <div id="card-wie">
//           <div class="img-wie-circle"></div>
//           <div class="name">Gilmara Barros</div>
//           <div class="description">
//             Estudante de Análise e Desenvolvimento de Sistemas, adoro
//             tecnologia, design e estou sempre aberta a aprender coisas novas.
//             Tenho bom conhecimento de Front-end.
//           </div>
//           <div class="social">
//             <div class="icons-container">
//               <a href="https://github.com/gilmara-barros" target="_blank">
//                 <div class="icon github">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     x="0px"
//                     y="0px"
//                     width="30"
//                     height="30"
//                     viewBox="0 0 30 30"
//                   >
//                     <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"></path>
//                   </svg>
//                 </div>
//               </a>
//               <a href="https://dribbble.com/Mara-Barros" target="_blank">
//                 <div class="icon-wie dribbble">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     x="0px"
//                     y="0px"
//                     width="30"
//                     height="30"
//                     viewBox="0 0 48 48"
//                   >
//                     <path d="M 24 4 C 12.972066 4 4 12.972074 4 24 C 4 35.027926 12.972066 44 24 44 C 35.027934 44 44 35.027926 44 24 C 44 12.972074 35.027934 4 24 4 z M 24 7 C 28.142307 7 31.929518 8.4763377 34.875 10.927734 C 32.122374 13.351092 28.974768 15.323142 25.580078 16.835938 C 23.811529 13.61959 21.891654 10.500767 19.736328 7.5585938 C 21.100562 7.2070927 22.524179 7 24 7 z M 16.785156 8.6171875 C 18.997535 11.542724 20.949628 14.664262 22.746094 17.886719 C 19.050465 19.170625 15.137713 20 11 20 C 9.8323552 20 8.6813446 19.922155 7.5390625 19.810547 C 8.7969115 14.835264 12.230939 10.75149 16.785156 8.6171875 z M 37.001953 13.046875 C 39.461176 15.964926 40.9535 19.721786 40.992188 23.837891 C 38.832662 23.296195 36.575941 23 34.25 23 C 32.4219 23 30.655764 23.235969 28.925781 23.574219 C 28.323231 22.178362 27.663283 20.821807 26.984375 19.46875 C 30.643681 17.813906 34.040456 15.676234 37.001953 13.046875 z M 24.177734 20.570312 C 24.811258 21.821635 25.45011 23.063845 26.015625 24.353516 C 19.953229 26.24965 14.749259 30.09875 11.257812 35.238281 C 8.6153572 32.243192 7 28.319322 7 24 C 7 23.585614 7.0335222 23.180292 7.0625 22.773438 C 8.3577913 22.906235 9.665848 23 11 23 C 15.643379 23 20.045102 22.063249 24.177734 20.570312 z M 34.25 26 C 36.498791 26 38.668342 26.319367 40.738281 26.882812 C 39.953494 31.489342 37.336086 35.457573 33.644531 38.001953 C 32.755328 34.064901 31.510607 30.269114 30.085938 26.5625 C 31.460152 26.325929 32.807024 26 34.25 26 z M 27.091797 27.125 C 28.662683 31.125628 30.006215 35.241408 30.90625 39.53125 C 28.795754 40.468547 26.462824 41 24 41 C 20.010678 41 16.357113 39.622608 13.460938 37.332031 C 16.608874 32.477365 21.430763 28.841138 27.091797 27.125 z"></path>
//                   </svg>
//                 </div>
//               </a>
//               <a href="https://instagram.com/designer.elf" target="_blank">
//                 <div class="icon instagram">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     x="0px"
//                     y="0px"
//                     width="48"
//                     height="48"
//                     viewBox="0 0 24 24"
//                   >
//                     <path d="M 8 3 C 5.243 3 3 5.243 3 8 L 3 16 C 3 18.757 5.243 21 8 21 L 16 21 C 18.757 21 21 18.757 21 16 L 21 8 C 21 5.243 18.757 3 16 3 L 8 3 z M 8 5 L 16 5 C 17.654 5 19 6.346 19 8 L 19 16 C 19 17.654 17.654 19 16 19 L 8 19 C 6.346 19 5 17.654 5 16 L 5 8 C 5 6.346 6.346 5 8 5 z M 17 6 A 1 1 0 0 0 16 7 A 1 1 0 0 0 17 8 A 1 1 0 0 0 18 7 A 1 1 0 0 0 17 6 z M 12 7 C 9.243 7 7 9.243 7 12 C 7 14.757 9.243 17 12 17 C 14.757 17 17 14.757 17 12 C 17 9.243 14.757 7 12 7 z M 12 9 C 13.654 9 15 10.346 15 12 C 15 13.654 13.654 15 12 15 C 10.346 15 9 13.654 9 12 C 9 10.346 10.346 9 12 9 z"></path>
//                   </svg>
//                 </div>
//               </a>
//               <a href="https://twitter.com/Mara_barrosc" target="_blank">
//                 <div class="icon twitter">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     x="0px"
//                     y="0px"
//                     width="30"
//                     height="30"
//                     viewBox="0 0 30 30"
//                   >
//                     <path d="M28,6.937c-0.957,0.425-1.985,0.711-3.064,0.84c1.102-0.66,1.947-1.705,2.345-2.951c-1.03,0.611-2.172,1.055-3.388,1.295 c-0.973-1.037-2.359-1.685-3.893-1.685c-2.946,0-5.334,2.389-5.334,5.334c0,0.418,0.048,0.826,0.138,1.215 c-4.433-0.222-8.363-2.346-10.995-5.574C3.351,6.199,3.088,7.115,3.088,8.094c0,1.85,0.941,3.483,2.372,4.439 c-0.874-0.028-1.697-0.268-2.416-0.667c0,0.023,0,0.044,0,0.067c0,2.585,1.838,4.741,4.279,5.23 c-0.447,0.122-0.919,0.187-1.406,0.187c-0.343,0-0.678-0.034-1.003-0.095c0.679,2.119,2.649,3.662,4.983,3.705 c-1.825,1.431-4.125,2.284-6.625,2.284c-0.43,0-0.855-0.025-1.273-0.075c2.361,1.513,5.164,2.396,8.177,2.396 c9.812,0,15.176-8.128,15.176-15.177c0-0.231-0.005-0.461-0.015-0.69C26.38,8.945,27.285,8.006,28,6.937z"></path>
//                   </svg>
//                 </div>
//               </a>
//             </div>
//           </div>
//         </div>
//       </div> */}
//       {/* <div class="container-wie">
//         <div class="card-wie">
//           <div class="face face1">
//             <div class="content-wie">
//               <img src="https://github.com/Jhonierpc/WebDevelopment/blob/master/CSS%20Card%20Hover%20Effects/img/design_128.png?raw=true" />
//               <h3>Design</h3>
//             </div>
//           </div>
//           <div class="face face2">
//             <div class="content-wie">
//               <p>
//                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
//                 cum cumque minus iste veritatis provident at.
//               </p>

//             </div>
//           </div>
//         </div>
//         <div class="card-wie">
//           <div class="face face1">
//             <div class="content-wie">
//               <img src="https://github.com/Jhonierpc/WebDevelopment/blob/master/CSS%20Card%20Hover%20Effects/img/code_128.png?raw=true" />
//               <h3>Code</h3>
//             </div>
//           </div>
//           <div class="face face2">
//             <div class="content-wie">
//               <p>
//                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
//                 cum cumque minus iste veritatis provident at.
//               </p>
//               <a href="#">Read More</a>
//             </div>
//           </div>
//         </div>
//         <div class="card-wie">
//           <div class="face face1">
//             <div class="content-wie">
//               <img src="https://github.com/Jhonierpc/WebDevelopment/blob/master/CSS%20Card%20Hover%20Effects/img/launch_128.png?raw=true" />
//               <h3>Launch</h3>
//             </div>
//           </div>
//           <div class="face face2">
//             <div class="content-wie">
//               <p>
//                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
//                 cum cumque minus iste veritatis provident at.
//               </p>
//               <a href="#">Read More</a>
//             </div>
//           </div>
//         </div>
//       </div> */}
//     </div>
//   );
// }

// export default WieUpcomingEvent;
