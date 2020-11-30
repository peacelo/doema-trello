import React, {useState, useEffect} from 'react';

import '../App.css';

import JSZip from 'jszip';
import { saveAs } from 'file-saver';
import Axios from 'axios'


const apiKey = '02b8303f3c296818e1d5f30b3dd944db';
const apiToken = 'f0a48555f471168e3ed7d553ac0462c834b947fa2ac86c28f0f744b5f5e683bb';

const idModel = '5e77c872aafd4f367e9436d9'; // ID DO QUADRO ATENDIMENTO

const cardsUrl = `https://api.trello.com/1/boards/${idModel}/cards/visible?key=${apiKey}&token=${apiToken}`;

const cardAttachmentsUrl =  (cardId)=> `https://api.trello.com/1/cards/${cardId}/attachments?key=${apiKey}&token=${apiToken}`;




// function downloadChapter(urls) {
//     var zip = new JSZip();
//     var count = 0;
//     urls.forEach(file => {
//       Axios
//         .get(file, {
//           responseType: "blob"
//         })
//         .then(response => {
//           zip.file(count+".jpg", response.data, {
//             binary: true
//           });

//           ++count;

//           if (count == this.pages.length) {
//             zip
//               .generateAsync({
//                 type: "blob"
//               })
//               .then(function(content) {
//                 saveAs(content, new Date() + ".zip");
//               });
//           }
//         })
//         .catch(error => {
//           console.log(error);
//         });
//     });
// }




function getCardMonth (card){

const cardMonth = card.name.match(/\d+$/);
console.log(cardMonth);

}

const JournalsList = (props)=>{

   
    const [response, setResponse] = useState({cardsTerceiros: [], cardsExecutivo:[], isFetching: false});

    const [attachments, setAttachments] = useState([]);

    
    const fetchAttachments = async (id)=>{

        try{
            const resp = await fetch(cardAttachmentsUrl(id));
            const attachments = await resp.json();
            setAttachments(attachments);
            console.log(attachments)
            
        }catch(e){
            console.log(e);
        }
    }

    console.log(attachments);

    // if(attachments){
    //     const urls = attachments.map(att => att.url)
    //     downloadChapter(urls)
    // }


    useEffect(()=>{
        const fetchCards = async ()=>{
            try{
                setResponse({cardsExecutivo: [], cardsTerceiros: [], isFetching: true});
                const data = await fetch(cardsUrl);
                const response = await data.json();

                const cards = response.filter(card => card.name.match('MATÉRIAS'));
                console.log(cards.length)
                cards.map(card => console.log(card.name))
                const cardsTerceiros = response.filter(card => card.name[0] === 'T');
                const cardsExecutivo = response.filter(card => card.name[0] === 'E');

                setResponse({cardsTerceiros,  cardsExecutivo, isFetching: false});



            }catch(e){
                console.log(e);
            }
        }
        fetchCards();
    }, []);

    return(
        <React.Fragment>
                        <div className="row">
                            <div className="col s4">
                            {response.cardsExecutivo.map(card =>{
                        return <li onClick={()=> fetchAttachments(card.id)} key={card.id} >{card.name}</li>})
                        }
                            </div>
                        <div className="col s4">
                        {response.cardsTerceiros.map(card =>{
                        return <li onClick={()=> fetchAttachments(card.id)} key={card.id}>{card.name}</li>})
                        }
                        </div>
                        
                        <div className="col s4">
                        {attachments.map(att=>{
                            return(
                                <li key={att.id}> <a href={att.url}>{att.name}</a></li>
                            )
                        })}
                        </div>
                        </div>
        </React.Fragment>
        

    )

                        
}




export default JournalsList;