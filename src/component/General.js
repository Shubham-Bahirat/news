import React, { Component } from 'react';
import Newsitem from './Newsitem';
export class General extends Component {
    articles = [
        {
          "source": {
            "id": "google-news",
            "name": "Google News"
          },
          "author": "detikFinance",
          "title": "Ini Cara Cek BI Checking yang Disebut Bikin Fresh Graduate Gagal Dapat Kerja - detikFinance",
          "description": null,
          "url": "https://news.google.com/rss/articles/CBMieGh0dHBzOi8vZmluYW5jZS5kZXRpay5jb20vZmludGVjaC9kLTY4OTY1MDAvaW5pLWNhcmEtY2VrLWJpLWNoZWNraW5nLXlhbmctZGlzZWJ1dC1iaWtpbi1mcmVzaC1ncmFkdWF0ZS1nYWdhbC1kYXBhdC1rZXJqYdIBfGh0dHBzOi8vZmluYW5jZS5kZXRpay5jb20vZmludGVjaC9kLTY4OTY1MDAvaW5pLWNhcmEtY2VrLWJpLWNoZWNraW5nLXlhbmctZGlzZWJ1dC1iaWtpbi1mcmVzaC1ncmFkdWF0ZS1nYWdhbC1kYXBhdC1rZXJqYS9hbXA?oc=5",
          "urlToImage": "https://static1.anpoimages.com/wordpress/wp-content/uploads/2021/07/16/esim-brussels-hero.jpg",
          "publishedAt": "2023-08-26T02:00:20Z",
          "content": null
        },
        {
          "source": {
            "id": "google-news",
            "name": "Google News"
          },
          "author": "kompas.id",
          "title": "Bagaimana Polutan Dapat Berada di Udara? - kompas.id",
          "description": null,
          "url": "https://news.google.com/rss/articles/CBMiU2h0dHBzOi8vd3d3LmtvbXBhcy5pZC9iYWNhL29waW5pLzIwMjMvMDgvMjUvYmFnYWltYW5hLXBvbHV0YW4tZGFwYXQtYmVyYWRhLWRpLXVkYXJh0gEA?oc=5",
          "urlToImage": "https://photos5.appleinsider.com/gallery/55985-113648-Main-Image-xl.jpg",
          "publishedAt": "2023-08-26T01:54:54Z",
          "content": null
        },
        {
          "source": {
            "id": "google-news",
            "name": "Google News"
          },
          "author": "Pro Nusantara",
          "title": "Game Cheat GTA: Memanfaatkan Fitur Ikonik yang Menambah Keseruan dalam Grand Theft Auto - Pro Nusantara - Pro Nusantara",
          "description":"https://photos5.appleinsider.com/gallery/55985-113648-Main-Image-xl.jpg",
          "url": "https://news.google.com/rss/articles/CBMijAFodHRwczovL3d3dy5wcm9udXNhbnRhcmEuY29tL2VudGVydGFpbm1lbnQvNDA1OTk0MDAxMi9nYW1lLWNoZWF0LWd0YS1tZW1hbmZhYXRrYW4tZml0dXItaWtvbmlrLXlhbmctbWVuYW1iYWgta2VzZXJ1YW4tZGFsYW0tZ3JhbmQtdGhlZnQtYXV0b9IBkAFodHRwczovL3d3dy5wcm9udXNhbnRhcmEuY29tL2VudGVydGFpbm1lbnQvYW1wLzQwNTk5NDAwMTIvZ2FtZS1jaGVhdC1ndGEtbWVtYW5mYWF0a2FuLWZpdHVyLWlrb25pay15YW5nLW1lbmFtYmFoLWtlc2VydWFuLWRhbGFtLWdyYW5kLXRoZWZ0LWF1dG8?oc=5",
          "urlToImage": null,
          "publishedAt": "2023-08-26T01:35:00Z",
          "content": null
        },
        {
          "source": {
            "id": "google-news",
            "name": "Google News"
          },
          "author": "detikNews",
          "title": "Dua Bayi yang Tertukar Jadi Anak Angkat Polres Bogor - detikNews",
          "description": null,
          "url": "https://news.google.com/rss/articles/CBMiXGh0dHBzOi8vbmV3cy5kZXRpay5jb20vYmVyaXRhL2QtNjg5NjU1MC9kdWEtYmF5aS15YW5nLXRlcnR1a2FyLWphZGktYW5hay1hbmdrYXQtcG9scmVzLWJvZ29y0gFgaHR0cHM6Ly9uZXdzLmRldGlrLmNvbS9iZXJpdGEvZC02ODk2NTUwL2R1YS1iYXlpLXlhbmctdGVydHVrYXItamFkaS1hbmFrLWFuZ2thdC1wb2xyZXMtYm9nb3IvYW1w?oc=5",
          "urlToImage": null,
          "publishedAt": "2023-08-26T01:31:41Z",
          "content": null
        },
        {
          "source": {
            "id": "google-news",
            "name": "Google News"
          },
          "author": "CNN Indonesia",
          "title": "Pelatih Vietnam Takut dengan Lemparan Maut Indonesia - CNN Indonesia",
          "description": null,
          "url": "https://news.google.com/rss/articles/CBMidGh0dHBzOi8vd3d3LmNubmluZG9uZXNpYS5jb20vb2xhaHJhZ2EvMjAyMzA4MjYwODEzMDAtMTQyLTk5MDczMC9wZWxhdGloLXZpZXRuYW0tdGFrdXQtZGVuZ2FuLWxlbXBhcmFuLW1hdXQtaW5kb25lc2lh0gEA?oc=5",
          "urlToImage": null,
          "publishedAt": "2023-08-26T01:25:04Z",
          "content": null
        },
        {
          "source": {
            "id": "google-news",
            "name": "Google News"
          },
          "author": "detikHot",
          "title": "5 Potret Wika Salim Siap Beri Bukti Tak Cuma Jual Badan dengan Karya Baru Ini - detikHot",
          "description": null,
          "url": "https://news.google.com/rss/articles/CBMic2h0dHBzOi8vaG90LmRldGlrLmNvbS9jZWxlYi9kLTY4OTU4NzYvNS1wb3RyZXQtd2lrYS1zYWxpbS1zaWFwLWJlcmktYnVrdGktdGFrLWN1bWEtanVhbC1iYWRhbi1kZW5nYW4ta2FyeWEtYmFydS1pbmnSAXdodHRwczovL2hvdC5kZXRpay5jb20vY2VsZWIvZC02ODk1ODc2LzUtcG90cmV0LXdpa2Etc2FsaW0tc2lhcC1iZXJpLWJ1a3RpLXRhay1jdW1hLWp1YWwtYmFkYW4tZGVuZ2FuLWthcnlhLWJhcnUtaW5pL2FtcA?oc=5",
          "urlToImage": null,
          "publishedAt": "2023-08-26T01:07:02Z",
          "content": null
        },
        {
          "source": {
            "id": "google-news",
            "name": "Google News"
          },
          "author": "detikJatim",
          "title": "Senjata Makan Tuan Masriah Si Penyiram Tinja ke Rumah Tetangga - detikJatim",
          "description": null,
          "url": "https://news.google.com/rss/articles/CBMia2h0dHBzOi8vd3d3LmRldGlrLmNvbS9qYXRpbS9iZXJpdGEvZC02ODk2NDM0L3NlbmphdGEtbWFrYW4tdHVhbi1tYXNyaWFoLXNpLXBlbnlpcmFtLXRpbmphLWtlLXJ1bWFoLXRldGFuZ2dh0gFvaHR0cHM6Ly93d3cuZGV0aWsuY29tL2phdGltL2Jlcml0YS9kLTY4OTY0MzQvc2VuamF0YS1tYWthbi10dWFuLW1hc3JpYWgtc2ktcGVueWlyYW0tdGluamEta2UtcnVtYWgtdGV0YW5nZ2EvYW1w?oc=5",
          "urlToImage": null,
          "publishedAt": "2023-08-26T01:00:10Z",
          "content": null
        },
        {
          "source": {
            "id": "google-news",
            "name": "Google News"
          },
          "author": "detikHot",
          "title": "Rendy Kjaernett Ingin Ajak Lady Nayoan Bulan Madu Usai Rujuk - detikHot",
          "description": null,
          "url": "https://news.google.com/rss/articles/CBMiYmh0dHBzOi8vaG90LmRldGlrLmNvbS9jZWxlYi9kLTY4OTU0MTEvcmVuZHkta2phZXJuZXR0LWluZ2luLWFqYWstbGFkeS1uYXlvYW4tYnVsYW4tbWFkdS11c2FpLXJ1anVr0gFmaHR0cHM6Ly9ob3QuZGV0aWsuY29tL2NlbGViL2QtNjg5NTQxMS9yZW5keS1ramFlcm5ldHQtaW5naW4tYWphay1sYWR5LW5heW9hbi1idWxhbi1tYWR1LXVzYWktcnVqdWsvYW1w?oc=5",
          "urlToImage": null,
          "publishedAt": "2023-08-26T00:35:53Z",
          "content": null
        },
        {
          "source": {
            "id": "google-news",
            "name": "Google News"
          },
          "author": "Nasional Kompas.com",
          "title": "2 Parpol Pengusung Prabowo Gelar \"Karpet Merah\" untuk Budiman Sudjatmiko - Kompas.com - Nasional Kompas.com",
          "description": null,
          "url": "https://news.google.com/rss/articles/CBMie2h0dHBzOi8vbmFzaW9uYWwua29tcGFzLmNvbS9yZWFkLzIwMjMvMDgvMjYvMDczNTM1MjEvMi1wYXJwb2wtcGVuZ3VzdW5nLXByYWJvd28tZ2VsYXIta2FycGV0LW1lcmFoLXVudHVrLWJ1ZGltYW4tc3VkamF0bWlrb9IBf2h0dHBzOi8vYW1wLmtvbXBhcy5jb20vbmFzaW9uYWwvcmVhZC8yMDIzLzA4LzI2LzA3MzUzNTIxLzItcGFycG9sLXBlbmd1c3VuZy1wcmFib3dvLWdlbGFyLWthcnBldC1tZXJhaC11bnR1ay1idWRpbWFuLXN1ZGphdG1pa28?oc=5",
          "urlToImage": null,
          "publishedAt": "2023-08-26T00:35:00Z",
          "content": null
        },
        {
          "source": {
            "id": "google-news",
            "name": "Google News"
          },
          "author": "20Detik",
          "title": "Fakta-fakta hingga Ekspresi Trump Jadi Tahanan Sesaat di Penjara Georgia - 20Detik",
          "description": null,
          "url": "https://news.google.com/rss/articles/CBMifGh0dHBzOi8vMjAuZGV0aWsuY29tL2RldGlrdXBkYXRlLzIwMjMwODI2LTIzMDgyNjA0NS9mYWt0YS1mYWt0YS1oaW5nZ2EtZWtzcHJlc2ktdHJ1bXAtamFkaS10YWhhbmFuLXNlc2FhdC1kaS1wZW5qYXJhLWdlb3JnaWHSAQA?oc=5",
          "urlToImage": null,
          "publishedAt": "2023-08-26T00:35:00Z",
          "content": null
        },
        {
          "source": {
            "id": "google-news",
            "name": "Google News"
          },
          "author": "InsertLive",
          "title": "Terpopuler: Ibunda Yakin Aldila DIguna-guna Indra Bekti Vs Tim Happy Asmara Kecelakaan - InsertLive",
          "description": null,
          "url": "https://news.google.com/rss/articles/CBMikwFodHRwczovL3d3dy5pbnNlcnRsaXZlLmNvbS9ob3QtZ29zc2lwLzIwMjMwODI2MDY1MzExLTctMzE3NjY1L3RlcnBvcHVsZXItaWJ1bmRhLXlha2luLWFsZGlsYS1kaWd1bmEtZ3VuYS1pbmRyYS1iZWt0aS12cy10aW0taGFwcHktYXNtYXJhLWtlY2VsYWthYW7SAZcBaHR0cHM6Ly93d3cuaW5zZXJ0bGl2ZS5jb20vaG90LWdvc3NpcC8yMDIzMDgyNjA2NTMxMS03LTMxNzY2NS90ZXJwb3B1bGVyLWlidW5kYS15YWtpbi1hbGRpbGEtZGlndW5hLWd1bmEtaW5kcmEtYmVrdGktdnMtdGltLWhhcHB5LWFzbWFyYS1rZWNlbGFrYWFuL2FtcA?oc=5",
          "urlToImage": null,
          "publishedAt": "2023-08-26T00:15:00Z",
          "content": null
        },
        {
          "source": {
            "id": "google-news",
            "name": "Google News"
          },
          "author": "Goal.com",
          "title": "Cristiano Ronaldo Hat-Trick Untuk Al-Nassr & Sadio Mane Bikin Dua Gol! Ini Daftar Top Skor Liga Arab (Saudi Pro League) 2023/24 - Goal.com",
          "description": null,
          "url": "https://news.google.com/rss/articles/CBMiWmh0dHBzOi8vd3d3LmdvYWwuY29tL2lkL2Jlcml0YS9kYWZ0YXItdG9wc2tvci1zYXVkaS1wcm8tbGVhZ3VlLTIwMjMtMjQvYmx0MWU1N2ViZmEyNmM1NjQ0NtIBAA?oc=5",
          "urlToImage": null,
          "publishedAt": "2023-08-26T00:00:58Z",
          "content": null
        },
        {
          "source": {
            "id": "google-news",
            "name": "Google News"
          },
          "author": "CNN Indonesia",
          "title": "AHM Dipanggil Kemenhub Buntut Gaduh Rangka eSAF dan Desakan Recall - CNN Indonesia",
          "description": null,
          "url": "https://news.google.com/rss/articles/CBMiggFodHRwczovL3d3dy5jbm5pbmRvbmVzaWEuY29tL290b21vdGlmLzIwMjMwODI2MDAwNjU5LTU5NS05OTA2OTYvYWhtLWRpcGFuZ2dpbC1rZW1lbmh1Yi1idW50dXQtZ2FkdWgtcmFuZ2thLWVzYWYtZGFuLWRlc2FrYW4tcmVjYWxs0gGGAWh0dHBzOi8vd3d3LmNubmluZG9uZXNpYS5jb20vb3RvbW90aWYvMjAyMzA4MjYwMDA2NTktNTk1LTk5MDY5Ni9haG0tZGlwYW5nZ2lsLWtlbWVuaHViLWJ1bnR1dC1nYWR1aC1yYW5na2EtZXNhZi1kYW4tZGVzYWthbi1yZWNhbGwvYW1w?oc=5",
          "urlToImage": null,
          "publishedAt": "2023-08-25T23:47:00Z",
          "content": null
        },
        {
          "source": {
            "id": "google-news",
            "name": "Google News"
          },
          "author": "detikJateng",
          "title": "Sederet Fakta Tewasnya Dian Dosen UIN Solo di Tangan Kuli Bangunan - detikJateng",
          "description": null,
          "url": "https://news.google.com/rss/articles/CBMifGh0dHBzOi8vd3d3LmRldGlrLmNvbS9qYXRlbmcvaHVrdW0tZGFuLWtyaW1pbmFsL2QtNjg5NjM3MC9zZWRlcmV0LWZha3RhLXRld2FzbnlhLWRpYW4tZG9zZW4tdWluLXNvbG8tZGktdGFuZ2FuLWt1bGktYmFuZ3VuYW7SAYABaHR0cHM6Ly93d3cuZGV0aWsuY29tL2phdGVuZy9odWt1bS1kYW4ta3JpbWluYWwvZC02ODk2MzcwL3NlZGVyZXQtZmFrdGEtdGV3YXNueWEtZGlhbi1kb3Nlbi11aW4tc29sby1kaS10YW5nYW4ta3VsaS1iYW5ndW5hbi9hbXA?oc=5",
          "urlToImage": null,
          "publishedAt": "2023-08-25T23:37:39Z",
          "content": null
        },
        {
          "source": {
            "id": "google-news",
            "name": "Google News"
          },
          "author": "CNN Indonesia",
          "title": "Puan Usai Terima Tongkat Bung Karno: Kami Akan Teruskan Cita-cita - CNN Indonesia",
          "description": null,
          "url": "https://news.google.com/rss/articles/CBMif2h0dHBzOi8vd3d3LmNubmluZG9uZXNpYS5jb20vbmFzaW9uYWwvMjAyMzA4MjYwMDQ4MDUtMzItOTkwNzAzL3B1YW4tdXNhaS10ZXJpbWEtdG9uZ2thdC1idW5nLWthcm5vLWthbWktYWthbi10ZXJ1c2thbi1jaXRhLWNpdGHSAYMBaHR0cHM6Ly93d3cuY25uaW5kb25lc2lhLmNvbS9uYXNpb25hbC8yMDIzMDgyNjAwNDgwNS0zMi05OTA3MDMvcHVhbi11c2FpLXRlcmltYS10b25na2F0LWJ1bmcta2Fybm8ta2FtaS1ha2FuLXRlcnVza2FuLWNpdGEtY2l0YS9hbXA?oc=5",
          "urlToImage": null,
          "publishedAt": "2023-08-25T23:07:00Z",
          "content": null
        },
        {
          "source": {
            "id": "google-news",
            "name": "Google News"
          },
          "author": "detikFinance",
          "title": "Pendaftaran CPNS 2023 Dibuka September, Cek Dulu Besaran Gajinya! - detikFinance",
          "description": null,
          "url": "https://news.google.com/rss/articles/CBMiaGh0dHBzOi8vZmluYW5jZS5kZXRpay5jb20vY3Bucy9kLTY4OTU3MDcvcGVuZGFmdGFyYW4tY3Bucy0yMDIzLWRpYnVrYS1zZXB0ZW1iZXItY2VrLWR1bHUtYmVzYXJhbi1nYWppbnlh0gFsaHR0cHM6Ly9maW5hbmNlLmRldGlrLmNvbS9jcG5zL2QtNjg5NTcwNy9wZW5kYWZ0YXJhbi1jcG5zLTIwMjMtZGlidWthLXNlcHRlbWJlci1jZWstZHVsdS1iZXNhcmFuLWdhamlueWEvYW1w?oc=5",
          "urlToImage": null,
          "publishedAt": "2023-08-25T23:00:21Z",
          "content": null
        }]

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

export default General;
