import React from 'react';

// function Movie(props){
//     console.log(props.name);
//     return(
//         <h3>I Love Potato ♥</h3>
//     );
// }

function Movie({ name, picture }){
    // console.log({name});
    return(
        <div>
            <h2>I Love {name} ♥</h2>
            <img src={picture} />
        </div>
    );
}

const movieLike = [
    {
        name:"LaLa Land",
        image:"https://www.goldenglobes.com/sites/default/files/articles/cover_images/2017-la_la_land.jpg"
    },{
        name:"Kill Bill",
        image:"https://lh3.googleusercontent.com/proxy/tMm0zYrcgJq1Qp8ZQNWfoxOQPamEec10RPWUhzpWsEudD5vaXZli3kfu-E4D4018SvYOldWPlYYbNKgbbGN3Ao1E4_nbtlRaI2pfRsHLkCNbNFsoqocKNwXDUhVpafA2fP8YfGYymfSBDEHpt-mxGq9b0CLalT2ZK9xPVf7qOAs--NPTrtXUXfu82SKZZlI2wEgvWp6RZLbFwiOxlTWyMeo_OAE6t06DS3KUvuXfZlb2i0_GBkw9fhsTzRQRK-wdyjzpBwOrvCUD6NYMvfc9jMLItsfOGMXIRCZbOZF5gQTKIW1N"
    },{
        name:"Dunkirk",
        image:"https://lh3.googleusercontent.com/proxy/y8GlYzpVMRtQ_PFQEhydx0pXmmJsdGD-DJ0mohPxs17GucUMAQ5Nm8rJYOzfEJ7n_cPv2PGgtTp4x3sr6VjP1MMPdgz4oe6Y2qrZoXoCayZgjDDlORc9WI6Zy8cNopZEQOFzNkmgUOAI4DnCZ9g_EroVlyXBkk2DUa0iklOsr4Xn7Gu1ivXnRQZOnHDX9PnVZN4_qIJvy80GeD8nN12u-MUyGfuoKfCvHAHuZmJA8Kt430voozBWvlUcuXMTiWcadMZfhUgMewm6-7KHkE-Fs_u8gfkYfelccdbvSBg51M54yFOs"
    },{
        name:"Drive",
        image:"https://lh3.googleusercontent.com/proxy/gvBQt36syhwE4ENpCREiqzOcw1qNqbfS7vRq3WuZxkQ9rGGJL7NlHE6gteMP0wANSvh0ujnPkgiZjR7XQo5SvD6Imf_4OPuphDFn9j_EwVgp62uzeCw27g"
    },{
        name:"Jojo Rabbit",
        image:"https://www.ddingjag.com/files/attach/images/222683/268/442/1a16ded825840ffc334a0574a101f1be.jpg"
    }
];

// function App() {
//   return (
//     <div className="App">
//         <h1>Hello!</h1>
//         <Movie name="LaLa Land" />
//         <Movie name="Kill Bill" />
//         <Movie name="Dunkirk" />
//         <Movie name="1917" />
//     </div> 
//   );
// }

function App() {
    return (
      <div className="App">
            {movieLike.map(move => 
                <Movie name={move.name} picture={move.image} /> 
            )}
      </div> 
    );
  }

export default App;
