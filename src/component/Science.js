import React, { Component } from 'react';
import Newsitem from './Newsitem';

export class Science extends Component {
    articles = [
        {
          "source": {
            "id": "google-news",
            "name": "Google News"
          },
          "author": "HarapanRakyat.com",
          "title": "Penyebab Piston Motor Macet dan Tips Mengatasinya - HarapanRakyat.com",
          "description": null,
          "url": "https://news.google.com/rss/articles/CBMiQmh0dHBzOi8vd3d3LmhhcmFwYW5yYWt5YXQuY29tLzIwMjMvMDgvcGVueWViYWItcGlzdG9uLW1vdG9yLW1hY2V0L9IBAA?oc=5",
          "urlToImage": "https://img.panaitiu.com/_/og/plain/https%3A%2F%2Ffiles.alinpanaitiu.com%2Fswiftui-slow-screenshot.png@webp",
          "publishedAt": "2023-08-26T02:33:51Z",
          "content": null
        },
        {
          "source": {
            "id": "google-news",
            "name": "Google News"
          },
          "author": "Kompasiana.com",
          "title": "Misteri Karbon: Jejak Gas Rumah Kaca yang Mempengaruhi Dunia - Kompasiana.com",
          "description": null,
          "url": "https://news.google.com/rss/articles/CBMifWh0dHBzOi8vd3d3LmtvbXBhc2lhbmEuY29tL211aGFtbWFkMzM3MjUvNjRlOTYzZmMwOGE4YjUzM2EzNjBmOWUyL21pc3Rlcmkta2FyYm9uLWplamFrLWdhcy1ydW1haC1rYWNhLXlhbmctbWVtcGVuZ2FydWhpLWR1bmlh0gEA?oc=5",
          "urlToImage": null,
          "publishedAt": "2023-08-26T02:31:24Z",
          "content": null
        },
        {
          "source": {
            "id": "google-news",
            "name": "Google News"
          },
          "author": "kompas.id",
          "title": "Bagaimana Polutan Dapat Berada di Udara? - kompas.id",
          "description": "https://img.panaitiu.com/_/og/plain/https%3A%2F%2Ffiles.alinpanaitiu.com%2Fswiftui-slow-screenshot.png@webp",
          "url": "https://news.google.com/rss/articles/CBMiU2h0dHBzOi8vd3d3LmtvbXBhcy5pZC9iYWNhL29waW5pLzIwMjMvMDgvMjUvYmFnYWltYW5hLXBvbHV0YW4tZGFwYXQtYmVyYWRhLWRpLXVkYXJh0gEA?oc=5",
          "urlToImage": null,
          "publishedAt": "2023-08-26T01:54:54Z",
          "content": null
        },
        {
          "source": {
            "id": "google-news",
            "name": "Google News"
          },
          "author": "Okezone Muslim",
          "title": "Benarkah Terbentuknya Alam Semesta Bisa Diketahui? Alquran dan Sains Beri Penjelasannya - Okezone Muslim",
          "description": null,
          "url": "https://news.google.com/rss/articles/CBMijQFodHRwczovL211c2xpbS5va2V6b25lLmNvbS9yZWFkLzIwMjMvMDgvMjUvNjE0LzI4NzEyMDAvYmVuYXJrYWgtdGVyYmVudHVrbnlhLWFsYW0tc2VtZXN0YS1iaXNhLWRpa2V0YWh1aS1hbHF1cmFuLWRhbi1zYWlucy1iZXJpLXBlbmplbGFzYW5ueWHSAYwBaHR0cHM6Ly9tdXNsaW0ub2tlem9uZS5jb20vYW1wLzIwMjMvMDgvMjUvNjE0LzI4NzEyMDAvYmVuYXJrYWgtdGVyYmVudHVrbnlhLWFsYW0tc2VtZXN0YS1iaXNhLWRpa2V0YWh1aS1hbHF1cmFuLWRhbi1zYWlucy1iZXJpLXBlbmplbGFzYW5ueWE?oc=5",
          "urlToImage": "https://img.panaitiu.com/_/og/plain/https%3A%2F%2Ffiles.alinpanaitiu.com%2Fswiftui-slow-screenshot.png@webp",
          "publishedAt": "2023-08-26T01:26:19Z",
          "content": null
        },
        {
          "source": {
            "id": "google-news",
            "name": "Google News"
          },
          "author": "Republika Online",
          "title": "SpaceX dan NASA Tunda Peluncuran Astronaut Crew-7 ke Luar Angkasa, Ada Apa? | Republika Online - Republika Online",
          "description": null,
          "url": "https://news.google.com/rss/articles/CBMid2h0dHBzOi8vdGVrbm8ucmVwdWJsaWthLmNvLmlkL2Jlcml0YS9yenl2aTg0Nzgvc3BhY2V4LWRhbi1uYXNhLXR1bmRhLXBlbHVuY3VyYW4tYXN0cm9uYXV0LWNyZXc3LWtlLWx1YXItYW5na2FzYS1hZGEtYXBh0gEA?oc=5",
          "urlToImage": null,
          "publishedAt": "2023-08-25T22:11:35Z",
          "content": null
        },
        {
          "source": {
            "id": "google-news",
            "name": "Google News"
          },
          "author": "VOI.ID",
          "title": "Misteri Titik Gelap di Planet Neptunus Berhasil Diungkap Para Astronom - VOI.ID",
          "description": null,
          "url": "https://news.google.com/rss/articles/CBMiZmh0dHBzOi8vdm9pLmlkL3Rla25vbG9naS8zMDQ3OTIvbWlzdGVyaS10aXRpay1nZWxhcC1kaS1wbGFuZXQtbmVwdHVudXMtYmVyaGFzaWwtZGl1bmdrYXAtcGFyYS1hc3Ryb25vbdIBYGh0dHBzOi8vdm9pLmlkL2FtcC8zMDQ3OTIvbWlzdGVyaS10aXRpay1nZWxhcC1kaS1wbGFuZXQtbmVwdHVudXMtYmVyaGFzaWwtZGl1bmdrYXAtcGFyYS1hc3Ryb25vbQ?oc=5",
          "urlToImage": null,
          "publishedAt": "2023-08-25T21:00:00Z",
          "content": null
        },
        {
          "source": {
            "id": "google-news",
            "name": "Google News"
          },
          "author": "SINDOnews Sains",
          "title": "Fenomena Tornado Api di Balik Kebakaran Hebat Kanada Terkuak - SINDOnews Sains",
          "description": null,
          "url": "https://news.google.com/rss/articles/CBMidGh0dHBzOi8vc2FpbnMuc2luZG9uZXdzLmNvbS9yZWFkLzExODUyMDMvNzY2L2Zlbm9tZW5hLXRvcm5hZG8tYXBpLWRpLWJhbGlrLWtlYmFrYXJhbi1oZWJhdC1rYW5hZGEtdGVya3Vhay0xNjkyOTcyNTA40gF4aHR0cHM6Ly9zYWlucy5zaW5kb25ld3MuY29tL25ld3NyZWFkLzExODUyMDMvNzY2L2Zlbm9tZW5hLXRvcm5hZG8tYXBpLWRpLWJhbGlrLWtlYmFrYXJhbi1oZWJhdC1rYW5hZGEtdGVya3Vhay0xNjkyOTcyNTA4?oc=5",
          "urlToImage": null,
          "publishedAt": "2023-08-25T15:22:19Z",
          "content": null
        },
        {
          "source": {
            "id": "google-news",
            "name": "Google News"
          },
          "author": "Homecare24",
          "title": "Tali Gunung - Homecare24",
          "description": null,
          "url": "https://news.google.com/rss/articles/CBMiImh0dHBzOi8vaG9tZWNhcmUyNC5pZC90YWxpLWd1bnVuZy_SAQA?oc=5",
          "urlToImage": null,
          "publishedAt": "2023-08-25T13:46:30Z",
          "content": null
        }
    ] 

    constructor(){
      super();
      console.log("I am Constructor ")
      this.state = {
        articles: this.articles,
        loading: false,
    
      }
     
      
    }
    render() {
      return (
        <>
        <div className='container my-3'>
          <h3 className='text-center' style={{margin:'35px 0px',marginTop:'90px'}}  >RKNews - Headlines</h3>
         <div className='row'>
          { this.state.articles.map((element)=>{
            return <div className='col-md-4' key={element.url}>
            <Newsitem title={element.title?element.title.slice(0,40):""} discription={element.description?element.description.slice(0,80):""} imageUrl={element.urlToImage} newsurl={element.url}
                    author={element.author} publishedAt={element.publishedAt} />
          </div>
          })}
        
  
         </div>
        
        
         </div>
         </>
      );
    }
  
  }
  

export default Science;
