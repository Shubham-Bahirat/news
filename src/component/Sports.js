import React, { Component } from 'react';
import Newsitem from './Newsitem';
export class Sports extends Component {
    articles = [
        {
          "source": {
            "id": "google-news",
            "name": "Google News"
          },
          "author": "CNN Indonesia",
          "title": "Pelatih Vietnam Takut dengan Lemparan Maut Indonesia - CNN Indonesia",
          "description": null,
          "url": "https://news.google.com/rss/articles/CBMidGh0dHBzOi8vd3d3LmNubmluZG9uZXNpYS5jb20vb2xhaHJhZ2EvMjAyMzA4MjYwODEzMDAtMTQyLTk5MDczMC9wZWxhdGloLXZpZXRuYW0tdGFrdXQtZGVuZ2FuLWxlbXBhcmFuLW1hdXQtaW5kb25lc2lh0gEA?oc=5",
          "urlToImage":  "https://i.insider.com/6348425ff900fa001814c580?width=1200&format=jpeg",
          "publishedAt": "2023-08-26T01:25:04Z",
          "content": null
        },
        {
          "source": {
            "id": "google-news",
            "name": "Google News"
          },
          "author": "detikSport",
          "title": "Kesalnya De Gea dan Casillas Usai Luis Rubiales Menolak Mundur - detikSport",
          "description": null,
          "url": "https://news.google.com/rss/articles/CBMidWh0dHBzOi8vc3BvcnQuZGV0aWsuY29tL3NlcGFrYm9sYS9ib2xhLWR1bmlhL2QtNjg5NjQ4NS9rZXNhbG55YS1kZS1nZWEtZGFuLWNhc2lsbGFzLXVzYWktbHVpcy1ydWJpYWxlcy1tZW5vbGFrLW11bmR1ctIBeWh0dHBzOi8vc3BvcnQuZGV0aWsuY29tL3NlcGFrYm9sYS9ib2xhLWR1bmlhL2QtNjg5NjQ4NS9rZXNhbG55YS1kZS1nZWEtZGFuLWNhc2lsbGFzLXVzYWktbHVpcy1ydWJpYWxlcy1tZW5vbGFrLW11bmR1ci9hbXA?oc=5",
          "urlToImage":  "https://i.insider.com/64e8c84aa7adf70019080106?width=1200&format=jpeg",
          "publishedAt": "2023-08-26T01:00:10Z",
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
          "urlToImage":  "https://d33g3rbxseytqx.cloudfront.net/wp-content/uploads/2023/04/Apple-Pay-Later.png?_t=1681664039",
          "publishedAt": "2023-08-26T00:00:58Z",
          "content": null
        },
        {
          "source": {
            "id": "google-news",
            "name": "Google News"
          },
          "author": "Banjarmasin Post",
          "title": "Arsenal Tertawa Puas Transfer Striker Karena Chelsea Gagal dan Bek Tingggi Masuk Radar Gunners - Banjarmasin Post",
          "description": null,
          "url": "https://news.google.com/rss/articles/CBMijAFodHRwczovL2Jhbmphcm1hc2luLnRyaWJ1bm5ld3MuY29tLzIwMjMvMDgvMjYvYXJzZW5hbC10ZXJ0YXdhLXB1YXMtdHJhbnNmZXItc3RyaWtlci1rYXJlbmEtY2hlbHNlYS1nYWdhbC1kYW4tYmVrLXRpbmdnZ2ktbWFzdWstcmFkYXItZ3VubmVyc9IBkAFodHRwczovL2Jhbmphcm1hc2luLnRyaWJ1bm5ld3MuY29tL2FtcC8yMDIzLzA4LzI2L2Fyc2VuYWwtdGVydGF3YS1wdWFzLXRyYW5zZmVyLXN0cmlrZXIta2FyZW5hLWNoZWxzZWEtZ2FnYWwtZGFuLWJlay10aW5nZ2dpLW1hc3VrLXJhZGFyLWd1bm5lcnM?oc=5",
          "urlToImage": null,
          "publishedAt": "2023-08-25T23:54:13Z",
          "content": null
        },
        {
          "source": {
            "id": "google-news",
            "name": "Google News"
          },
          "author": "Bola.net",
          "title": "Al Ittihad Disebut Sebagai Bagian Taktik Newcastle untuk Kacaukan Pikiran Salah dan Liverpool - Bola.net",
          "description": null,
          "url": "https://news.google.com/rss/articles/CBMihgFodHRwczovL3d3dy5ib2xhLm5ldC9pbmdncmlzL2FsLWl0dGloYWQtZGlzZWJ1dC1zZWJhZ2FpLWJhZ2lhbi10YWt0aWstbmV3Y2FzdGxlLXVudHVrLWthY2F1a2FuLXBpa2lyYW4tc2FsYWgtZGFuLWxpdmVycG9vbC1lN2MxMDEuaHRtbNIBigFodHRwczovL3d3dy5ib2xhLm5ldC9hbXAvaW5nZ3Jpcy9hbC1pdHRpaGFkLWRpc2VidXQtc2ViYWdhaS1iYWdpYW4tdGFrdGlrLW5ld2Nhc3RsZS11bnR1ay1rYWNhdWthbi1waWtpcmFuLXNhbGFoLWRhbi1saXZlcnBvb2wtZTdjMTAxLmh0bWw?oc=5",
          "urlToImage": null,
          "publishedAt": "2023-08-25T23:45:00Z",
          "content": null
        },
        {
          "source": {
            "id": "google-news",
            "name": "Google News"
          },
          "author": "VIVA.co.id",
          "title": "Hasil Pertandingan: Chelsea Menang Besar, Bellingham Terus Berkilau di Real Madrid - VIVA - VIVA.co.id",
          "description": null,
          "url": "https://news.google.com/rss/articles/CBMigQFodHRwczovL3d3dy52aXZhLmNvLmlkL2JvbGEvbGlnYS1pbmdncmlzLzE2MzEyNjAtaGFzaWwtcGVydGFuZGluZ2FuLWNoZWxzZWEtbWVuYW5nLWJlc2FyLWJlbGxpbmdoYW0tdGVydXMtYmVya2lsYXUtZGktcmVhbC1tYWRyaWTSAYUBaHR0cHM6Ly93d3cudml2YS5jby5pZC9hbXAvYm9sYS9saWdhLWluZ2dyaXMvMTYzMTI2MC1oYXNpbC1wZXJ0YW5kaW5nYW4tY2hlbHNlYS1tZW5hbmctYmVzYXItYmVsbGluZ2hhbS10ZXJ1cy1iZXJraWxhdS1kaS1yZWFsLW1hZHJpZA?oc=5",
          "urlToImage": null,
          "publishedAt": "2023-08-25T23:33:00Z",
          "content": null
        },
        {
          "source": {
            "id": "google-news",
            "name": "Google News"
          },
          "author": "Goal.com",
          "title": "Rating Pemain Real Madrid Vs Celta Vigo: Jude Bellingham Jadi Bintangnya! Bintang Inggris Itu Beri Los Blancos Kemenangan Tipis Meski Vinicius Junior Cedera - Goal.com",
          "description": null,
          "url": "https://news.google.com/rss/articles/CBMif2h0dHBzOi8vd3d3LmdvYWwuY29tL2lkL2RhZnRhci9yYXRpbmctcGVtYWluLXJlYWwtbWFkcmlkLWNlbHRhLXZpZ28tanVkZS1iZWxsaW5naGFtLXZpbmljaXVzLWp1bmlvci1sYS1saWdhL2JsdDg3ZjIzMmYwZmYwNTkyODPSAQA?oc=5",
          "urlToImage": null,
          "publishedAt": "2023-08-25T22:58:00Z",
          "content": null
        },
        {
          "source": {
            "id": "google-news",
            "name": "Google News"
          },
          "author": "Tribun Medan",
          "title": "PREDIKSI SKOR PSS Sleman vs Persebaya, Line up Pemain Head to Head, Ambisi Uston Nawawi Rebut 3 Poin - Tribun Medan",
          "description": null,
          "url": "https://news.google.com/rss/articles/CBMiigFodHRwczovL21lZGFuLnRyaWJ1bm5ld3MuY29tLzIwMjMvMDgvMjYvcHJlZGlrc2ktc2tvci1wc3Mtc2xlbWFuLXZzLXBlcnNlYmF5YS1saW5lLXVwLXBlbWFpbi1oZWFkLXRvLWhlYWQtYW1iaXNpLXVzdG9uLW5hd2F3aS1yZWJ1dC0zLXBvaW7SAY4BaHR0cHM6Ly9tZWRhbi50cmlidW5uZXdzLmNvbS9hbXAvMjAyMy8wOC8yNi9wcmVkaWtzaS1za29yLXBzcy1zbGVtYW4tdnMtcGVyc2ViYXlhLWxpbmUtdXAtcGVtYWluLWhlYWQtdG8taGVhZC1hbWJpc2ktdXN0b24tbmF3YXdpLXJlYnV0LTMtcG9pbg?oc=5",
          "urlToImage": null,
          "publishedAt": "2023-08-25T22:50:36Z",
          "content": null
        },
        {
          "source": {
            "id": "google-news",
            "name": "Google News"
          },
          "author": "detikSport",
          "title": "Tuchel Jelaskan Alasan Bayern Belum Lepas Pavard ke Inter - detikSport",
          "description": null,
          "url": "https://news.google.com/rss/articles/CBMicWh0dHBzOi8vc3BvcnQuZGV0aWsuY29tL3NlcGFrYm9sYS9saWdhLWl0YWxpYS9kLTY4OTY0MDcvdHVjaGVsLWplbGFza2FuLWFsYXNhbi1iYXllcm4tYmVsdW0tbGVwYXMtcGF2YXJkLWtlLWludGVy0gF1aHR0cHM6Ly9zcG9ydC5kZXRpay5jb20vc2VwYWtib2xhL2xpZ2EtaXRhbGlhL2QtNjg5NjQwNy90dWNoZWwtamVsYXNrYW4tYWxhc2FuLWJheWVybi1iZWx1bS1sZXBhcy1wYXZhcmQta2UtaW50ZXIvYW1w?oc=5",
          "urlToImage": null,
          "publishedAt": "2023-08-25T22:30:00Z",
          "content": null
        },
        {
          "source": {
            "id": "google-news",
            "name": "Google News"
          },
          "author": "KOMPAS.com",
          "title": "FIBA World Cup, Reaksi Dillon Brooks soal \"Booo\" di Indonesia Arena - Kompas.com - KOMPAS.com",
          "description": null,
          "url": "https://news.google.com/rss/articles/CBMieGh0dHBzOi8vd3d3LmtvbXBhcy5jb20vc3BvcnRzL3JlYWQvMjAyMy8wOC8yNi8wNTAwMDAyOC9maWJhLXdvcmxkLWN1cC1yZWFrc2ktZGlsbG9uLWJyb29rcy1zb2FsLWJvb28tZGktaW5kb25lc2lhLWFyZW5hLdIBeGh0dHBzOi8vYW1wLmtvbXBhcy5jb20vc3BvcnRzL3JlYWQvMjAyMy8wOC8yNi8wNTAwMDAyOC9maWJhLXdvcmxkLWN1cC1yZWFrc2ktZGlsbG9uLWJyb29rcy1zb2FsLWJvb28tZGktaW5kb25lc2lhLWFyZW5hLQ?oc=5",
          "urlToImage": null,
          "publishedAt": "2023-08-25T22:00:00Z",
          "content": null
        },
        {
          "source": {
            "id": "google-news",
            "name": "Google News"
          },
          "author": "CNN Indonesia",
          "title": "Bos Ducati Blak-blakan Soal Rekrut Marc Marquez - CNN Indonesia",
          "description": null,
          "url": "https://news.google.com/rss/articles/CBMib2h0dHBzOi8vd3d3LmNubmluZG9uZXNpYS5jb20vb2xhaHJhZ2EvMjAyMzA4MjUxMjUzMzUtMTU2LTk5MDQwNS9ib3MtZHVjYXRpLWJsYWstYmxha2FuLXNvYWwtcmVrcnV0LW1hcmMtbWFycXVletIBc2h0dHBzOi8vd3d3LmNubmluZG9uZXNpYS5jb20vb2xhaHJhZ2EvMjAyMzA4MjUxMjUzMzUtMTU2LTk5MDQwNS9ib3MtZHVjYXRpLWJsYWstYmxha2FuLXNvYWwtcmVrcnV0LW1hcmMtbWFycXVlei9hbXA?oc=5",
          "urlToImage": null,
          "publishedAt": "2023-08-25T22:00:00Z",
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
        
export default Sports;
