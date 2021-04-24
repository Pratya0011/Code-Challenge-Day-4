//Barbossa and his three pirates found a treasure  of gold coins. Jack sparrow too joined them. 
// They decided to share the treasure. Barbossa  agreed to give x % share for jack sparrow. 
// He then decided to take y % share from the remaining treasure. His other pirates willl share equally the remaining gold coins. 
// Write a function to compute their share's.


//Write a function to return calculate the of JackShare.
function find_JackShare(goldCoin,X,Y){
    var a = (X / 100)*goldCoin
    
    return a;
}


//Write a function to retrun the  Barbossa share.
function find_BarbossaShare(goldCoin,X,Y){
    var a = (X / 100)*goldCoin;
    var c =goldCoin-a;
    var b = (Y / 100)*c;

    return b;
}


//Write a function to retrun the other pirates share.
function find_OtherShare(goldCoin,X,Y){
    var jack = (X / 100)*goldCoin;
    var gc =goldCoin-jack;
    var barbosa = (Y / 100)*gc;
    var d = gc-barbosa;
    var p = d/3;

    return p;  
}