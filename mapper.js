


function useMap(formula) {
    console.log('useMap -function');
    console.log(formula);

    if( formula.length < 1 ) {
        console.log('No input');
        return;
    }

    const map1 = new Map();
    //let s1 = 'C8Cl23P333' //'Ca8Na16O2P4'
    let s1 = formula; 
    let n = 0;
    let count = 0;
    //split letters and numbers
    let splitted = s1.match(/[a-zA-Z]+|[0-9]+/g)

    //console.log(splitted[3]);

    count = splitted.length;
    //console.log(count);

    // Insert into a map
    // First; assert that we have pairs:count is 2,4,6...
    if(count % 2 == 0 )
    {
        splitted.forEach(function(item) {
            if(n<count)  
            {
                //console.log(splitted[n] + '-' + splitted[n+1]);
                map1.set(splitted[n], splitted[n+1]);
                n = n+2;
            }
        });
    }
    // insert into a map
    /*
    map1.set(splitted[0], splitted[1]);
    map1.set(splitted[2], splitted[3]);
    map1.set(splitted[4], splitted[5]);
    */

    map1.forEach((value, key) => {
        console.log(key + '=' + value, );
    });


    //console.log('Cl=' + map1.get('Cl'));

    // to make sure that we have a value in the map
    if(map1.has('Cl'))
    {
        console.log('map1.has Cl as ' + map1.get('Cl'));
    }

    fillFromMap(map1);

}

function fillFromMap(fillMap) {
    console.log('fillFromMap -function');

    console.log(document.getElementById('O').value);
    

    if(fillMap instanceof Map)
    {
        fillMap.forEach((value, key) => {
            console.log(key + '=' + value, );
            if(document.getElementById(key) !== null )
            {
                document.getElementById(key).value = value;
            }
        });
    }
}


function initMap() {
    console.log('initMap -function');

    const map1 = new Map();
    //let s1 = 'C8Cl23P333'
    let s1 = 'Ca8Na16O2P4'
    let n = 0;
    let count = 0;
    //split letters and numbers
    let splitted = s1.match(/[a-zA-Z]+|[0-9]+/g)

    //console.log(splitted[3]);

    count = splitted.length;
    //console.log(count);

    // Insert into a map
    // First; assert that we have pairs:count is 2,4,6...
    if(count % 2 == 0 )
    {
        splitted.forEach(function(item) {
            if(n<count)  
            {
                //console.log(splitted[n] + '-' + splitted[n+1]);
                map1.set(splitted[n], splitted[n+1]);
                n = n+2;
            }
        });
    }
    // insert into a map
    /*
    map1.set(splitted[0], splitted[1]);
    map1.set(splitted[2], splitted[3]);
    map1.set(splitted[4], splitted[5]);
    */

    map1.forEach((value, key) => {
    console.log(key + '=' + value, );
    });


    //console.log('Cl=' + map1.get('Cl'));

    // to make sure that we have a value in the map
    if(map1.has('Cl'))
    {
        console.log('map1.has Cl as ' + map1.get('Cl'));
    }

}