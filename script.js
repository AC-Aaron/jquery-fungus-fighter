$(document).ready(onReady);

console.log('***Fungus Fighter***');

// State Variables can be declared outside of the onReady
// Feel free to make this to what you want!
// Example:
// let fungusHP = 100;

//declare var to keep track of enemy hp
let fungusHealthPointsBar = 100;

let attackPoints = 100;

function onReady() {
//     //display HP
    
//     //target HP by id
//     let el = $('.hp-text');
//     //handle click event
//     $('attack-btn arcane-sceptre').on('click', attackFunction);
//     //end readyNow
    $(".arcane-sceptre").on('click', attackFungus);
    $(".entangle").on('click', attackFungus);
    $(".dragon-blade").on('click', attackFungus);
    $(".star-fire").on('click', attackFungus);
}

//     $("p").click(function(){
//         alert("The paragraph was clicked.");
//       });
// }

// $(.myClass).on('click', myFunction)
    
function attackFungus() {
    console.log('you clicked one of the attack buttons!!');
    attackPoints -= 10
    console.log('Fungus healthpoints down by 10')
    adjustFungusHP;

}

function adjustFungusHP() {
    $('.hp-text').text('score')
}


// function onReady() {
//     console.log('inside onReady function');

    
    // Make sure you check the index.html file! 
    // There are lots of buttons and things ready for you to hook into here!
    
    
    // 🧠 Remember
    // - Handle events that ->
    // - Updates state which is ->
    // - Rendered to the DOM