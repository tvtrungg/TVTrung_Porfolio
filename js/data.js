
// Services
// Fetching data from JSON file json/services.json

// fetch('json/services.json')
//     .then(response => response.json())
//     .then(data => {
//         data.forEach(service => {
//             let serviceHTML = `
//             <div class="col-md-4 service-padding">
//                 <div class="project img ftco-animate d-flex justify-content-center align-items-center"
//                     loading="lazy" style="background-image: url(images/${service.cdn});">
//                     <div class="overlay"></div>
//                     <div class="text text-center p-4">
//                         <h3>
//                             <a href="#">${service.name}</a>
//                             <br><a style="font-size: 15px; opacity: 0.8">${service.status}</a>
//                         </h3>
//                         <span>${service.description}</span>
//                     </div>
//                 </div>  
//             </div>
//             `;
//             document.querySelector('.services_container').innerHTML += serviceHTML;
//         });
//     }
//     );