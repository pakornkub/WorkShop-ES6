let setName = ({title,reg},...person) => {

    let result = person.map((name)=>{
        return title+' '+name+' from '+reg;
    })

    console.log(result);

}

setName({title:'Mr.',reg:'TH'},'Pakorn','Sirichai','Worapong','Surat');