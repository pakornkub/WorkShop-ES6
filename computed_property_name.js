let obj = ({one,two,three}) => {

    return {
        ['name'+one]: 'pakorn',
        ['name'+two]: 'worapong',
        ['name'+three]: 'thana'
    }

}


console.log(obj({one:1,two:2,three:3}));