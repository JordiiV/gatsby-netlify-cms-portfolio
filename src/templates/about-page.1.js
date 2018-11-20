// import React from 'react'
// import PropTypes from 'prop-types'
// import jQuery from 'jquery'
// import { TweenMax, TweenLite, TimelineMax } from "gsap";
// import Layout from '../components/Layout'
// import '../components/switch/switch';
// // import '../components/about-desktop/about-heroes.scss'
// import '../components/main.scss'


// export class AboutPageTemplate extends React.Component {

//   static propTypes = {
 
//   }

//   state = {

//   }

//   componentDidMount() {
//     this.heroes();
//   }


//   heroes = () => {

//     const contenedor = jQuery('#contenedor');
//     const postContent = jQuery('#posts');
//     const heroes = {
//       "hero": [
//         {
//           name: "Archaeology",
//           bio: "Tras la caída del régimen, Superman ha permanecido encerrado en una prisión que se construyó para mantener preso y neutralizado al hombre de acero. Arrastrando la pena que le supuso la pérdida de Lois y de su hijo no nato, Superman asegura que el único camino para obtener la paz es la opresión. Sin embargo, ahora que nuevos peligros acechan, ¿será el momento de que viejos enemigos formen nuevas alianzas?",
//           pic: "https://orig00.deviantart.net/b08f/f/2014/094/6/7/indiana_jones_png__3_by_ent2pri9se-d7d16jx.png",
//           picBig: "https://orig00.deviantart.net/b08f/f/2014/094/6/7/indiana_jones_png__3_by_ent2pri9se-d7d16jx.png"
//         },
//         {
//           name: "Diving",
//           bio: "Incluso después de exponerse al mundo como Batman, Bruce Wayne mantiene su juramento de vengar la muerte de sus padres y luchar por la justicia. Se niega a liquidar a sus enemigos, ya que posee la convicción de que si cruza esa línea, será tan cobarde como ellos.",
//           pic: "https://www.pngarts.com/files/3/Scuba-Diver-PNG-Photo.png",
//           picBig: "https://www.pngarts.com/files/3/Scuba-Diver-PNG-Photo.png"
//         },
//         {
//           name: "Botany",
//           bio: "Hermana exiliada de Themyscira, Wonder Woman permanece oculta tras la caída del régimen. Con su ferviente y constante fe en Superman y su gobierno, Wonder Woman aguarda su oportunidad para contraatacar a Batman y liberar a Superman de su cautiverio.",
//           pic: "http://www.pngmart.com/files/7/Gardening-Transparent-Background.png",
//           picBig: "http://www.pngmart.com/files/7/Gardening-Transparent-Background.png"
//         },
//         {
//           name: "Technology",
//           bio: "Cuando era niña, Kara Zor-El fue testigo de la devastación de Krypton antes de que la enviaran a la Tierra en una misión para proteger a su primo pequeño, Kal-El. Cuando llegó a la Tierra, con décadas de retraso, descubrió que el Kal adulto se encontraba apresado. Con el ánimo de proteger a su familia y su legado intacto, Kara luchará contra los enemigos de su primo como Supergirl.",
//           pic: "https://learnsafe.com/wp-content/uploads/2017/12/IT-Guy-Isolated.png",
//           picBig: "https://learnsafe.com/wp-content/uploads/2017/12/IT-Guy-Isolated.png"
//         },
//         {
//           name: "Caster / Narrator",
//           bio: "El gobernador atlante aisló este reino de los asuntos de la superficie del planeta tras una dolorosa derrota en tiempos del régimen de Superman. Sin embargo, su determinación por conservar la independencia de Atlantis podría salirle cara, pues surgen nuevas amenazas. ¿Podrá Aquaman tragarse su orgullo para proteger a su pueblo?",
//           pic: "https://static.wixstatic.com/media/af28ea_9d801e03fca24fefb157fd81b0dc0807~mv2.png",
//           picBig: "https://static.wixstatic.com/media/af28ea_9d801e03fca24fefb157fd81b0dc0807~mv2.png"
//         }
//       ]
//     };

//     let i;
//     for (i in heroes.hero) {
//       jQuery('#posts').append('<div class="post column"><a class="enlace" href="#" data-name="' + heroes.hero[i].name + '" data-bio="' + heroes.hero[i].bio + '" data-bigpic="' + heroes.hero[i].picBig + '"><img src="' + heroes.hero[i].pic + '" alt="" class="img-responsive" /></a></div>');

//     }

//     // Selección de personaje
//     var posts = jQuery('.post');
//     var link = jQuery('.enlace');
//     var playPic = jQuery('#player-picture img');
//     var playName = jQuery('#player-name');
//     var playBio = jQuery('#player-bio');

//     link.on('click', function (event) {
//       event.preventDefault(); // Let's stop this event.
//       event.stopPropagation(); // Really this time.
//       var playN = jQuery(this).data('name');
//       var playB = jQuery(this).data('bio');
//       var playP = jQuery(this).data('bigpic');
//       playPic.attr('src', playP);
//       playName.html(playN);
//       playBio.html(playB);
//       TweenMax.fromTo(playPic, .3, { autoALpha: 0, y: -20 }, { autoAlpha: 1, y: 0 });
//       TweenMax.fromTo(playName, .3, { autoALpha: 0 }, { autoAlpha: 1 });
//       TweenMax.fromTo(playBio, .3, { autoALpha: 0 }, { autoAlpha: 1 });
//     });

//     // Animaciones
//     TweenLite.set(contenedor, { perspective: 2000 });
//     TweenLite.set(postContent, { perspective: 900 });
//     TweenLite.set(postContent, { rotationX: 50, transformOrigin: 'bottom' });
//     TweenLite.set(posts, { autoAlpha: 0, y: -100 });

//     posts.hover(function () {
//       TweenLite.to(jQuery(this), .4, { y: -10, boxShadow: '0 10px 10px #56DDF7' });
//     }, function () {
//       TweenLite.to(jQuery(this), .4, { y: 0, boxShadow: 'none' });
//     });

//     let tl = new TimelineMax();

//     tl.staggerTo(posts, .4, { autoAlpha: 1, y: 0 }, .2);
//     tl.to(postContent, .5, { boxShadow: '0 0 20px yellow', repeat: 'infinite', yoyo: true });

//     //alert(heroes.hero[0].name);
//   }




//   render() {

//     return (

//       <section className="section" style={{ paddingTop: "5rem" }}>
     
//         <div className="columns">
//           <div id="info-container" className="column is-4">
//             <div>
//               <div id="player-selected">
//                 <div id="player-picture" class="">
//                   <img id="pictureHero" src="https://orig00.deviantart.net/b08f/f/2014/094/6/7/indiana_jones_png__3_by_ent2pri9se-d7d16jx.png" class="img-responsive aligncenter" alt="" />
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div class="column">
//             <div id="player-info">
//               <h1 id="player-name">Archaeology</h1>
//               <div id="player-bio">
//                 Tras la caída del régimen, Superman ha permanecido encerrado en una prisión que se construyó para mantener preso y neutralizado al hombre de acero. Arrastrando la pena que le supuso la pérdida de Lois y de su hijo no nato, Superman asegura que el único camino para obtener la paz es la opresión. Sin embargo, ahora que nuevos peligros acechan, ¿será el momento de que viejos enemigos formen nuevas alianzas?
//               </div>
//             </div>
//           </div>

//           <div class="clearfix"></div>


//         </div>
//         <div id="contenedor" className="container columns" style={{ marginLeft: "25%" }}>
//           <div id="posts" class="columns" style={{ marginLeft: "2%" }}>

//           </div>
//         </div>
//       </section >
   
//     )
//   }
// }

// const AboutPage = () => {


//   return (
//     <Layout>
//       <AboutPageTemplate
     
//       />
//     </Layout>
//   )
// }

// AboutPage.propTypes = {

// }

// export default AboutPage


