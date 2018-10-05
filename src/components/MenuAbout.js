import React from 'react'
import PropTypes from 'prop-types'

// import jQuery from 'jquery'
import './all.sass'
import './main.scss'
export default class MenuAbout extends React.Component {
 
    static propTypes = {
        toggleClass: PropTypes.func,
        sections: PropTypes.array
      }

    render(){        
        const {sections} = this.props;
        console.log(sections)
      return(
        <div>
        <aside class="navbar-menu">
       <ul class="menu-list">
       {
           sections.map(section =>
            <li><a key={section} id={section.toLowerCase()} onClick={(e) => this.props.toggleClass(e)}>
            
            {section === "Archaeology" && 
            <figure class="image is-96x96">            
            <img id={section.toLowerCase()} alt={section} class="is-rounded" src="https://www.wessexarch.co.uk/sites/default/files/styles/hero_900/public/field_hero_image/DorchesterNews.jpg?h=002f241f&itok=v5y2LZw9" />
            {section}
            </figure>        
            }
            {section === "Technology" && 
            <figure class="image is-96x96">            
            <img id={section.toLowerCase()} alt={section} class="is-rounded" src="https://cdn.newsapi.com.au/image/v1/7a7ec1aa1a0ab41a197b9cbd27b2f942" />
            {section}
            </figure>        
            }
            {section === "Caster" && 
            <figure class="image is-96x96">            
            <img id={section.toLowerCase()} alt={section} class="is-rounded" src="https://www.bonnersmusic.co.uk/img/product//shure-55sh-series-ii-microphone-36000764-0-1386670913000.jpg" />
            {section}
            </figure>        
            }
            {section === "Diving" && 
            <figure class="image is-96x96">            
            <img id={section.toLowerCase()} alt={section} class="is-rounded" src="https://aquaworld.com.mx/en/wp-content/uploads/sites/2/2016/03/7-reasons-why-being-a-scuba-diver-is-the-best-thing-ever.jpg" />
            {section}
            </figure>        
            }
            {section === "Botany" && 
            <figure class="image is-96x96">            
            <img id={section.toLowerCase()} alt={section} class="is-rounded" src="https://qph.fs.quoracdn.net/main-qimg-b8b4883c8b5b8e07a9308d7fa5bef188-c" />
            {section}
            </figure>                    
            }            
          </a>
          </li>     
        )
       }
             
       </ul>  
     </aside>
     
      </div>
  
      )}
  }
  