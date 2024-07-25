// Break keyword : Stop at that point

// Continue keyword : Skip at that point

for(let i=0; i<=10; i++){
    if(i===4){
        break;
    }
    console.log(i);
}

for(let i=0; i<=10; i++){
    if(i===4){
        continue; // 4 will be skipped
    }
    console.log(i);
}